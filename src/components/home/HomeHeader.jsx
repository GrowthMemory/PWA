import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HomeContext } from "../context/context";

export default function HomeHeader() {
  const { retrospectionNumber, wiseSaying, setWiseSaying } =
    useContext(HomeContext);

  useEffect(() => {
    getWiseSaying(setWiseSaying);
  }, []);

  return (
    <Div>
      <Span>
        회고 <span className="dayNumber">{retrospectionNumber}</span>일차
      </Span>
      <Ptext>
        {wiseSaying.txt} -{wiseSaying.author}-
      </Ptext>
    </Div>
  );
}

async function getWiseSaying(setWiseSaying) {
  try {
    let response = await fetch(`dumy/wiseSaying.json`);
    let data = await response.json();
    setWiseSaying(data);
  } catch (err) {
    console.log("err", err);
  }
}

const Div = styled.div`
  margin-top: 63px;
  width: 100%;
  height: 100px;
  background-color: aqua;
`;

const Span = styled.span`
  margin-left: 25px;
  color: #636366;
  font-size: 20px;
  font-weight: 500;

  .dayNumber {
    color: #5ac479;
    font-size: 34px;
    font-weight: 700;
  }
`;

const Ptext = styled.p`
  margin: 9px 0 0 25px;
  width: 205px;
  color: #363639;
  font-size: 12px;
`;

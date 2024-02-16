import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../context/context";
import * as s from "../css/home/homeHeader";

export default function HomeHeader() {
  const { retrospectionNumber, wiseSaying, setWiseSaying } =
    useContext(HomeContext);

  useEffect(() => {
    getWiseSaying(setWiseSaying);
  }, []);

  return (
    <s.Div>
      <s.Span>
        회고 <s.DayNumber>{retrospectionNumber}</s.DayNumber>일차
      </s.Span>
      <s.Ptext>
        {wiseSaying.txt} -{wiseSaying.author}-
      </s.Ptext>
    </s.Div>
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

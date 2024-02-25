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
        언제나 현재에 집중할수 있다면 행복할것이다 -파울로 코엘료-
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

import { useState } from "react";
import { WriteContext } from "../context/context";
import { useImmer } from "use-immer";

export default function WriteProvider(props) {
  let currentDate = new Date();
  const [date, updateDate] = useImmer([
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  ]);
  return (
    <WriteContext.Provider value={{ date, updateDate }}>
      {props.children}
    </WriteContext.Provider>
  );
}

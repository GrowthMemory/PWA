import { useState } from "react";
import { WriteContext } from "../context/context";
import { useImmer } from "use-immer";

let currentDate = new Date();
export default function WriteProvider(props) {
  const [retrospectionData, updateRetrospectionData] = useImmer(defaultData);
  return (
    <WriteContext.Provider
      value={{ retrospectionData, updateRetrospectionData }}
    >
      {props.children}
    </WriteContext.Provider>
  );
}

const defaultData = {
  date: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: currentDate.getDate(),
  },
  text: {
    keep: "",
    problem: "",
    try: "",
  },
};

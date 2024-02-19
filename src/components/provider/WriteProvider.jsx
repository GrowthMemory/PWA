import { useState } from "react";
import { SELECTDATE } from "../common/key";
import { WriteContext } from "../context/context";
import { useImmer } from "use-immer";
let currentDate = new Date();
export default function WriteProvider(props) {
  const [retrospectionData, updateRetrospectionData] = useImmer(
    localStorage.getItem(SELECTDATE)
      ? JSON.parse(localStorage.getItem(SELECTDATE))
      : defaultData
  );
  const [checkRetrospection, setCheckRetrospection] = useState(false);
  const [data, updateData] = useImmer({});
  const [correctDate, setCorrectDate] = useState(false);
  return (
    <WriteContext.Provider
      value={{
        retrospectionData,
        updateRetrospectionData,
        SELECTDATE,
        checkRetrospection,
        setCheckRetrospection,
        data,
        updateData,
        correctDate,
        setCorrectDate,
      }}
    >
      {props.children}
    </WriteContext.Provider>
  );
}

const defaultData = {
  date: {
    year: currentDate.getFullYear(),
    month: `${
      currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1
    }`,
    date: currentDate.getDate(),
  },
  text: {
    keep: null,
    problem: null,
    try: null,
  },
};

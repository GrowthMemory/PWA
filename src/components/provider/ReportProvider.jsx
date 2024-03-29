import { useState } from "react";
import { ReportContext } from "../context/context";
import { useImmer } from "use-immer";

const currentDate = new Date();
export default function ReportProvider(props) {
  const [showCategoryBtn, setShowCategoryBtn] = useState(true);
  const [selcetDate, updateSelctDate] = useImmer(defaultDate);
  const [currentCategory, setCurrentCategory] = useState("week");
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);
  const [clicked, updateClicked] = useImmer([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [lineData, updateLineData] = useImmer([["date", "emotional figures"]]);
  const [feelingData, updateFeelingData] = useImmer([
    ["day", "num", "num", "num", "num"],
  ]);
  const [retrospectionNum, setRetrospectionNum] = useState(0);
  const [currentStatusObj, setCurrentStatusObj] = useImmer({
    score: 0,
    text: "평균적인",
  });
  const [showChart, setShowChart] = useImmer({
    week: false,
    month: false,
    year: false,
  });
  const [data, setData] = useState([]);
  return (
    <ReportContext.Provider
      value={{
        showCategoryBtn,
        setShowCategoryBtn,
        selcetDate,
        updateSelctDate,
        currentCategory,
        setCurrentCategory,
        nextMonth,
        setNextMonth,
        prevMonth,
        setPreveMonth,
        clicked,
        updateClicked,
        showCalendar,
        setShowCalendar,
        lineData,
        updateLineData,
        feelingData,
        updateFeelingData,
        retrospectionNum,
        setRetrospectionNum,
        currentStatusObj,
        setCurrentStatusObj,
        showChart,
        setShowChart,
        data,
        setData,
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
}

const end = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 6
);

const defaultDate = {
  startDate: {
    year: currentDate.getFullYear(),
    month: `${
      currentDate.getMonth() < 10
        ? "0" + (currentDate.getMonth() + 1)
        : currentDate.getMonth() + 1
    }`,
    date: `${
      currentDate.getDate() < 10
        ? "0" + currentDate.getDate()
        : currentDate.getDate()
    }`,
  },
  endDate: {
    year: end.getFullYear(),
    month: `${
      end.getMonth() < 10 ? "0" + (end.getMonth() + 1) : end.getMonth() + 1
    }`,
    date: `${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()}`,
  },
};

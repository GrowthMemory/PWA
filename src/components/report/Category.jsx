import { useContext, useEffect } from "react";
import { ReportContext } from "../context/context";
import * as Func from "./categoryFunc";
import ReportCalendar from "../common/InputCalendar";
import WriteProvider from "../provider/WriteProvider";
import * as s from "../css/report/category";
export default function Category() {
  const {
    showCategoryBtn,
    setShowCategoryBtn,
    selcetDate,
    updateSelctDate,
    currentCategory,
    setCurrentCategory,
    showCalendar,
    setShowCalendar,
    clicked,
  } = useContext(ReportContext);
  useEffect(() => {
    setShowCategoryBtn(true);
  }, []);
  useEffect(() => {
    if (clicked.length == 2) setShowCalendar(false);
  }, [clicked]);
  return (
    <s.Div>
      <s.Btn
        onClick={() => {
          Func.dateFunc(setCurrentCategory, updateSelctDate);
        }}
        style={
          currentCategory == "week"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        주간
      </s.Btn>
      <s.Btn
        onClick={() => {
          Func.monthFunc(setCurrentCategory, updateSelctDate);
        }}
        style={
          currentCategory == "month"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        월간
      </s.Btn>
      <s.Btn
        onClick={() => {
          Func.yearFunc(setCurrentCategory, updateSelctDate);
        }}
        style={
          currentCategory == "year"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        연간
      </s.Btn>
      {showCategoryBtn && (
        <s.DateSelectBtn
          onClick={() => {
            setShowCalendar((prev) => !prev);
            setCurrentCategory("custom");
          }}
        >
          기간 선택
          <s.DownIcon />
        </s.DateSelectBtn>
      )}
      {!showCategoryBtn && (
        <s.CurrentDate
          onClick={() => {
            setShowCalendar((prev) => !prev);
          }}
        >
          <span>{`${selcetDate.startDate.year}.${selcetDate.startDate.month}.${selcetDate.startDate.date}~${selcetDate.endDate.year}.${selcetDate.endDate.month}.${selcetDate.endDate.date}`}</span>
        </s.CurrentDate>
      )}
      <WriteProvider>{showCalendar && <ReportCalendar />}</WriteProvider>
    </s.Div>
  );
}

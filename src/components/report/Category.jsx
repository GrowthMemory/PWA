import { useContext, useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
import styled from "styled-components";
import { ReportContext } from "../context/context";
import * as Func from "./categoryFunc";
import ReportCalendar from "../common/InputCalendar";
import WriteProvider from "../provider/WriteProvider";
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
    <Div>
      <Btn
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
      </Btn>
      <Btn
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
      </Btn>
      <Btn
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
      </Btn>
      {showCategoryBtn && (
        <DateSelectBtn
          onClick={() => {
            setShowCalendar((prev) => !prev);
            setCurrentCategory("custom");
          }}
        >
          기간 선택
          <DownIcon />
        </DateSelectBtn>
      )}
      {!showCategoryBtn && (
        <CurrentDate
          onClick={() => {
            setShowCalendar((prev) => !prev);
          }}
        >
          <span>{`${selcetDate.startDate.year}.${selcetDate.startDate.month}.${selcetDate.startDate.date}~${selcetDate.endDate.year}.${selcetDate.endDate.month}.${selcetDate.endDate.date}`}</span>
        </CurrentDate>
      )}
      <WriteProvider>{showCalendar && <ReportCalendar />}</WriteProvider>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 7px;
  width: 328px;
  height: 26px;
  display: flex;
  position: relative;
  z-index: 2;
`;

const Btn = styled.button`
  margin-right: 6px;
  width: 41px;
  height: 26px;
  border: none;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

const DateSelectBtn = styled.button`
  width: 71px;
  height: 26px;
  border: none;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

const DownIcon = styled(FaSortDown)`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 71px;
  height: 26px;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 115px;
  background-color: transparent;

  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-text,
  &::-webkit-calendar-picker-indicator,
  &::-webkit-inner-spin-button {
    appearance: none;
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: block;
    padding-left: 200px;
  }
`;

const CurrentDate = styled.div`
  padding: 0 10px 0 10px;
  width: auto;
  height: 26px;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ac479;
`;

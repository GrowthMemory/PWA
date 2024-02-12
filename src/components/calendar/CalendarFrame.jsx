import { CalendarContext } from "../context/context";
import { useContext, useState } from "react";
import styled from "styled-components";
import CalendarFunction from "./CalendarFunction";
import { IoTriangle } from "react-icons/io5";
import InputCalendar from "../common/InputCalendar";
import WriteProvider from "../provider/WriteProvider";
export default function CalendarFrame() {
  const {
    currentDate,
    nextMonth,
    setNextMonth,
    prevMonth,
    setPreveMonth,
    selectDate,
    updateSelectDate,
  } = useContext(CalendarContext);
  const dates = CalendarFunction(currentDate, nextMonth, prevMonth);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Div>
      <DateBox>
        <span>
          {selectDate.year}년{selectDate.month}월
        </span>
        <CalendarBtn />
      </DateBox>
      <WriteProvider>
        <InputCalendar />
      </WriteProvider>
      <Table>
        <Thead>
          <tr>
            {days.map((x, n) =>
              x == "일" ? (
                <th key={n} style={{ color: "red" }}>
                  {x}
                </th>
              ) : x == "토" ? (
                <th key={n} style={{ color: "blue" }}>
                  {x}
                </th>
              ) : (
                <th key={n}>{x}</th>
              )
            )}
          </tr>
        </Thead>
        <Tbody>
          {dates.map((week, n) => (
            <tr key={n}>
              {week.map((date, n2) =>
                date == 0 ? (
                  <td key={n2} style={{ visibility: "hidden" }}></td>
                ) : (
                  <td key={n2}>
                    <div>
                      <img src="" alt="" />
                    </div>
                    <span>{date}</span>
                  </td>
                )
              )}
            </tr>
          ))}
        </Tbody>
      </Table>
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateBox = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;

const CalendarBtn = styled(IoTriangle)`
  margin-left: 4px;
  font-size: 12px;
  transform: rotate(180deg);
`;

const Table = styled.table`
  width: 317px;
  height: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 46px;
`;

const Thead = styled.thead`
  width: 295px;
  height: 50px;
  font-size: 16px;

  tr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  th {
    width: 15px;
    height: 20px;
    font-weight: 400;
  }
`;

const Tbody = styled.tbody`
  width: 100%;
  height: 292px;

  tr {
    width: 100%;
    height: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  td {
    width: 35px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  td div {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #d9d9d9;
  }
  td span {
    margin-top: 5px;
    font-size: 8px;
    font-weight: 500;
  }
`;

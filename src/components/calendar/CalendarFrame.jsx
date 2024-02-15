import { CalendarContext, WriteContext } from "../context/context";
import { useContext, useState } from "react";
import CalendarFunction from "./CalendarFunction";
import InputCalendar from "../common/InputCalendar";
import GoingRetrospection from "./GoingRetrospection";
import { SELECTDATE } from "../common/key";
import { useLocation } from "react-router-dom";
import * as s from "../css/calendar/calendarFram";
export default function CalendarFrame() {
  const {
    currentDate,
    nextMonth,
    prevMonth,
    selectDate,
    setTempDate,
    showModal,
    setShowModal,
  } = useContext(CalendarContext);
  const { retrospectionData } = useContext(WriteContext);
  const location = useLocation().pathname;
  const dates = CalendarFunction(currentDate, nextMonth, prevMonth, location);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <s.Div>
      <s.DateBox>
        <span>
          {selectDate.year}년{selectDate.month}월
        </span>
        <s.CalendarBtn />
      </s.DateBox>
      <InputCalendar />
      <s.Table>
        <s.Thead>
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
        </s.Thead>
        <s.Tbody>
          {dates.map((week, n) => (
            <tr key={n}>
              {week.map((date, n2) =>
                date == 0 ? (
                  <td key={n2} style={{ visibility: "hidden" }}></td>
                ) : (
                  <td
                    key={n2}
                    onClick={(e) => {
                      setTempDate(() => {
                        let temp = [
                          currentDate.getFullYear(),
                          currentDate.getMonth() + 1,
                          date,
                        ];
                        return temp;
                      });
                      let temp = {
                        ...retrospectionData,
                        date: {
                          ...retrospectionData.date,
                          year: currentDate.getFullYear(),
                          month: currentDate.getMonth() + 1,
                          date: date,
                        },
                      };
                      localStorage.setItem(SELECTDATE, JSON.stringify(temp));
                      setShowModal(true);
                    }}
                  >
                    <div>
                      <img src="" alt="" />
                    </div>
                    <span>{date}</span>
                  </td>
                )
              )}
            </tr>
          ))}
        </s.Tbody>
      </s.Table>
      {showModal && <GoingRetrospection />}
    </s.Div>
  );
}

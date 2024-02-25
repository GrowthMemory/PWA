import { CalendarContext, WriteContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import CalendarFunction from "./CalendarFunction";
import GoingRetrospection from "./GoingRetrospection";
import { SELECTDATE } from "../common/key";
import { useLocation } from "react-router-dom";
import * as s from "../css/calendar/calendarFram";
import SelectMonth from "./SelectMonth";
export default function CalendarFrame() {
  const {
    currentDate,
    nextMonth,
    prevMonth,
    setTempDate,
    showModal,
    setShowModal,
    showCalendar,
    setShowCalendar,
    modalText,
    setModalText,
  } = useContext(CalendarContext);
  const { retrospectionData } = useContext(WriteContext);
  const location = useLocation().pathname;
  const dates = CalendarFunction(currentDate, nextMonth, prevMonth, location);
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <s.Div>
      <s.DateBox>
        <span
          onClick={() => {
            setShowCalendar(true);
          }}
        >
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </span>
        <s.CalendarBtn />
      </s.DateBox>
      {showCalendar && <SelectMonth />}
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
                          month:
                            currentDate.getMonth() + 1 < 10
                              ? "0" + (currentDate.getMonth() + 1)
                              : currentDate.getMonth() + 1,
                          date: date < 10 ? "0" + date : date,
                        },
                      };
                      localStorage.setItem(SELECTDATE, JSON.stringify(temp));
                      setShowModal(true);
                    }}
                  >
                    <div
                      onClick={() => {
                        setModalText(() => {
                          if (
                            (date == 15 && currentDate.getMonth() + 1 == 2) ||
                            (date == 16 && currentDate.getMonth() + 1 == 2) ||
                            (date == 17 && currentDate.getMonth() + 1 == 2) ||
                            (date == 18 && currentDate.getMonth() + 1 == 2) ||
                            (date == 19 && currentDate.getMonth() + 1 == 2) ||
                            (date == 20 && currentDate.getMonth() + 1 == 2) ||
                            (date == 21 && currentDate.getMonth() + 1 == 2)
                          ) {
                            return "회고를 보시겠어요?";
                          } else {
                            return "회고를 작성하시겠어요?";
                          }
                        });
                      }}
                    >
                      {((date == 15 && currentDate.getMonth() + 1 == 2) ||
                        (date == 16 && currentDate.getMonth() + 1 == 2) ||
                        (date == 17 && currentDate.getMonth() + 1 == 2) ||
                        (date == 18 && currentDate.getMonth() + 1 == 2) ||
                        (date == 19 && currentDate.getMonth() + 1 == 2) ||
                        (date == 20 && currentDate.getMonth() + 1 == 2) ||
                        (date == 21 && currentDate.getMonth() + 1 == 2)) && (
                        <img
                          src={`${
                            date == 15 || date == 18 || date == 20 || date == 21
                              ? "img/soso.png"
                              : date == 16 || date == 17 || date == 19
                              ? "img/happy.png"
                              : ""
                          }`}
                          alt=""
                        />
                      )}
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

import { useContext, useEffect, useState } from "react";
import CalendarFunction from "../calendar/CalendarFunction";
import { ReportContext, WriteContext } from "../context/context";
import { useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import * as s from "../css/common/inputCalendar";
export default function ReportCalendar(props) {
  const currentDate = new Date();
  const {
    nextMonth,
    setNextMonth,
    prevMonth,
    setPreveMonth,
    clicked,
    updateClicked,
    setShowCategoryBtn,
    updateSelctDate,
    showCategoryBtn,
  } = useContext(ReportContext);

  const { updateRetrospectionData, retrospectionData } =
    useContext(WriteContext);

  const location = useLocation().pathname;
  const dates = CalendarFunction(currentDate, nextMonth, prevMonth, location);
  let current = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + prevMonth,
    0
  );
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  useEffect(() => {
    if (location == "/Report") {
      if (clicked.length == 2) {
        setDate(clicked, updateSelctDate);
        setShowCategoryBtn(false);
      }
    }
  }, [clicked]);
  return (
    <>
      <s.Triangle
        showCategoryBtn={showCategoryBtn}
        location={location}
      ></s.Triangle>
      <s.Div location={location}>
        <s.HandleDate>
          <FaAngleLeft
            onClick={() => {
              setNextMonth((prev) => prev - 1);
              setPreveMonth((prev) => prev - 1);
            }}
          />
          <span>{`${current.getFullYear()}년 ${
            current.getMonth() + 1
          }월 `}</span>
          <FaAngleRight
            onClick={() => {
              setNextMonth((prev) => prev + 1);
              setPreveMonth((prev) => prev + 1);
            }}
          />
        </s.HandleDate>
        <s.Table>
          <s.Thead>
            <tr>
              {days.map((x, n) => (
                <th key={n}>{x}</th>
              ))}
            </tr>
          </s.Thead>
          <s.Tbody>
            {dates.map((week, n) => (
              <tr key={n}>
                {week.map((date, n2) => (
                  <s.Td
                    key={n2}
                    location={location}
                    date={
                      n == 0 && date > 15
                        ? `${current.getFullYear()}.${
                            current.getMonth() < 10
                              ? `0${current.getMonth()}`
                              : current.getMonth()
                          }.${date < 10 ? `0${date}` : date}`
                        : n >= 4 && date < 15
                        ? `${current.getFullYear()}.${
                            current.getMonth() + 2 < 10
                              ? `0${current.getMonth() + 2}`
                              : current.getMonth() + 2
                          }.${date < 10 ? `0${date}` : date}`
                        : `${current.getFullYear()}.${
                            current.getMonth() + 1 < 10
                              ? `0${current.getMonth() + 1}`
                              : current.getMonth() + 1
                          }.${date < 10 ? `0${date}` : date}`
                    }
                    write={`${retrospectionData.date.year}.${
                      retrospectionData.date.month < 10
                        ? `0${retrospectionData.date.month}`
                        : retrospectionData.date.month
                    }.${
                      retrospectionData.date.date < 10
                        ? `0${retrospectionData.date.date}`
                        : retrospectionData.date.date
                    }`}
                    start={clicked[0] ?? 365}
                    end={clicked[1] ?? 365}
                    onClick={(e) => {
                      let prev = `${current.getFullYear()}.${
                        current.getMonth() < 10
                          ? `0${current.getMonth()}`
                          : current.getMonth()
                      }.${
                        e.target.innerText < 10
                          ? `0${e.target.innerText}`
                          : e.target.innerText
                      }`;

                      let now = `${current.getFullYear()}.${
                        current.getMonth() + 1 < 10
                          ? `0${current.getMonth() + 1}`
                          : current.getMonth() + 1
                      }.${
                        e.target.innerText < 10
                          ? `0${e.target.innerText}`
                          : e.target.innerText
                      }`;

                      let next = `${current.getFullYear()}.${
                        current.getMonth() + 2 < 10
                          ? `0${current.getMonth() + 2}`
                          : current.getMonth() + 2
                      }.${
                        e.target.innerText < 10
                          ? `0${e.target.innerText}`
                          : e.target.innerText
                      }`;

                      if (location == "/Report") {
                        if (clicked.length != 2) {
                          updateClicked((date) => {
                            if (n == 0 && e.target.innerText > 15) {
                              date.push(prev);
                            } else if (n >= 4 && e.target.innerText < 15) {
                              date.push(next);
                            } else {
                              date.push(now);
                            }
                            date.sort((a, b) => a - b);
                          });
                        }
                        if (clicked.length == 2) {
                          updateClicked((date) => {
                            if (n == 0 && e.target.innerText > 15) {
                              if (date.indexOf(prev) != -1) {
                                date = date.filter((x) => x != prev);
                              }
                            } else if (n >= 4 && e.target.innerText < 15) {
                              if (date.indexOf(next) != -1) {
                                date = date.filter((x) => x != next);
                              }
                            } else {
                              if (date.indexOf(now) != -1) {
                                date = date.filter((x) => x != now);
                              }
                            }
                            return date;
                          });
                        }
                      }
                      if (location == "/Write") {
                        updateRetrospectionData((data) => {
                          if (n == 0 && e.target.innerText > 15) {
                            setWriteDate(data, prev);
                          } else if (n >= 4 && e.target.innerText < 15) {
                            setWriteDate(data, next);
                          } else {
                            setWriteDate(data, now);
                          }
                        });
                        props.setShowCalendar(false);
                      }
                    }}
                  >
                    {date}
                  </s.Td>
                ))}
              </tr>
            ))}
          </s.Tbody>
        </s.Table>
      </s.Div>
    </>
  );
}

function setDate(clicked, updateSelctDate) {
  let start = clicked[0].split(".");
  let end = clicked[1].split(".");
  updateSelctDate((date) => {
    date.startDate.year = start[0];
    date.startDate.month = start[1];
    date.startDate.date = start[2];
    date.endDate.year = end[0];
    date.endDate.month = end[1];
    date.endDate.date = end[2];
  });
}

function setWriteDate(data, selectDate) {
  let split = selectDate.split(".");
  data.date.year = split[0];
  data.date.month = split[1];

  if (split[2][0] == 0) {
    data.date.date = split[2].substring(1, 2);
  } else {
    data.date.date = split[2];
  }
}

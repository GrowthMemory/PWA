import { useContext, useEffect, useState } from "react";
import CalendarFunction from "../calendar/CalendarFunction";
import { ReportContext, WriteContext } from "../context/context";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
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
      <Triangle
        showCategoryBtn={showCategoryBtn}
        location={location}
      ></Triangle>
      <Div location={location}>
        <HandleDate>
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
        </HandleDate>
        <Table>
          <Thead>
            <tr>
              {days.map((x, n) => (
                <th key={n}>{x}</th>
              ))}
            </tr>
          </Thead>
          <Tbody>
            {dates.map((week, n) => (
              <tr key={n}>
                {week.map((date, n2) => (
                  <Td
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
                  </Td>
                ))}
              </tr>
            ))}
          </Tbody>
        </Table>
      </Div>
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
  if (split[1][0] == 0) {
    data.date.month = split[1].substring(1, 2);
  } else {
    data.date.month = split[1];
  }
  if (split[2][0] == 0) {
    data.date.date = split[2].substring(1, 2);
  } else {
    data.date.date = split[2];
  }
}

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid #a5a5a5;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: ${(props) =>
    props.location == "/Report"
      ? "relative"
      : props.location == "/Write"
      ? "absolute"
      : ""};
  top: ${(props) =>
    props.location == "/Report"
      ? "31px"
      : props.location == "/Write"
      ? "46px"
      : ""};
  right: ${(props) =>
    props.location == "/Report"
      ? props.showCategoryBtn
        ? "48px"
        : "90px"
      : props.location == "/Write"
      ? "170px"
      : ""};
  z-index: 2;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 10px solid #f9f9f9;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: 2px;
    left: -9.5px;
  }
`;

const Div = styled.div`
  width: 210px;
  height: 230px;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${(props) =>
    props.location == "/Report"
      ? "40px"
      : props.location == "/Write"
      ? "55px"
      : ""};
  right: ${(props) =>
    props.location == "/Report"
      ? "50px"
      : props.location == "/Write"
      ? "75px"
      : ""};
  background-color: #f9f9f9;
`;

const HandleDate = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 30px 0 30px;
  }
`;

const Table = styled.table`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thead = styled.thead`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #a5a5a5;

  tr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  th {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
  }
`;

const Tbody = styled.tbody`
  padding: 3px 3px 5px 3px;
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  tr {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Td = styled.td`
  width: 25px;
  height: 25px;
  color: ${(props) =>
    props.date == props.start || props.date == props.end ? "#f9f9f9" : "black"};
  border-radius: 3px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.location == "/Report"
      ? props.date == props.start || props.date == props.end
        ? "#5ac479"
        : ""
      : props.location == "/Write"
      ? props.date == props.write
        ? "#5ac479"
        : ""
      : ""};
`;

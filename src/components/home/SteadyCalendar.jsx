import styled from "styled-components";
import * as func from "./steadyCalendarFunction";
import { useContext, useEffect } from "react";
import { HomeContext } from "../context/context";

export default function SteadyCalendar() {
  const { retrospectionData, setRetrospectionData, setRetrospectionNumber } =
    useContext(HomeContext);
  let currentYear = new Date().getFullYear();
  let dayArr = ["S", "M", "T", "W", "T", "F", "S"];
  let dateArr = func.createDataArr();
  let monthArr = func.createMonthArr(dateArr);

  useEffect(() => {
    getRetrospectionData();
  }, []);

  let date = [];

  retrospectionData.forEach((x) => {
    let temp = x["날짜"].replace(/년|월|일/g, "");
    date.push(temp.split(" "));
  });

  async function getRetrospectionData() {
    try {
      const response = await fetch("dumy/test.json");
      const data = await response.json();
      setRetrospectionData(() => {
        let temp = data.data;
        return temp;
      });
      setRetrospectionNumber(data.data.length);
    } catch (err) {
      console.log(err);
    }
  }

  function checkFunc(n2, n, d) {
    let mon = n;
    if (n2 >= 3 && d < 10) mon += 2;
    else mon += 1;
    let check = "";
    for (let i = 0; i < date.length; i++) {
      if (date[i][1] == mon && date[i][2] == d && date[i][0] == currentYear) {
        check = "check";
        break;
      }
    }
    return check;
  }

  return (
    <Div>
      <DayBox>
        {dayArr.map((day, n) => (
          <span key={day + n}>{day}</span>
        ))}
      </DayBox>
      <CalenderBox className="scroll">
        <MonthBox>
          {monthArr.map((month, monthNum) => (
            <Month key={month}>
              <span>{monthNum + 1 + "월"}</span>
              <WeekBox>
                {month.map((week, weekNum) => (
                  <Week key={week}>
                    {week.map((day) => {
                      return (
                        <DateBox
                          className={` m${
                            weekNum >= 3 && day < 10
                              ? monthNum + 2
                              : monthNum + 1
                          }d${day} ${checkFunc(weekNum, monthNum, day)}`}
                          key={day}
                        ></DateBox>
                      );
                    })}
                  </Week>
                ))}
              </WeekBox>
            </Month>
          ))}
        </MonthBox>
      </CalenderBox>
    </Div>
  );
}

const Div = styled.div`
  width: 312px;
  height: 171px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  .scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #636366;
    border-radius: 10px;
  }
`;

const CalenderBox = styled.div`
  width: 310px;
  height: 170px;
  display: flex;
  overflow-x: scroll;

  .check {
    background-color: #5ac479;
  }
`;

const MonthBox = styled.div`
  margin: 8px 0 0 0;
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
`;
const Month = styled.div`
  width: auto;
  height: 135px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 11px;
  }
`;

const WeekBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Week = styled.div`
  width: 17px;
  height: 100%;
`;

const DateBox = styled.div`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: #e3e3e3;
`;

const DayBox = styled.div`
  margin: 32px 0 0 5px;
  width: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  font-size: 11px;

  span {
    margin: 0 0 4px 0;
  }
`;

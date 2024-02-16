import * as func from "./steadyCalendarFunction";
import { useContext, useEffect } from "react";
import { HomeContext } from "../context/context";
import * as s from "../css/home/steadyCalendar";

export default function SteadyCalendar() {
  const { retrospectionData, setRetrospectionData, setRetrospectionNumber } =
    useContext(HomeContext);
  let currentYear = new Date().getFullYear();
  let dayArr = ["S", "M", "T", "W", "T", "F", "S"];
  let dateArr = func.createDataArr();
  let monthArr = func.createMonthArr(dateArr);

  useEffect(() => {
    getRetrospectionData(setRetrospectionData, setRetrospectionNumber);
  }, []);

  let date = [];

  retrospectionData.forEach((x) => {
    let temp = x["날짜"].replace(/년|월|일/g, "");
    date.push(temp.split(" "));
  });

  return (
    <s.Div>
      <s.DayBox>
        {dayArr.map((day, n) => (
          <span key={day + n}>{day}</span>
        ))}
      </s.DayBox>
      <s.CalenderBox>
        <s.MonthBox>
          {monthArr.map((month, monthNum) => (
            <s.Month key={month}>
              <span>{monthNum + 1 + "월"}</span>
              <s.WeekBox>
                {month.map((week, weekNum) => (
                  <s.Week key={week}>
                    {week.map((day) => {
                      return checkFunc(
                        weekNum,
                        monthNum,
                        day,
                        date,
                        currentYear
                      ) == "check" ? (
                        <s.Checked key={day}></s.Checked>
                      ) : (
                        <s.DateBox key={day}></s.DateBox>
                      );
                    })}
                  </s.Week>
                ))}
              </s.WeekBox>
            </s.Month>
          ))}
        </s.MonthBox>
      </s.CalenderBox>
    </s.Div>
  );
}

async function getRetrospectionData(
  setRetrospectionData,
  setRetrospectionNumber
) {
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

function checkFunc(n2, n, d, date, currentYear) {
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

import { CalendarContext, WriteContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import CalendarFunction from "./CalendarFunction";
import GoingRetrospection from "./GoingRetrospection";
import { SELECTDATE } from "../common/key";
import { useLocation } from "react-router-dom";
import * as s from "../css/calendar/calendarFram";
import SelectMonth from "./SelectMonth";
import { ReadReview, getUserAllReviews } from "../../service/db";
import { getUID } from "../../service/auth";
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
    setModalText,
    emoji,
    updateEmoji,
  } = useContext(CalendarContext);
  const { retrospectionData } = useContext(WriteContext);
  const location = useLocation().pathname;
  const dates = CalendarFunction(currentDate, nextMonth, prevMonth, location);
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    let uid = getUID();
    if (uid) {
      getEmoji(uid, updateEmoji);
    }
  }, []);

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
                        modalTextFunc(date, currentDate, setModalText, emoji);
                      }}
                    >
                      {emojiFunc(date, emoji, currentDate)}
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

async function getEmoji(uid, updateEmoji) {
  let temp = (await getUserAllReviews(uid)) ?? null;
  let key = Object.keys(temp);

  updateEmoji((data) => {
    let emoji = "";
    key.forEach((x) => {
      if (temp[x]["mean_score"] >= -50 && temp[x]["mean_score"] < -30) {
        emoji = "verySad";
      } else if (temp[x]["mean_score"] >= -30 && temp[x]["mean_score"] < -10) {
        emoji = "sad";
      } else if (temp[x]["mean_score"] >= -10 && temp[x]["mean_score"] < 10) {
        emoji = "soso";
      } else if (temp[x]["mean_score"] >= 10 && temp[x]["mean_score"] < 30) {
        emoji = "happy";
      } else if (temp[x]["mean_score"] >= 30 && temp[x]["mean_score"] <= 50) {
        emoji = "veryHappy";
      }
      data.push({
        date: x,
        emoji: emoji,
      });
    });
  });
}

function emojiFunc(date, emoji, currentDate) {
  let dateText = `${currentDate.getFullYear() - 2000}-${
    currentDate.getMonth() + 1 < 10
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1
  }-${date < 10 ? "0" + date : date}`;
  for (let i = 0; i < emoji.length; i++) {
    if (emoji[i].date == dateText) {
      return <img src={`img/${emoji[i].emoji}.png`} alt="" />;
    }
  }
}

function modalTextFunc(date, currentDate, setModalText, emoji) {
  let dateText = `${currentDate.getFullYear() - 2000}-${
    currentDate.getMonth() + 1 < 10
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1
  }-${date < 10 ? "0" + date : date}`;

  for (let i = 0; i < emoji.length; i++) {
    if (emoji[i].date == dateText) {
      setModalText("회고를 보러 가시겠어요?");
      break;
    } else {
      setModalText("회고를 작성하시겠어요?");
    }
  }
}

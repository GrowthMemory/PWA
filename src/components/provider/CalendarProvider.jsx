import { useImmer } from "use-immer";
import { CalendarContext } from "../context/context";
import { useState } from "react";

export default function CalendarProvider(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);
  const [tempDate, setTempDate] = useState([
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate(),
  ]);
  const [showModal, setShowModal] = useState(false);
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalText, setModalText] = useState("회고를 작성하시겠어요?");
  const [emoji, updateEmoji] = useImmer([]);
  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        nextMonth,
        setNextMonth,
        prevMonth,
        setPreveMonth,
        tempDate,
        setTempDate,
        showModal,
        setShowModal,
        calendarYear,
        setCalendarYear,
        showCalendar,
        setShowCalendar,
        modalText,
        setModalText,
        emoji,
        updateEmoji,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
}

import { useContext } from "react";
import { CalendarContext, WriteContext } from "../context/context";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function InputCalendar() {
  const location = useLocation().pathname;
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  const { currentDate, setCurrentDate, updateSelectDate } =
    useContext(CalendarContext);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const defaultDate =
    retrospectionData.date.year +
    "-" +
    "0" +
    retrospectionData.date.month +
    "-" +
    "0" +
    retrospectionData.date.date;
  return (
    <Input
      location={location}
      type="date"
      defaultValue={defaultDate}
      onChange={(e) => {
        if (location == "/Write") {
          updateRetrospectionData((data) => {
            let temp = e.target.value.split("-");
            data.date.year = temp[0];
            if (temp[1][0] == 0) {
              data.date.month = temp[1].substring(1, 2);
            } else {
              data.date.month = temp[1];
            }
            if (temp[2][0] == 0) {
              data.date.date = temp[2].substring(1, 2);
            } else {
              data.date.date = temp[2];
            }
          });
        }
        if (location == "/Calendar") {
          let temp = e.target.value.split("-");
          if (temp[1][0] == "0") temp[1] = Number(temp[1].substring(1, 2));

          setCurrentDate((prev) => {
            return new Date(temp[0], temp[1] - 1);
          });
          updateSelectDate((date) => {
            date.year = temp[0];
            date.month = temp[1];
          });
        }
      }}
    />
  );
}

const Input = styled.input`
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  position: absolute;
  top: ${(props) => (props.location == "/Write" ? "44px" : "")};
  left: 70px;
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

import { useContext } from "react";
import styled from "styled-components";
import { WriteContext } from "../context/context";

export default function InputCalendar() {
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  const selectDate =
    retrospectionData.date.year +
    "-" +
    "0" +
    retrospectionData.date.month +
    "-" +
    "0" +
    retrospectionData.date.date;
  return (
    <Input
      type="date"
      defaultValue={selectDate}
      onChange={(e) => {
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
  top: 44px;
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

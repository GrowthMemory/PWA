import { FaSortDown } from "react-icons/fa";
import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: 7px;
  width: 328px;
  height: 26px;
  display: flex;
  position: relative;
  z-index: 2;
`;

export const Btn = styled.button`
  margin-right: 6px;
  width: 41px;
  height: 26px;
  border: none;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

export const DateSelectBtn = styled.button`
  width: 71px;
  height: 26px;
  border: none;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

export const DownIcon = styled(FaSortDown)`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 71px;
  height: 26px;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 115px;
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

export const CurrentDate = styled.div`
  padding: 0 10px 0 10px;
  width: auto;
  height: 26px;
  border-radius: 10px;
  color: #636366;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ac479;
`;

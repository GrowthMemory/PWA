import styled from "styled-components";
import { IoTriangle } from "react-icons/io5";

export const Div = styled.div`
  width: 360px;
  height: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateBox = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarBtn = styled(IoTriangle)`
  margin-left: 4px;
  font-size: 12px;
  transform: rotate(180deg);
`;

export const Table = styled.table`
  width: 317px;
  height: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 46px;
`;

export const Thead = styled.thead`
  width: 295px;
  height: 50px;
  font-size: 16px;

  tr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  th {
    width: 15px;
    height: 20px;
    font-weight: 400;
  }
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 292px;

  tr {
    width: 100%;
    height: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  td {
    width: 35px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  td div {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #d9d9d9;
  }
  td span {
    margin-top: 5px;
    font-size: 8px;
    font-weight: 500;
  }
`;

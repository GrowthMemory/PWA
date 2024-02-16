import styled from "styled-components";

export const Div = styled.div`
  width: 312px;
  height: 171px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #636366;
    border-radius: 10px;
  }
`;

export const CalenderBox = styled.div`
  width: 310px;
  height: 170px;
  display: flex;
  overflow-x: scroll;

  .check {
    background-color: #5ac479;
  }
`;

export const MonthBox = styled.div`
  margin: 8px 0 0 0;
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
`;
export const Month = styled.div`
  width: auto;
  height: 135px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 11px;
  }
`;

export const WeekBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Week = styled.div`
  width: 17px;
  height: 100%;
`;

export const DateBox = styled.div`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: #e3e3e3;
`;

export const Checked = styled.div`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: #5ac479;
`;

export const DayBox = styled.div`
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

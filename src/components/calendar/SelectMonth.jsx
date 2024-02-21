import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { CalendarContext } from "../context/context";
import styled from "styled-components";
export default function SelectMonth() {
  const { setCurrentDate, calendarYear, setCalendarYear, setShowCalendar } =
    useContext(CalendarContext);
  const [clicked, setClicked] = useState(0);
  let month = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  return (
    <Div
      onClick={() => {
        setShowCalendar(false);
      }}
    >
      <Calendar>
        <Header>
          <FaAngleLeft
            onClick={() => {
              setCalendarYear((prev) => prev - 1);
            }}
          />
          <span>{calendarYear}</span>
          <FaAngleRight
            onClick={() => {
              setCalendarYear((prev) => prev + 1);
            }}
          />
        </Header>
        <MonthBox>
          {month.map((M) => (
            <Month>
              {M.map((m) => (
                <ClickedMonth
                  month={m}
                  clicked={clicked}
                  onClick={() => {
                    setCurrentDate(new Date(calendarYear, m - 1, 1));
                    setClicked(m);
                  }}
                >
                  {m}
                </ClickedMonth>
              ))}
            </Month>
          ))}
        </MonthBox>
      </Calendar>
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 640px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 3;
`;

const Calendar = styled.div`
  padding-bottom: 15px;
  width: 260px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 2;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  color: #424242;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: end;

  span {
    margin: 0 15px 0 15px;
    font-size: 15px;
  }
`;

const MonthBox = styled.div`
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Month = styled.div`
  padding: 0 15% 0 15%;
  width: 70%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClickedMonth = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: ${(props) => (props.month == props.clicked ? "#f9f9f9" : "#424242")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.month == props.clicked ? "#5ac479" : ""};
`;

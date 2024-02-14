import styled from "styled-components";
import CalendarFrame from "../components/calendar/CalendarFrame";
import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import CalendarProvider from "../components/provider/CalendarProvider";
import WriteProvider from "../components/provider/WriteProvider";

export default function Calendar() {
  return (
    <CalendarBox>
      <MainHeader>
        <span>캘린더</span>
      </MainHeader>
      <WriteProvider>
        <CalendarProvider>
          <CalendarFrame />
        </CalendarProvider>
      </WriteProvider>
      <Navigation />
    </CalendarBox>
  );
}

const CalendarBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

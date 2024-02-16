import CalendarFrame from "../components/calendar/CalendarFrame";
import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import CalendarProvider from "../components/provider/CalendarProvider";
import WriteProvider from "../components/provider/WriteProvider";
import * as s from "../components/css/calendar/calendar";

export default function Calendar() {
  return (
    <s.CalendarBox>
      <MainHeader>
        <span>캘린더</span>
      </MainHeader>
      <WriteProvider>
        <CalendarProvider>
          <CalendarFrame />
        </CalendarProvider>
      </WriteProvider>
      <Navigation />
    </s.CalendarBox>
  );
}

import CalendarFrame from "../components/calendar/CalendarFrame";
import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import CalendarProvider from "../components/provider/CalendarProvider";
import WriteProvider from "../components/provider/WriteProvider";

export default function Calendar() {
  return (
    <WriteProvider>
      <CalendarProvider>
        <MainHeader>
          <span>캘린더</span>
        </MainHeader>
        <CalendarFrame />
        <Navigation />
      </CalendarProvider>
    </WriteProvider>
  );
}

import CalendarFrame from "../components/calendar/CalendarFrame";
import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import CalendarProvider from "../components/provider/CalendarProvider";

export default function Calendar() {
  return (
    <>
      <CalendarProvider>
        <MainHeader>
          <span>캘린더</span>
        </MainHeader>
        <CalendarFrame />
        <Navigation />
      </CalendarProvider>
    </>
  );
}

export default function CalendarFunction(currentDate, nextMonth, prevMonth) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const monthStartDay = new Date(
    currentYear,
    currentMonth + nextMonth,
    1
  ).getDay();

  const endDate = new Date(currentYear, currentMonth + prevMonth, 0).getDate();

  const calenderLastDate = new Date(
    currentYear,
    currentMonth + prevMonth,
    42 - endDate - monthStartDay
  ).getDate();

  const dates = [[], [], [], [], [], []];

  let counter = 0;
  let counter2 = 0;

  for (let i = -monthStartDay + 1; i <= endDate + calenderLastDate; i++) {
    if (counter2 == 7) {
      counter++;
      counter2 = 0;
    }
    counter2++;

    if (counter == 0) {
      if (i <= 0) {
        dates[counter].push(0);
      } else {
        dates[counter].push(
          new Date(currentYear, currentMonth + nextMonth, i).getDate()
        );
      }
    } else {
      if (
        currentMonth == 0 ||
        currentMonth == 2 ||
        currentMonth == 4 ||
        currentMonth == 6 ||
        currentMonth == 7 ||
        currentMonth == 9 ||
        currentMonth == 11
      ) {
        if (i >= 32) {
          dates[counter].push(0);
        } else {
          dates[counter].push(
            new Date(currentYear, currentMonth + nextMonth, i).getDate()
          );
        }
      } else if (currentMonth == 1) {
        if (i >= new Date(currentYear, currentMonth + 1, 0).getDate() + 1) {
          dates[counter].push(0);
        } else {
          dates[counter].push(
            new Date(currentYear, currentMonth + nextMonth, i).getDate()
          );
        }
      } else {
        if (i >= 31) {
          dates[counter].push(0);
        } else {
          dates[counter].push(
            new Date(currentYear, currentMonth + nextMonth, i).getDate()
          );
        }
      }
    }
  }
  return dates;
}

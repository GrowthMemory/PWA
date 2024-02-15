let currentDate = new Date();

export function monthFunc(setCurrentCategory, updateSelctDate) {
  setCurrentCategory("month");
  const start = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const end = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  updateSelctDate((date) => {
    date.startDate.year = Number(
      start.getFullYear().toString().substring(2, 4)
    );
    date.startDate.month = Number("0" + (start.getMonth() + 1));
    date.startDate.date = start.getDate();

    date.endDate.year = Number(end.getFullYear().toString().substring(2, 4));
    date.endDate.month = Number("0" + (end.getMonth() + 1));
    date.endDate.date = end.getDate();
  });
}

export function yearFunc(setCurrentCategory, updateSelctDate) {
  setCurrentCategory("year");
  const start = new Date(currentDate.getFullYear(), 0, 1);
  const end = new Date(currentDate.getFullYear() + 1, 0, 0);
  updateSelctDate((date) => {
    date.startDate.year = Number(
      start.getFullYear().toString().substring(2, 4)
    );
    date.startDate.month = Number("0" + (start.getMonth() + 1));
    date.startDate.date = start.getDate();
    date.endDate.year = Number(end.getFullYear().toString().substring(2, 4));
    date.endDate.month = Number("0" + (end.getMonth() + 1));
    date.endDate.date = end.getDate();
  });
}

export function dateFunc(setCurrentCategory, updateSelctDate) {
  setCurrentCategory("week");

  updateSelctDate((date) => {
    date.startDate.year = Number(
      currentDate.getFullYear().toString().substring(2, 4)
    );
    date.startDate.month = Number("0" + (currentDate.getMonth() + 1));
    date.startDate.date = currentDate.getDate() - currentDate.getDay();

    date.endDate.year = Number(
      currentDate.getFullYear().toString().substring(2, 4)
    );
    date.endDate.month = Number("0" + (currentDate.getMonth() + 1));
    date.endDate.date = currentDate.getDate() + (6 - currentDate.getDay());
  });
}

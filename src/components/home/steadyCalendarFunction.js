const currentDate = new Date();
let currentYear = currentDate.getFullYear();

let startDay = new Date(currentYear, 0, 1).getDay();
let fullDate = new Date(currentYear, 2, 0) == 28 ? 365 : 366;

export function createDataArr() {
  let dateArr = [];
  let temp = [];
  let month = 1;
  let cnt = 1;
  for (let i = -startDay; i < fullDate; i++) {
    if (i > -1) {
      temp.push(cnt);
      cnt++;
    } else {
      temp.push(i + 1);
    }
    if (
      (month == 1 && cnt == 32) ||
      (month == 3 && cnt == 32) ||
      (month == 5 && cnt == 32) ||
      (month == 7 && cnt == 32) ||
      (month == 8 && cnt == 32) ||
      (month == 10 && cnt == 32) ||
      (month == 12 && cnt == 32)
    ) {
      cnt = 1;
      month++;
    } else if (
      (month == 4 && cnt == 31) ||
      (month == 6 && cnt == 31) ||
      (month == 9 && cnt == 31) ||
      (month == 11 && cnt == 31)
    ) {
      cnt = 1;
      month++;
    } else if (
      (fullDate == 365 && month == 2 && cnt == 29) ||
      (fullDate == 366 && month == 2 && cnt == 30)
    ) {
      cnt = 1;
      month++;
    }
    if (temp.length == 7 || i == fullDate - 1) {
      dateArr.push(temp);
      temp = [];
    }
  }
  return dateArr;
}

export function createMonthArr(dateArr) {
  let monthArr = [];
  let monthCnt = 1;
  let temp = [];
  for (let i = 0; i < dateArr.length; i++) {
    temp.push(dateArr[i]);
    for (let j = 0; j < 7; j++) {
      if (
        (monthCnt == 1 && dateArr[i][j] == 31) ||
        (monthCnt == 3 && dateArr[i][j] == 31) ||
        (monthCnt == 5 && dateArr[i][j] == 31) ||
        (monthCnt == 7 && dateArr[i][j] == 31) ||
        (monthCnt == 8 && dateArr[i][j] == 31) ||
        (monthCnt == 10 && dateArr[i][j] == 31) ||
        (monthCnt == 12 && dateArr[i][j] == 31)
      ) {
        monthArr.push(temp);
        monthCnt++;
        temp = [];
      } else if (
        (monthCnt == 4 && dateArr[i][j] == 30) ||
        (monthCnt == 6 && dateArr[i][j] == 30) ||
        (monthCnt == 9 && dateArr[i][j] == 30) ||
        (monthCnt == 11 && dateArr[i][j] == 30)
      ) {
        monthArr.push(temp);
        monthCnt++;
        temp = [];
      } else if (
        (fullDate == 365 && monthCnt == 2 && dateArr[i][j] == 28) ||
        (fullDate == 366 && monthCnt == 2 && dateArr[i][j] == 29)
      ) {
        monthArr.push(temp);
        monthCnt++;
        temp = [];
      }
    }
  }
  return monthArr;
}

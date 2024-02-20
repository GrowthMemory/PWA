import { useContext, useEffect } from "react";
import { ReportContext } from "../context/context";
import * as Func from "./categoryFunc";
import ReportCalendar from "../common/InputCalendar";
import WriteProvider from "../provider/WriteProvider";
import { getUID } from "../../service/auth";
import { getUserAllReviews } from "../../service/db";
import * as s from "../css/report/category";
export default function Category() {
  const {
    showCategoryBtn,
    setShowCategoryBtn,
    selcetDate,
    updateSelctDate,
    currentCategory,
    setCurrentCategory,
    showCalendar,
    setShowCalendar,
    clicked,
    showChart,
    setShowChart,
    data,
    setData,
  } = useContext(ReportContext);

  useEffect(() => {
    setShowCategoryBtn(true);
    let uid = getUID();
    let func = async () => {
      let temp = await getUserAllReviews(uid);
      if (temp) {
        await setData(() => {
          let arr = Object.keys(temp);
          return arr;
        });
      }
    };
    func();
  }, []);

  useEffect(() => {
    if (clicked.length == 2) setShowCalendar(false);
  }, [clicked]);

  if (data.length >= 7) {
    setShowChart((data) => {
      data.week = true;
    });
  }

  return (
    <s.Div>
      <s.Btn
        onClick={() => {
          Func.dateFunc(setCurrentCategory, updateSelctDate);
          if (data.length >= 7) {
            setShowChart((data) => {
              data.week = true;
            });
          }
        }}
        style={
          currentCategory == "week"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        주간
      </s.Btn>
      <s.Btn
        onClick={() => {
          Func.monthFunc(setCurrentCategory, updateSelctDate);
          if (data.length >= 30) {
            setShowChart((data) => {
              data.month = true;
            });
          }
        }}
        style={
          currentCategory == "month"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        월간
      </s.Btn>
      <s.Btn
        onClick={() => {
          Func.yearFunc(setCurrentCategory, updateSelctDate);
          if (data.length >= 365) {
            setShowChart((data) => {
              data.year = true;
            });
          }
        }}
        style={
          currentCategory == "year"
            ? { backgroundColor: "#5AC479", color: "#fff" }
            : {
                background: "#fff",
              }
        }
      >
        연간
      </s.Btn>
      {showCategoryBtn && (
        <s.DateSelectBtn
          onClick={() => {
            setShowCalendar((prev) => !prev);
            setCurrentCategory("custom");
          }}
        >
          기간 선택
          <s.DownIcon />
        </s.DateSelectBtn>
      )}
      {!showCategoryBtn && (
        <s.CurrentDate
          onClick={() => {
            setShowCalendar((prev) => !prev);
          }}
        >
          <span>{`${selcetDate.startDate.year}.${selcetDate.startDate.month}.${selcetDate.startDate.date}~${selcetDate.endDate.year}.${selcetDate.endDate.month}.${selcetDate.endDate.date}`}</span>
        </s.CurrentDate>
      )}
      <WriteProvider>{showCalendar && <ReportCalendar />}</WriteProvider>
    </s.Div>
  );
}

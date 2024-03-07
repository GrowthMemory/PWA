import Chart from "react-google-charts";
import { useContext, useEffect } from "react";
import { HomeContext, ReportContext } from "../context/context";
import * as O from "./chartOption";
import * as s from "../css/report/chart";
import NoneChart from "./NoneChart";
import { getUID } from "../../service/auth";
import { ReadReview, getUserAllReviews } from "../../service/db";
export default function ChartBox() {
  const {
    lineData,
    updateLineData,
    currentCategory,
    feelingData,
    updateFeelingData,
    retrospectionNum,
    setRetrospectionNum,
    showChart,
    selcetDate,
    setCurrentStatusObj,
  } = useContext(ReportContext);

  useEffect(() => {
    localStorage.setItem("visitedChart", "true");
    let uid = getUID();
    if (uid) {
      getEmotionScore(
        uid,
        selcetDate,
        updateLineData,
        updateFeelingData,
        setRetrospectionNum,
        lineData,
        setCurrentStatusObj
      );
    }
  }, [selcetDate]);

  return (
    <s.Div>
      <s.RetrospectionNumber>
        기간 내, <span>{retrospectionNum}</span>번 회고 했어요
      </s.RetrospectionNumber>
      <s.Title>얼마나 만족스러운 회고를 했나요 ?</s.Title>
      {(currentCategory == "week" && showChart.week && lineData.length == 7) ||
      (currentCategory == "custom" &&
        showChart.week &&
        lineData.length >= 2) ? (
        <s.LineChart className="c1">
          <Chart
            chartType="LineChart"
            data={lineData}
            options={O.lineOptions}
          />
        </s.LineChart>
      ) : (currentCategory == "month" &&
          showChart.month &&
          lineData.length == 30) ||
        (currentCategory == "custom" &&
          showChart.month &&
          lineData.length >= 2) ? (
        <s.LineChart className="c1">
          <Chart
            chartType="LineChart"
            data={lineData}
            options={O.lineOptions}
          />
        </s.LineChart>
      ) : (currentCategory == "year" &&
          showChart.year &&
          lineData.length == 365) ||
        (currentCategory == "custom" &&
          showChart.year &&
          lineData.length >= 2) ? (
        <s.LineChart className="c1">
          <Chart
            chartType="LineChart"
            data={lineData}
            options={O.lineOptions}
          />
        </s.LineChart>
      ) : (
        <NoneChart />
      )}

      {(currentCategory == "week" && showChart.week && lineData.length == 7) ||
      (currentCategory == "custom" &&
        showChart.week &&
        lineData.length >= 2) ? (
        <s.ChartColor className="c2">
          <Chart
            chartType="CandlestickChart"
            data={feelingData}
            options={O.feelingOption}
          />
        </s.ChartColor>
      ) : (currentCategory == "month" &&
          showChart.month &&
          lineData.length == 30) ||
        (currentCategory == "custom" &&
          showChart.month &&
          lineData.length >= 2) ? (
        <s.ChartColor className="c2">
          <Chart
            chartType="CandlestickChart"
            data={feelingData}
            options={O.feelingOption}
          />
        </s.ChartColor>
      ) : (currentCategory == "year" &&
          showChart.year &&
          lineData.length == 365) ||
        (currentCategory == "custom" &&
          showChart.year &&
          lineData.length >= 2) ? (
        <s.ChartColor className="c2">
          <Chart
            chartType="CandlestickChart"
            data={feelingData}
            options={O.feelingOption}
          />
        </s.ChartColor>
      ) : (
        ""
      )}
    </s.Div>
  );
}

async function getEmotionScore(
  uid,
  selcetDate,
  updateLineData,
  updateFeelingData,
  setRetrospectionNum,
  lineData,
  setCurrentStatusObj
) {
  let temp = await getUserAllReviews(uid);

  if (lineData.length > 1) {
    updateLineData((x) => (x = [["date", "emotional figures"]]));
    updateFeelingData((x) => (x = [["day", "num", "num", "num", "num"]]));
  }

  let start = new Date(
    selcetDate.startDate.year,
    selcetDate.startDate.month - 1,
    selcetDate.startDate.date
  );
  let end = new Date(
    selcetDate.endDate.year,
    selcetDate.endDate.month - 1,
    selcetDate.endDate.date
  );

  let cnt = Math.abs(start - end);
  cnt = Math.ceil(cnt / (1000 * 60 * 60 * 24));

  let dataLength = 0;
  let sum = 0;
  for (let i = 0; i <= cnt; i++) {
    let date = new Date(
      selcetDate.startDate.year,
      selcetDate.startDate.month - 1,
      Number(selcetDate.startDate.date) + i
    );
    let dateText = `${date.getFullYear() - 2000}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

    if (temp[dateText]) {
      sum += temp[dateText]["mean_score"];
      dataLength++;
      updateLineData((data) => {
        data.push([dateText, temp[dateText]["mean_score"]]);
      });

      updateFeelingData((data) => {
        if (temp[dateText]["mean_score"] > 0) {
          data.push([
            i.toString(),
            temp[dateText]["mean_score"],
            0,
            temp[dateText]["mean_score"],
            0,
          ]);
        } else {
          data.push([
            i.toString(),
            0,
            0,
            temp[dateText]["mean_score"],
            temp[dateText]["mean_score"],
          ]);
        }
      });
    }
  }

  let emptionText = "";
  if (sum < -25) emptionText = "불안정적인";
  else if (sum < 25) emptionText = "평균적인";
  else if (sum <= 50) emptionText = "안정적인";

  setCurrentStatusObj((data) => {
    data.score = Math.round(sum);
    data.text = emptionText;
  });
  setRetrospectionNum(dataLength);
}

import Chart from "react-google-charts";
import { useContext, useEffect } from "react";
import { ReportContext } from "../context/context";
import * as O from "./chartOption";
import * as s from "../css/report/chart";
export default function ChartBox() {
  const {
    lineData,
    updateLineData,
    currentCategory,
    feelingData,
    updateFeelingData,
    retrospectionNum,
    setRetrospection,
  } = useContext(ReportContext);

  useEffect(() => {
    fetchFunc(
      updateLineData,
      updateFeelingData,
      setRetrospection,
      currentCategory
    );
  }, [currentCategory]);

  return (
    <s.Div>
      <s.RetrospectionNumber>
        기간 내, <span>{retrospectionNum}</span>번 회고 했어요
      </s.RetrospectionNumber>
      <s.Title>얼마나 만족스러운 회고를 했나요 ?</s.Title>
      <s.LineChart className="c1">
        <Chart chartType="LineChart" data={lineData} options={O.lineOptions} />
      </s.LineChart>
      <s.ChartColor className="c2">
        <Chart
          chartType="CandlestickChart"
          data={feelingData}
          options={O.feelingOption}
        />
      </s.ChartColor>
    </s.Div>
  );
}

async function fetchFunc(
  updateLineData,
  updateFeelingData,
  setRetrospection,
  currentCategory
) {
  try {
    const response = await fetch("dumy/emotion_score.json");
    const data = await response.json();
    let dataArr = await data.data;
    await dataArr.forEach((datas, n) => {
      let split = datas.index.split(" ");
      updateLineData((data) => {
        data.push([split[0], datas.emotion_score]);
      });
      updateFeelingData((data) => {
        if (datas.emotion_score > 0) {
          data.push([
            n.toString(),
            datas.emotion_score,
            0,
            datas.emotion_score,
            0,
          ]);
        } else {
          data.push([
            n.toString(),
            0,
            0,
            datas.emotion_score,
            datas.emotion_score,
          ]);
        }
      });
      setRetrospection(dataArr.length);
    });
  } catch (err) {
    console.log(err);
  }
}

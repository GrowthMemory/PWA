import styled from "styled-components";
import Chart from "react-google-charts";
import { useContext, useEffect } from "react";
import { ReportContext } from "../context/context";
import * as O from "./chartOption";
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
    <Div>
      <RetrospectionNumber>
        기간 내, <span>{retrospectionNum}</span>번 회고 했어요
      </RetrospectionNumber>
      <Title>얼마나 만족스러운 회고를 했나요 ?</Title>
      <LineChart className="c1">
        <Chart chartType="LineChart" data={lineData} options={O.lineOptions} />
      </LineChart>
      <ChartColor className="c2">
        <Chart
          chartType="CandlestickChart"
          data={feelingData}
          options={O.feelingOption}
        />
      </ChartColor>
    </Div>
  );
}

const Div = styled.div`
  z-index: 1;
`;

const RetrospectionNumber = styled.p`
  width: 100%;
  height: 28px;
  font-size: 13px;
  font-weight: 400px;

  span {
    color: #5ac479;
    font-size: 17px;
    font-weight: 700;
  }
`;
const Title = styled.p`
  width: 177px;
  height: 28px;
  font-size: 13px;
  font-weight: 600;
`;

const LineChart = styled.div`
  padding-left: 5px;
  width: 300px;
  height: 208px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const ChartColor = styled.div`
  padding-left: 5px;
  width: 300px;
  height: 208px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
`;

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

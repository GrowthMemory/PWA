import styled from "styled-components";
import Chart from "react-google-charts";
export default function ChartBox() {
  const lineData = [
    ["day", "happy"],
    ["1", 300],
    ["2", -655],
    ["3", 655],
    ["4", -450],
    ["5", 800],
  ];

  const lineOptions = {
    vAxis: {
      viewWindow: {
        min: -1000,
        max: 1000,
      },
      gridlines: {
        color: "transparent",
      },
      baselineColor: "#a7a7a7",
    },
    chartArea: {
      width: 240,
      height: 160,
    },
    legend: {
      position: "none",
    },
    width: 300,
    height: 200,
    lineWidth: 1,
    colors: ["#3d3d3d"],
    fontSize: 10,
    borderRadious: 5,
    backgroundColor: "transparent",
  };

  let feelingData = [
    ["day", "num", "num", "num", "num"],
    ["1", 300, 0, 300, 0],
    ["2", 0, 0, -655, -655],
    ["3", 655, 0, 655, 0],
    ["4", 0, 0, -450, -450],
    ["5", 800, 0, 800, 0],
  ];

  let feelingOption = {
    series: {
      0: {
        lineWidth: 0,
        color: "transparent",
      },
    },
    vAxis: {
      viewWindow: {
        min: -1000,
        max: 1000,
      },
      baselineColor: "transparent",
      textPosition: "none",
    },
    hAxis: { textPosition: "none" },
    bar: {
      groupWidth: "70%",
    },
    candlestick: {
      fallingColor: {
        fill: "#f0a3a3",
      },
      risingColor: {
        fill: "#94e7ad",
      },
    },
    chartArea: {
      width: 240,
      height: 160,
    },
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    borderRadious: 5,
    legend: {
      position: "none",
    },
  };

  return (
    <Div>
      <RetrospectionNumber>
        기간 내, <span>{10}</span>번 회고 했어요
      </RetrospectionNumber>
      <Title>얼마나 만족스러운 회고를 했나요 ?</Title>
      <LineChart className="c1">
        <Chart chartType="LineChart" data={lineData} options={lineOptions} />
      </LineChart>
      <ChartColor className="c2">
        <Chart
          chartType="CandlestickChart"
          data={feelingData}
          options={feelingOption}
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
  width: 311;
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
  width: 311px;
  height: 208px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
`;

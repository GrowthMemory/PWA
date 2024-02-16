export const lineOptions = {
  vAxis: {
    viewWindow: {
      min: -50,
      max: 50,
    },
    gridlines: {
      color: "transparent",
    },
    baselineColor: "#a7a7a7",
  },
  hAxis: {
    textStyle: {
      fontSize: "4",
    },
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

export let feelingOption = {
  series: {
    0: {
      lineWidth: 0,
      color: "transparent",
    },
  },
  vAxis: {
    viewWindow: {
      min: -50,
      max: 50,
    },
    gridlines: {
      color: "transparent",
    },
    baselineColor: "transparent",
    textPosition: "none",
  },
  hAxis: {
    textPosition: "none",
  },
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

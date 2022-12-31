import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 300, 400],
  ["2005", 470, 460],
  ["2006", 560, 1120],
  ["2007", 630, 540],
  ["2008", 830, 540],
  ["2009", 1030, 540],
];

export const options = {
  title: "Company Performance",
  titleTextStyle: { color: '#fff' },
  curveType: "function",
  legend: {
    position: "bottom",
    textStyle: { color: 'white' }
  },
  backgroundColor: '#1A1C33',

};

const PortFoundChart = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default PortFoundChart;
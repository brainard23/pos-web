import { ChartContainer, LinePlot, MarkPlot } from "@mui/x-charts";
import React from "react";

const CustomLineChart = ({pData, xLabels}) => {
  return (
    <>
      <ChartContainer
        className="flex m-10"
        width={300}
        height={280}
        series={[{ type: "line", data: pData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          ".MuiLineElement-root": {
            stroke: "#8884d8",
            strokeWidth: 2,
          },
          ".MuiMarkElement-root": {
            stroke: "#8884d8",
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </>
  );
};

export default CustomLineChart;

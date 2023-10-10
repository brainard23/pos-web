import { Paper, Typography } from "@mui/material";
import { ChartContainer, LinePlot, MarkPlot } from "@mui/x-charts";
import React from "react";
import CustomLineChart from "../LineCharts";
import OrdonerAndSalesOverview from "./OrderAndSalesOverview.jsx";
import { BarChart } from "@mui/icons-material";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const Statistics = () => {
  return (
    <div>
      <Typography variant="h6" className="font-bold">
        Today's Statistics
      </Typography>
      <div className="flex justify-between">
        <Paper
          elevation={1}
          className="m-2 p-2 flex justify-between items-center"
          style={{ width: 300, height: 150 }}
        >
          <div style={{ width: 200 }}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
          <CustomLineChart xLabels={xLabels} pData={pData} />
        </Paper>

        <Paper
          elevation={1}
          className="m-2 p-2 flex justify-between items-center"
          style={{ width: 300, height: 150 }}
        >
          <div style={{ width: 200 }}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
          <CustomLineChart xLabels={xLabels} pData={pData} />
        </Paper>

        <Paper
          elevation={1}
          className="m-2 p-2 flex justify-between items-center"
          style={{ width: 300, height: 150 }}
        >
          <div style={{ width: 200 }}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
          <CustomLineChart xLabels={xLabels} pData={pData} />
        </Paper>

        <Paper
          elevation={1}
          className="m-2 p-2 flex justify-between items-center"
          style={{ width: 300, height: 150 }}
        >
          <div style={{ width: 200 }}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
          <CustomLineChart xLabels={xLabels} pData={pData} />
        </Paper>
      </div>
      <div className="flex justify-between">
        <Paper className="p-4 m-2" elevation={1}>
          <OrdonerAndSalesOverview />
        </Paper>
        <Paper className="p-4 m-2 w-full" elevation={1}>
          <Typography variant="h6">Payment Statistics</Typography>
          <Paper className="p-2 flex items-center justify-start">
            <BarChart fontSize="large" />
            <div className="m-2">
              <p className="font-bold">total Transactions</p>
              <p className="font-medium text-purple-500 text-2xl">$10,100</p>
            </div>
          </Paper>
          <Paper className="p-2 flex items-center justify-start">
            <BarChart fontSize="large" />
            <div className="m-2">
              <p className="font-bold">Confirm Order</p>
              <p className="font-medium text-orange-500 text-2xl">$10,100</p>
            </div>
          </Paper>
          <Paper className="p-2 flex items-center justify-start">
            <BarChart fontSize="large" />
            <div className="m-2">
              <p className="font-bold">Order Receive</p>
              <p className="font-medium text-green-500 text-2xl">$10,100</p>
            </div>
          </Paper>
        </Paper>
      </div>
    </div>
  );
};

export default Statistics;

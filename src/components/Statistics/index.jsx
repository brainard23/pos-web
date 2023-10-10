import { Paper, Typography } from "@mui/material";
import { ChartContainer, LinePlot, MarkPlot } from "@mui/x-charts";
import React from "react";
import CustomLineChart from "../LineCharts";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Statistics = () => {
  return (
    <div>
      <Typography variant="h6" className="font-bold">
        Today's Statistics
      </Typography>
      <div className="flex justify-between">

        <Paper elevation={1} className="m-2 p-2 flex justify-between items-center" style={{width: 300, height: 150}}>
          <div style={{width: 200}}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
           <CustomLineChart xLabels={xLabels} pData={pData}/>
        </Paper>

        <Paper elevation={1} className="m-2 p-2 flex justify-between items-center" style={{width: 300, height: 150}}>
          <div style={{width: 200}}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
           <CustomLineChart xLabels={xLabels} pData={pData}/>
        </Paper>

        <Paper elevation={1} className="m-2 p-2 flex justify-between items-center" style={{width: 300, height: 150}}>
          <div style={{width: 200}}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
           <CustomLineChart xLabels={xLabels} pData={pData}/>
        </Paper>

        <Paper elevation={1} className="m-2 p-2 flex justify-between items-center" style={{width: 300, height: 150}}>
          <div style={{width: 200}}>
            <Typography className="font-medium">Total orders</Typography>
            <p className="text-purple-400 font-bold">1200</p>
            <p className="text-green-400">+ 3.2</p>
          </div>
           <CustomLineChart xLabels={xLabels} pData={pData}/>
        </Paper>

      </div>
    </div>
  );
};

export default Statistics;

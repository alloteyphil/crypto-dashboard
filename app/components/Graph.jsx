"use client";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { time: "10:59PM", BTC: 2300, LTC: 3000, ETH: 2600 },
  { time: "11:59PM", BTC: 3200, LTC: 3200, ETH: 2900 },
  { time: "12:59AM", BTC: 2900, LTC: 3400, ETH: 3100 },
  { time: "1:59AM", BTC: 3800, LTC: 3100, ETH: 3600 },
  { time: "2:59AM", BTC: 3500, LTC: 3700, ETH: 3300 },
  { time: "3:59AM", BTC: 4000, LTC: 3300, ETH: 3900 },
  { time: "4:59AM", BTC: 3700, LTC: 4000, ETH: 3500 },
  { time: "5:59AM", BTC: 4200, LTC: 3600, ETH: 4100 },
  { time: "6:59AM", BTC: 3900, LTC: 4200, ETH: 3700 },
  { time: "7:59AM", BTC: 4500, LTC: 3800, ETH: 4300 },
];

const chartConfig = {
  BTC: {
    label: "BTC",
    color: "rgb(239, 58, 182)",
  },
  LTC: {
    label: "LTC",
    color: "rgb(14, 237, 111)",
  },
  ETH: {
    label: "ETH",
    color: "#14bae3",
  },
};

const Graph = () => {
  return (
    <Card className={"bg-transparent border-none shadow-none p-0 m-0 mt-6 "}>
      <CardContent className={"p-0"}>
        <ChartContainer
          className={"p-0 m-0 h-[50vh] w-[]"}
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
            className="p-0 relative"
          >
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} className="" />
            <Line
              dataKey="BTC"
              type="monotone"
              stroke="rgb(239, 58, 182)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="LTC"
              type="monotone"
              stroke="rgb(14, 237, 111)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="ETH"
              type="monotone"
              stroke="#14bae3"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Graph;

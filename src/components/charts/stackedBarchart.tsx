"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect } from "react";

/* The `StackedBarChart` function is a React component that renders a stacked bar chart using the
Recharts library. Here's a breakdown of what the code is doing: */

type StackedBarChartProps = {
  chartData: any;
  chartConfig: ChartConfig;
  chartHeader: string;
};

export function StackedBarChart({
  chartData,
  chartConfig,
  chartHeader,
}: StackedBarChartProps) {
  useEffect(() => {}, [chartData]);
  return (
    <Card className="border-0 bg-primary-light dark:bg-white/15 shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="font-inter font-semibold text-sm">
          {chartHeader}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} barSize={20}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={7}
              axisLine={{ stroke: "rgba(28, 28, 28, .1)" }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={2}
              axisLine={false}
              width={30}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}

            {Object.entries(chartConfig).map(([key,value],index) => {
              return (
                <Bar
                  dataKey={key}
                  stackId="a"
                  fill={`${value.color}`}
                  radius={index==Object.entries(chartConfig).length-1?[4,4,0,0]:[0,0,0,0]}
                />
              );
            })}

            {/* <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            /> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/app/components/ui/chart";
const chartData = [
    { month: "Interview 1", desktop: 186, mobile: 80 },
    { month: "Interview 2", desktop: 305, mobile: 200 },
    { month: "Interview 3", desktop: 237, mobile: 120 },
    { month: "Interview 4", desktop: 73, mobile: 190 },
    { month: "Interview 5", desktop: 209, mobile: 130 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },

    gridLineColor: "black", // Added grid line color
};

const Chart = () => {
    return (
        <Card className='w-2/3 m-auto bg-black text-white border-primary-100 font-roboto'>
            <CardHeader>
                <h1>Mock Interview scores over time</h1>
                <h1 className='text-3xl font-bold'>4.5</h1>
                <p className='text-primary-100'>Last 5 interviews</p>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className='h-80 m-auto'>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}>
                        <CartesianGrid
                            vertical={false}
                            stroke={chartConfig.gridLineColor} // Applied grid line color
                        />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey='desktop'
                            type='natural'
                            stroke='var(--color-desktop)'
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-desktop)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
};

export default Chart;

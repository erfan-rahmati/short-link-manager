"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ChartData = {
  date: string;
  clicks: number;
};

type LinkClickChartProps = {
  data: ChartData[];
};

export function LinkClickChart({ data }: LinkClickChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>آمار کلیک لینک‌ها</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="clicks"
                stroke="var(--primary)"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

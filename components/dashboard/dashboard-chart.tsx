"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardChartProps = {
  data: {
    name: string;
    clicks: number;
  }[];
};

export function DashboardChart({ data }: DashboardChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>آمار بازدید لینک‌ها</CardTitle>
      </CardHeader>

      <CardContent
        className="
          h-[320px]
        "
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="clicks"
              radius={8}
              fill="currentColor"
              className="text-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

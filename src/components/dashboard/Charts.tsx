
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000, users: 2400 },
  { month: "Feb", revenue: 3000, users: 1398 },
  { month: "Mar", revenue: 2000, users: 9800 },
  { month: "Apr", revenue: 2780, users: 3908 },
  { month: "May", revenue: 1890, users: 4800 },
  { month: "Jun", revenue: 2390, users: 3800 },
];

export const RevenueChart = () => {
  return (
    <div className="h-[300px] w-full p-6 rounded-xl border border-border bg-card animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const UsersChart = () => {
  return (
    <div className="h-[300px] w-full p-6 rounded-xl border border-border bg-card animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">User Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="hsl(var(--primary))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

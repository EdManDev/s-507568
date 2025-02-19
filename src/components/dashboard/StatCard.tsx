
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export const StatCard = ({ title, value, change, isPositive }: StatCardProps) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card animate-fade-in">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      {change && (
        <p
          className={cn(
            "text-sm mt-2",
            isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          {isPositive ? "↑" : "↓"} {change}
        </p>
      )}
    </div>
  );
};


import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart, UsersChart } from "@/components/dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Revenue"
              value="$54,230"
              change="12%"
              isPositive={true}
            />
            <StatCard
              title="Active Users"
              value="2,345"
              change="8%"
              isPositive={true}
            />
            <StatCard
              title="Conversion Rate"
              value="3.2%"
              change="0.8%"
              isPositive={false}
            />
            <StatCard
              title="Avg. Session"
              value="2m 45s"
              change="15s"
              isPositive={true}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <UsersChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

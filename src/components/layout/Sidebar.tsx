
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-background border-r border-border transition-all duration-300 ease-in-out relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-[-20px] top-4 bg-background border border-border rounded-full"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <Menu className="h-4 w-4" />
        ) : (
          <X className="h-4 w-4" />
        )}
      </Button>

      <div className="p-4">
        <div className="mb-8">
          <h1
            className={cn(
              "font-bold transition-all duration-300 ease-in-out",
              collapsed ? "text-xl" : "text-2xl"
            )}
          >
            {collapsed ? "S" : "Startup"}
          </h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 rounded-lg transition-all duration-200",
                !collapsed && "w-full"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

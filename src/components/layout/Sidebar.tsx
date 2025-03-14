import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Settings,
  Menu,
  X,
  Home,
  TrendingUp
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: TrendingUp, label: "My Progress", href: "/progress" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
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
          <Link to="/" >
            <h1
              className={cn(
                "font-bold transition-all duration-300 ease-in-out",
                collapsed ? "text-xl" : "text-2xl"
              )}
            >
              {collapsed ? "S" : "Startup"}
            </h1>
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a key={item.label}
              href={item.href}
              className={cn(
                "flex items-center text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200",
                collapsed
                  ? "justify-center py-0 px-1"
                  : "justify-start py-2 px-4"
              )}
            >
              <item.icon className={cn(
                "transition-all duration-200",
                collapsed ? "h-8 w-8" : "h-5 w-5 mr-2"
              )} />
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
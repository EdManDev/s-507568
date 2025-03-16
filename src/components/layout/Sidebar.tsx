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

const SIDEBAR_STATE_KEY = 'sidebar-collapsed-state';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
    return savedState ? JSON.parse(savedState) : false;
  });

  const handleToggleCollapse = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(newState));
  };

  return (
    <div
      className={cn(
        "h-screen bg-background border-r border-border relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-[-20px] top-4 bg-background border border-border rounded-full"
        onClick={handleToggleCollapse}
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
                "font-bold",
                collapsed ? "text-xl" : "text-xl"
              )}
            >
              {collapsed ? "S" : "Startup"}
            </h1>
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg ",
                collapsed
                  ? "justify-center py-1 px-1"
                  : "justify-start py-2 px-1"
              )}
            >
              <item.icon className={cn(
                "",
                collapsed ? "h-8 w-8" : "h-5 w-5 mr-2"
              )} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
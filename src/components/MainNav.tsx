
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, TrendingUp } from "lucide-react";

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export function MainNav({ className, items, ...props }: NavProps) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
      >
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link
        to="/progress"
        className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <TrendingUp size={20} />
        <span>My Progress</span>
      </Link>
    </nav>
  );
}

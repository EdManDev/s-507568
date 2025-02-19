
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <div className="h-16 border-b border-border px-6 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <h2 className="text-lg font-semibold">Dashboard Overview</h2>
      
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New message from Team</DropdownMenuItem>
            <DropdownMenuItem>Weekly report ready</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium">JD</span>
        </div>
      </div>
    </div>
  );
};

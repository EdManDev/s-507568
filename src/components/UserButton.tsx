
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserButton() {
  return (
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </Button>
  );
}

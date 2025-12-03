import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  title?: string;
}

export function TopNav({ title = "Creative Impact-to-Conversion" }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
          Beta
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-border transition-all hover:ring-primary">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

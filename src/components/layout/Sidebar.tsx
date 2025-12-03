import { Home, GitCompare, Lightbulb, FileText, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: GitCompare, label: "Compare", path: "/compare" },
  { icon: Lightbulb, label: "Insights", path: "/insights" },
  { icon: FileText, label: "Reports", path: "/reports" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col bg-sidebar py-4">
      <div className="flex items-center justify-center pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-glow">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      
      <nav className="flex flex-1 flex-col items-center gap-2 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "group flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
              "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            )}
            activeClassName="bg-sidebar-accent text-sidebar-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

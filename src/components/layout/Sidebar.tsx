
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CreditCard,
  Home,
  Menu,
  Settings,
  Users,
  X,
  Calendar,
  Gift,
  Bell,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Accounts", path: "/accounts", icon: CreditCard },
    { name: "Transactions", path: "/transactions", icon: Calendar },
    { name: "Benefits", path: "/benefits", icon: Gift },
    { name: "Profile", path: "/profile", icon: Users },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className={cn(
      "flex flex-col bg-sidebar transition-all duration-300 border-r border-border h-screen relative",
      expanded ? "w-64" : "w-20",
      className
    )}>
      <div className="flex items-center justify-between p-4">
        {expanded ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ok-blue flex items-center justify-center">
              <span className="text-white font-bold">OK</span>
            </div>
            <span className="font-bold text-lg">OK Banking</span>
          </div>
        ) : (
          <div className="w-8 h-8 mx-auto rounded-full bg-ok-blue flex items-center justify-center">
            <span className="text-white font-bold">OK</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setExpanded(!expanded)}
          className="text-sidebar-foreground"
        >
          {expanded ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      
      <div className="mt-4 flex-1 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors group relative",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="shrink-0" size={20} />
                {expanded && <span>{item.name}</span>}
                {!expanded && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover rounded-md shadow-md text-popover-foreground text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-border">
        {expanded ? (
          <div className="flex items-center justify-between bg-sidebar-accent rounded-lg p-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium">3 Notifications</span>
              <span className="text-xs text-muted-foreground">Check your latest updates</span>
            </div>
            <Bell size={18} className="text-ok-red" />
          </div>
        ) : (
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="text-sidebar-foreground relative">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-ok-red rounded-full"></span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

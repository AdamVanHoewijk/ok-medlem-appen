
import { Sidebar } from "@/components/layout/Sidebar";
import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { SavingsAccount } from "@/components/dashboard/SavingsAccount";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { MembershipBenefits } from "@/components/dashboard/MembershipBenefits";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <div className="flex flex-1 items-center gap-4">
            <form className="hidden sm:flex-1 sm:flex max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="rounded-lg pl-8 bg-background"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-ok-red rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Hello, Anna</h1>
              <p className="text-muted-foreground">
                Welcome to your OK member dashboard
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <AccountSummary />
              <SavingsAccount />
            </div>
            <RecentTransactions className="hidden md:block" />
          </div>
          <div className="space-y-6">
            <MembershipBenefits />
            <RecentTransactions className="md:hidden" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

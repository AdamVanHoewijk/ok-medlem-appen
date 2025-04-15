
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bell, Search, User, Plus, CreditCard, Wallet, PiggyBank, ChevronRight, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const Accounts = () => {
  const accounts = [
    {
      id: "a1",
      name: "Everyday Checking",
      number: "**** 5678",
      balance: 24580,
      type: "checking",
      icon: CreditCard
    },
    {
      id: "a2",
      name: "Savings Account",
      number: "**** 9012",
      balance: 15750,
      type: "savings",
      icon: PiggyBank
    },
    {
      id: "a3",
      name: "Member Bonus Account",
      number: "**** 3456",
      balance: 5280,
      type: "bonus",
      icon: Wallet
    },
    {
      id: "a4",
      name: "Investment Fund",
      number: "**** 7890",
      balance: 55200,
      type: "investment",
      icon: Landmark
    }
  ];
  
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
                  placeholder="Search accounts..."
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
        <main className="grid gap-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">My Accounts</h1>
              <p className="text-muted-foreground">Manage your OK accounts and savings</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Account
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {accounts.map((account) => {
              const Icon = account.icon;
              
              return (
                <Card key={account.id} className="relative group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{account.name}</CardTitle>
                          <CardDescription>{account.number}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Available Balance</span>
                      <span className="font-bold text-xl">{account.balance.toLocaleString()} kr</span>
                    </div>
                    
                    {account.type === "savings" && (
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-muted-foreground">Savings Goal: 50,000 kr</p>
                          <p className="text-xs text-muted-foreground">31.5%</p>
                        </div>
                        <Progress value={31.5} className="h-1.5" />
                      </div>
                    )}
                    
                    <Button variant="ghost" className="absolute inset-0 flex justify-end items-center opacity-0 group-hover:opacity-100">
                      <span className="sr-only">View account details</span>
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
              <CardDescription>Overview of your financial status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Total Balance</span>
                  <span className="font-bold">100,810.00 kr</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Total Savings</span>
                  <span className="font-bold">71,030.00 kr</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Available Credit</span>
                  <span className="font-bold">15,000.00 kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Member Points</span>
                  <span className="font-bold">2,450 pts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Accounts;

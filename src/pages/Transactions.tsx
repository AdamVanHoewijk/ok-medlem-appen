
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Search, User, Download, Filter, ArrowUp, ArrowDown, ShoppingCart, Coffee, Home, Car, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Transactions = () => {
  // Mock transactions data
  const transactions = [
    {
      id: "t1",
      description: "Salary",
      merchant: "OK AB",
      amount: 25000,
      date: new Date(2025, 3, 1),
      type: "income",
      category: "income",
      account: "Checking"
    },
    {
      id: "t2",
      description: "Grocery Store",
      merchant: "ICA Maxi",
      amount: 850,
      date: new Date(2025, 3, 12),
      type: "expense",
      category: "shopping",
      account: "Checking"
    },
    {
      id: "t3",
      description: "Café Visit",
      merchant: "Espresso House",
      amount: 120,
      date: new Date(2025, 3, 13),
      type: "expense",
      category: "food",
      account: "Checking"
    },
    {
      id: "t4",
      description: "Rent Payment",
      merchant: "Landlord AB",
      amount: 7500,
      date: new Date(2025, 3, 5),
      type: "expense",
      category: "housing",
      account: "Checking"
    },
    {
      id: "t5",
      description: "Dividend Payout",
      merchant: "OK Ekonomisk Förening",
      amount: 780,
      date: new Date(2025, 3, 10),
      type: "income",
      category: "income",
      account: "Savings"
    },
    {
      id: "t6",
      description: "Gas Station",
      merchant: "OK Q8",
      amount: 650,
      date: new Date(2025, 3, 8),
      type: "expense",
      category: "transport",
      account: "Checking"
    },
    {
      id: "t7",
      description: "Clothing Purchase",
      merchant: "H&M",
      amount: 520,
      date: new Date(2025, 3, 15),
      type: "expense",
      category: "shopping",
      account: "Checking"
    },
    {
      id: "t8",
      description: "Savings Transfer",
      merchant: "Internal Transfer",
      amount: 2000,
      date: new Date(2025, 3, 15),
      type: "expense",
      category: "transfer",
      account: "Checking"
    },
    {
      id: "t9",
      description: "Savings Received",
      merchant: "Internal Transfer",
      amount: 2000,
      date: new Date(2025, 3, 15),
      type: "income",
      category: "transfer",
      account: "Savings"
    }
  ];
  
  // Function to get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "shopping":
        return <ShoppingCart className="h-4 w-4" />;
      case "food":
        return <Coffee className="h-4 w-4" />;
      case "housing":
        return <Home className="h-4 w-4" />;
      case "transport":
        return <Car className="h-4 w-4" />;
      case "income":
        return <ArrowDown className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case "transfer":
        return <ArrowUp className="h-4 w-4" />;
      default:
        return <Gift className="h-4 w-4" />;
    }
  };
  
  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "shopping":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "food":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "housing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "transport":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "income":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
      case "transfer":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };
  
  // Group transactions by date (for displaying headings)
  const groupedTransactions: Record<string, typeof transactions> = {};
  
  transactions.forEach(transaction => {
    const dateKey = format(transaction.date, "yyyy-MM-dd");
    if (!groupedTransactions[dateKey]) {
      groupedTransactions[dateKey] = [];
    }
    groupedTransactions[dateKey].push(transaction);
  });
  
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
                  placeholder="Search transactions..."
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
              <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
              <p className="text-muted-foreground">View and manage your transaction history</p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="checking">Checking Account</SelectItem>
                  <SelectItem value="savings">Savings Account</SelectItem>
                  <SelectItem value="bonus">Member Bonus</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(groupedTransactions).map(([dateKey, dayTransactions]) => (
                  <div key={dateKey} className="space-y-4">
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {format(new Date(dateKey), "EEEE, MMMM d, yyyy")}
                    </h3>
                    <div className="space-y-4">
                      {dayTransactions.map((transaction) => (
                        <div key={transaction.id} 
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "h-10 w-10 rounded-full flex items-center justify-center",
                              transaction.type === "income" 
                                ? "bg-green-100 dark:bg-green-900/30" 
                                : "bg-gray-100 dark:bg-gray-800"
                            )}>
                              {transaction.type === "income" ? (
                                <ArrowDown className="h-5 w-5 text-green-600 dark:text-green-400" />
                              ) : (
                                <ArrowUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-xs text-muted-foreground">{transaction.merchant}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className={cn(
                              "font-medium",
                              transaction.type === "income" 
                                ? "text-green-600 dark:text-green-400" 
                                : "text-red-600 dark:text-red-400"
                            )}>
                              {transaction.type === "income" ? "+" : "-"}{transaction.amount.toFixed(2)} kr
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{transaction.account}</span>
                              <Badge 
                                variant="outline" 
                                className={cn(
                                  "text-xs",
                                  getCategoryColor(transaction.category)
                                )}
                              >
                                <span className="flex items-center gap-1">
                                  {getCategoryIcon(transaction.category)}
                                  <span className="capitalize">{transaction.category}</span>
                                </span>
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Transactions;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, ShoppingCart, Coffee, Home, Car, Gift } from "lucide-react";
import { format } from "date-fns";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
  type: "income" | "expense";
  category: "shopping" | "food" | "housing" | "transport" | "other";
}

interface RecentTransactionsProps {
  className?: string;
  transactions?: Transaction[];
}

export function RecentTransactions({ className, transactions: propTransactions }: RecentTransactionsProps) {
  const defaultTransactions: Transaction[] = [
    {
      id: "t1",
      description: "Salary",
      amount: 25000,
      date: new Date(2025, 3, 1),
      type: "income",
      category: "other"
    },
    {
      id: "t2",
      description: "Grocery Store",
      amount: 850,
      date: new Date(2025, 3, 12),
      type: "expense",
      category: "shopping"
    },
    {
      id: "t3",
      description: "Café Visit",
      amount: 120,
      date: new Date(2025, 3, 13),
      type: "expense",
      category: "food"
    },
    {
      id: "t4",
      description: "Rent Payment",
      amount: 7500,
      date: new Date(2025, 3, 5),
      type: "expense",
      category: "housing"
    },
    {
      id: "t5",
      description: "Dividend Payout",
      amount: 780,
      date: new Date(2025, 3, 10),
      type: "income",
      category: "other"
    }
  ];

  const transactions = propTransactions || defaultTransactions;
  
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
      default:
        return <Gift className="h-4 w-4" />;
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  transaction.type === "income" 
                    ? "bg-green-100 dark:bg-green-500/20" 
                    : "bg-gray-100 dark:bg-gray-700"
                )}>
                  {transaction.type === "income" ? (
                    <ArrowUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <div className="text-gray-600 dark:text-gray-300">
                      {getCategoryIcon(transaction.category)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(transaction.date, "d MMM yyyy")}
                  </p>
                </div>
              </div>
              <div className={cn(
                "font-medium",
                transaction.type === "income" 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-red-600 dark:text-red-400"
              )}>
                {transaction.type === "income" ? "+" : "-"}{transaction.amount.toFixed(2)} kr
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

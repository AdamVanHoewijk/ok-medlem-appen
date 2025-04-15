
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, TrendingUp, TrendingDown, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AccountSummaryProps {
  className?: string;
}

export function AccountSummary({ className }: AccountSummaryProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Main Account</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowBalance(!showBalance)}
            className="h-8 w-8"
          >
            {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
        <CardDescription>Checking Account **** 5678</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <h3 className="text-2xl font-bold">
              {showBalance ? "24,580.00 kr" : "••••••••"}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Income</p>
              <p className="font-medium">{showBalance ? "32,450.00 kr" : "••••••••"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Expenses</p>
              <p className="font-medium">{showBalance ? "7,870.00 kr" : "••••••••"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

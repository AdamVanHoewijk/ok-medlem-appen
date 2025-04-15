
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent, PiggyBank, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface SavingsAccountProps {
  className?: string;
}

export function SavingsAccount({ className }: SavingsAccountProps) {
  const [showBalance, setShowBalance] = useState(true);
  const savingsGoal = 50000;
  const currentSavings = 15750;
  const savingsPercentage = Math.round((currentSavings / savingsGoal) * 100);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Savings Account</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowBalance(!showBalance)}
            className="h-8 w-8"
          >
            {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
        <CardDescription>Member Savings **** 9012</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <PiggyBank className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Current Savings</p>
            <h3 className="text-2xl font-bold">
              {showBalance ? "15,750.00 kr" : "••••••••"}
            </h3>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">Savings Goal</p>
            <p className="text-sm font-medium">
              {showBalance ? "50,000.00 kr" : "••••••••"}
            </p>
          </div>
          <Progress value={savingsPercentage} className="h-2" />
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">{savingsPercentage}% of goal</p>
            <p className="text-xs text-muted-foreground">Target: Dec 2025</p>
          </div>
        </div>

        <div className="bg-secondary p-3 rounded-lg flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Percent className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Annual Interest Rate</p>
            <p className="font-medium">3.5%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

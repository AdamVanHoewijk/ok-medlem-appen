
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Gift, Fuel, Tag, PercentCircle, Zap } from "lucide-react";

interface MembershipBenefitsProps {
  className?: string;
}

export function MembershipBenefits({ className }: MembershipBenefitsProps) {
  const benefits = [
    {
      id: "b1",
      title: "Fuel Discount",
      description: "Save 10 öre/liter on fuel at all OK stations",
      icon: Fuel,
      badgeText: "Active",
      badgeVariant: "success"
    },
    {
      id: "b2",
      title: "Grocery Cashback",
      description: "2% cashback on grocery purchases at partner stores",
      icon: Tag,
      badgeText: "Active",
      badgeVariant: "success"
    },
    {
      id: "b3",
      title: "Annual Dividend",
      description: "Annual dividend based on your membership activity",
      icon: PercentCircle,
      badgeText: "April 2025",
      badgeVariant: "outline"
    },
    {
      id: "b4",
      title: "Reduced Electricity Rates",
      description: "Special member rates on electricity contracts",
      icon: Zap,
      badgeText: "New",
      badgeVariant: "default"
    }
  ];

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Membership Benefits</CardTitle>
          <Gift className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{benefit.title}</h4>
                    <Badge 
                      variant={
                        benefit.badgeVariant === "success" ? "default" : 
                        benefit.badgeVariant === "outline" ? "outline" : "default"
                      }
                      className={cn(
                        "text-xs",
                        benefit.badgeVariant === "success" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                        benefit.badgeVariant === "outline" && "bg-transparent"
                      )}
                    >
                      {benefit.badgeText}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

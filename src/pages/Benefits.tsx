
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Search, User, Gift, Fuel, Tag, PercentCircle, Zap, ArrowRight, Calendar, Award, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Benefits = () => {
  const categories = [
    { id: "all", name: "All Benefits" },
    { id: "fuel", name: "Fuel & Energy" },
    { id: "shopping", name: "Shopping" },
    { id: "financial", name: "Financial" },
    { id: "lifestyle", name: "Lifestyle" }
  ];

  const benefits = [
    {
      id: "b1",
      title: "Fuel Discount",
      description: "Save 10 öre/liter on fuel at all OK stations nationwide. Available for all member levels.",
      category: "fuel",
      icon: Fuel,
      usage: "Used 12 times",
      status: "active",
      highlight: true
    },
    {
      id: "b2",
      title: "Grocery Cashback",
      description: "2% cashback on grocery purchases at partner stores including ICA, Coop, and Willys.",
      category: "shopping",
      icon: Tag,
      usage: "Used 8 times",
      status: "active",
      highlight: false
    },
    {
      id: "b3",
      title: "Annual Dividend",
      description: "Annual dividend based on your membership activity and purchases. Next payout in April 2025.",
      category: "financial",
      icon: PercentCircle,
      usage: "Annual benefit",
      status: "upcoming",
      highlight: true
    },
    {
      id: "b4",
      title: "Reduced Electricity Rates",
      description: "Special member rates on electricity contracts. Save up to 500 kr annually on your electricity bill.",
      category: "fuel",
      icon: Zap,
      usage: "New benefit",
      status: "active",
      highlight: false
    },
    {
      id: "b5",
      title: "Car Wash Discount",
      description: "25% off car wash services at all OK stations. Unlimited uses per month.",
      category: "lifestyle",
      icon: Fuel,
      usage: "Used 3 times",
      status: "active",
      highlight: false
    },
    {
      id: "b6",
      title: "Travel Insurance",
      description: "Complementary travel insurance for trips booked with your OK membership card.",
      category: "lifestyle",
      icon: Calendar,
      usage: "Not used yet",
      status: "active",
      highlight: false
    },
    {
      id: "b7",
      title: "Member Events",
      description: "Exclusive invitations to member-only events, workshops, and special promotions.",
      category: "lifestyle",
      icon: Award,
      usage: "2 upcoming events",
      status: "active",
      highlight: false
    },
    {
      id: "b8",
      title: "0% Foreign Transaction Fee",
      description: "No fees on foreign currency transactions with your OK membership card.",
      category: "financial",
      icon: CreditCard,
      usage: "Always active",
      status: "active",
      highlight: false
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
                  placeholder="Search benefits..."
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
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Membership Benefits</h1>
            <p className="text-muted-foreground">Explore and activate your OK membership benefits</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Your Benefits Overview</CardTitle>
                <CardDescription>Current benefits based on your Gold membership level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Gold Member</h3>
                    <p className="text-muted-foreground">Member since 2020</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Member Points</span>
                      <span className="text-sm font-medium">2,450 / 5,000</span>
                    </div>
                    <Progress value={49} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Collect 2,550 more points to reach Platinum level
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">This Year's Savings</span>
                      </div>
                      <p className="text-2xl font-bold">3,245 kr</p>
                    </div>
                    <div className="bg-secondary p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <PercentCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Expected Dividend</span>
                      </div>
                      <p className="text-2xl font-bold">1,780 kr</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Featured Benefits</CardTitle>
                <CardDescription>Don't miss out on these great offers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits
                  .filter(benefit => benefit.highlight)
                  .map(benefit => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {benefit.description}
                          </p>
                          <Button variant="link" className="px-0 h-auto text-sm">
                            Learn more <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {benefits
                    .filter(benefit => category.id === 'all' || benefit.category === category.id)
                    .map(benefit => {
                      const Icon = benefit.icon;
                      return (
                        <Card key={benefit.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                              </div>
                              <Badge 
                                variant={benefit.status === 'active' ? 'default' : 'outline'}
                                className={cn(
                                  "text-xs capitalize",
                                  benefit.status === 'active' && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                )}
                              >
                                {benefit.status}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">
                              {benefit.description}
                            </p>
                          </CardContent>
                          <CardFooter className="border-t bg-muted/50 pt-4 pb-4 flex justify-between">
                            <span className="text-xs text-muted-foreground">{benefit.usage}</span>
                            <Button variant="ghost" size="sm" className="h-8">
                              Use benefit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Benefits;

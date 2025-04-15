
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Search, User, Edit, Check, X, Mail, Phone, MapPin, Calendar, Save, Award, Gift, Fuel, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const memberInfo = {
    name: "Anna Andersson",
    email: "anna.andersson@example.com",
    phone: "+46 70 123 45 67",
    address: "Storgatan 42, 12345 Stockholm",
    memberSince: new Date(2020, 5, 15),
    memberLevel: "Gold",
    memberNumber: "12345678",
    points: 2450,
    pointsToNextLevel: 2550,
    image: ""
  };
  
  const memberActivity = [
    {
      id: "a1",
      title: "Annual Dividend Received",
      date: new Date(2025, 2, 15),
      amount: "1,450 kr",
      type: "financial"
    },
    {
      id: "a2",
      title: "Reached Gold Member Status",
      date: new Date(2024, 10, 5),
      amount: "",
      type: "status"
    },
    {
      id: "a3",
      title: "5 Year Membership Anniversary",
      date: new Date(2024, 5, 15),
      amount: "500 bonus points",
      type: "reward"
    },
    {
      id: "a4",
      title: "Used Fuel Discount",
      date: new Date(2025, 3, 2),
      amount: "Saved 45 kr",
      type: "discount"
    },
    {
      id: "a5",
      title: "Grocery Cashback",
      date: new Date(2025, 3, 10),
      amount: "Earned 24 kr",
      type: "cashback"
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
        <main className="grid gap-6 p-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground">Manage your member information and preferences</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Member Information</CardTitle>
                    <CardDescription>Your personal and contact details</CardDescription>
                  </div>
                  {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)} variant="secondary">
                        <X className="mr-2 h-4 w-4" /> Cancel
                      </Button>
                      <Button onClick={() => setIsEditing(false)}>
                        <Save className="mr-2 h-4 w-4" /> Save
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-8 items-start">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={memberInfo.image} alt={memberInfo.name} />
                      <AvatarFallback className="bg-primary text-xl">
                        {memberInfo.name.split(' ').map(part => part[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="outline" size="sm">Change Photo</Button>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input id="name" defaultValue={memberInfo.name} />
                        ) : (
                          <p className="text-sm mt-1 font-medium">{memberInfo.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        {isEditing ? (
                          <Input id="email" defaultValue={memberInfo.email} />
                        ) : (
                          <div className="flex items-center gap-2 mt-1">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium">{memberInfo.email}</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        {isEditing ? (
                          <Input id="phone" defaultValue={memberInfo.phone} />
                        ) : (
                          <div className="flex items-center gap-2 mt-1">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium">{memberInfo.phone}</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        {isEditing ? (
                          <Input id="address" defaultValue={memberInfo.address} />
                        ) : (
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium">{memberInfo.address}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Membership Details</CardTitle>
                <CardDescription>Your membership status and benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{memberInfo.memberLevel} Member</p>
                      <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Member #{memberInfo.memberNumber}</p>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Member Since</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>{format(memberInfo.memberSince, "MMMM d, yyyy")}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Current Points</span>
                    <span className="font-medium">{memberInfo.points} pts</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Next Level</span>
                    <span>Platinum ({memberInfo.pointsToNextLevel} more pts)</span>
                  </div>
                </div>
                
                <div className="pt-2 space-y-2 border-t">
                  <h4 className="font-medium">Your Benefits</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" /> Fuel discount (10 öre/liter)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" /> 2% Grocery cashback
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" /> Annual dividend
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" /> Reduced electricity rates
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-4">
                <Button className="w-full">View All Benefits</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Tabs defaultValue="activity">
            <TabsList>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Member Activity</CardTitle>
                  <CardDescription>Recent activity and transactions with your membership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {memberActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4">
                        <div className="relative">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {activity.type === 'financial' && <Award className="h-4 w-4 text-primary" />}
                            {activity.type === 'status' && <Award className="h-4 w-4 text-amber-600" />}
                            {activity.type === 'reward' && <Gift className="h-4 w-4 text-primary" />}
                            {activity.type === 'discount' && <Fuel className="h-4 w-4 text-primary" />}
                            {activity.type === 'cashback' && <Tag className="h-4 w-4 text-primary" />}
                          </div>
                          <span className="absolute top-8 bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-border last:hidden"></span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(activity.date, "MMMM d, yyyy")}
                          </p>
                          {activity.amount && (
                            <Badge variant="outline" className="mt-1">
                              {activity.amount}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 pb-4 flex justify-center">
                  <Button variant="outline">View All Activity</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="preferences" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Preferences</CardTitle>
                  <CardDescription>Manage how we contact you</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Preferences settings would go here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Security settings would go here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Profile;

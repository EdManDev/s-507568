import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Gift, Book, Upload, Sparkles } from "lucide-react";


import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

const Analytics = () => {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      
      <main className="p-6">
      <div className="animate-fade-in space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Your next reward</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Gift className="h-12 w-12 text-accent" />
              <div className="space-y-1">
                <p className="text-lg font-medium">19 Minutes to go</p>
                <p className="text-sm text-muted-foreground">
                  Read for 20 minutes to unwrap something new
                </p>
                <ProgressBar value={33} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Create a story using AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Sparkles className="h-12 w-12 text-primary" />
              <Button className="w-full">Start Creating</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Read from Library</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Book className="h-12 w-12 text-primary" />
              <Button className="w-full">Browse Library</Button>
            </CardContent>
          </Card>

          <Card className="col-span-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Reading Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                Let's keep it going! Read 2 more days for a 3-day badge
              </p>
              <div className="mt-4 flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-primary" />
                <div className="h-4 w-4 rounded-full bg-secondary" />
                <div className="h-4 w-4 rounded-full bg-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </main>
    </div>
  </div>

  );
};

export default Analytics;

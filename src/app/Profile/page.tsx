"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Activity,
  Users,
  Award,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import GitHubCommits from "@/components/Github-commits";
import ContributionHeatmap from "@/components/Github-commits";
import Laydesign from "./Laydesign";

const DailyLoginHeatmap = () => {
  // Updated to show true/false login status with checkboxes
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 7 + i);
    return {
      date,
      loggedIn: Math.random() < 0.5, // Random true or false login status
    };
  });

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((day, index) => (
        <div key={index} className="text-center">
          <span className="block text-sm mb-2">{day.date.toDateString()}</span>
          <input
            type="checkbox"
            checked={day.loggedIn}
            readOnly
            className="h-4 w-4 accent-gray-500"
          />
        </div>
      ))}
    </div>
  );
};

const bucketListItems = [
  {
    id: 1,
    tag: "Career",
    task: "Speak at a major tech conference",
    status: "Planned",
    priority: "High",
  },
  {
    id: 2,
    tag: "Learning",
    task: "Master a new programming language",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    tag: "Personal",
    task: "Run a marathon",
    status: "Not Started",
    priority: "Low",
  },
  {
    id: 4,
    tag: "Career",
    task: "Launch a successful SaaS product",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 5,
    tag: "Learning",
    task: "Contribute to open-source projects",
    status: "Ongoing",
    priority: "Medium",
  },
  {
    id: 5,
    tag: "Learning",
    task: "Contribute to open-source projects",
    status: "Ongoing",
    priority: "Medium",
  },
  {
    id: 5,
    tag: "Learning",
    task: "Contribute to open-source projects",
    status: "Ongoing",
    priority: "Medium",
  },
  {
    id: 5,
    tag: "Learning",
    task: "Contribute to open-source projects",
    status: "Ongoing",
    priority: "Medium",
  },
];

const mobileUsageData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 2.8 },
  { day: "Thu", hours: 3.6 },
  { day: "Fri", hours: 4.1 },
  { day: "Sat", hours: 5.3 },
  { day: "Sun", hours: 4.7 },
];

export default function Page() {
  const [loginTimeRange, setLoginTimeRange] = useState("week");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-1  ">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile picture"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-2xl font-bold">Jane Doe</h2>
              <p className="text-gray-400">Senior Software Engineer</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="flex items-center bg-gray-800 text-gray-300"
                >
                  <MapPin className="mr-1 h-3 w-3" /> San Francisco, CA
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center bg-gray-800 text-gray-300"
                >
                  <Briefcase className="mr-1 h-3 w-3" /> TechCorp Inc.
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center bg-gray-800 text-gray-300"
                >
                  <GraduationCap className="mr-1 h-3 w-3" /> Stanford University
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details Card */}
        <div className="lg:col-span-2  ">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4  h-full">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Award className="h-8 w-8 mb-2 text-yellow-500" />
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Star className="h-8 w-8 mb-2 text-purple-500" />
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Activity className="h-8 w-8 mb-2 text-green-500" />
                <p className="text-2xl font-bold">87%</p>
                <p className="text-sm text-muted-foreground">Productivity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-blue-500" />
                <p className="text-2xl font-bold">134</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-blue-500" />
                <p className="text-2xl font-bold">134</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-blue-500" />
                <p className="text-2xl font-bold">134</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-blue-500" />
                <p className="text-2xl font-bold">134</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-blue-500" />
                <p className="text-2xl font-bold">134</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bucket List Table */}
        <div className="lg:col-span-1  lg:row-span-3 flex items-stretch">
          <Card className="  flex-grow ">
            <CardHeader>
              <CardTitle>Bucket List</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>

        {/* Current Challenge */}
        <div className="lg:col-span-2 lg:row-span-3 flex flex-col gap-6  ">
          <Card className="  ">
            <CardHeader>
              <CardTitle>Current Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="font-semibold">
                Implement Microservices Architecture
              </h3>
              <p className="text-gray-400">Deadline: August 31, 2023</p>
            </CardContent>
          </Card>

          {/* Mobile Usage Chart */}
          <Card className="  ">
            <CardHeader>
              <CardTitle>Hours Spent on Mobile (Weekly)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={mobileUsageData}>
                  <XAxis dataKey="day" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Bar dataKey="hours" fill="#ffffff" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className=" border ">
            <ContributionHeatmap />
          </Card>
        </div>
      </div>
    </div>
  );
}

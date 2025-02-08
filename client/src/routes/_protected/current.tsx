import { createFileRoute } from "@tanstack/react-router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Route = createFileRoute("/_protected/current")({
  component: RouteComponent,
});

export const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Email sent!",
        });
      }}
    >
      Email
    </Button>
  );
};

function RouteComponent() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      offeredCourse: "CS 251",
      offeredSection: "31621",
      offeredDays: "M, W, F",
      offeredTime: "2:00-2:50",
      requiredCourse: "Math 215",
      requiredSection: "67890",
      requiredDays: "T, TH",
      requiredTime: "1:00-2:15",
    },
    {
      id: 2,
      offeredCourse: "CS 377",
      offeredSection: "23751",
      offeredDays: "T, TH",
      offeredTime: "9:00-10:15",
      requiredCourse: "CS 401",
      requiredSection: "65891",
      requiredDays: "M, W, F",
      requiredTime: "10:30-11:45",
    },
    {
      id: 3,
      offeredCourse: "CS 480",
      offeredSection: "15342",
      offeredDays: "M, W, F",
      offeredTime: "10:00-11:15",
      requiredCourse: "CS 426",
      requiredSection: "89012",
      requiredDays: "T, TH",
      requiredTime: "11:30-12:45",
    },
    {
      id: 4,
      offeredCourse: "IE 342",
      offeredSection: "78124",
      offeredDays: "T, TH",
      offeredTime: "5:00-6:15",
      requiredCourse: "STAT 381",
      requiredSection: "90123",
      requiredDays: "M, W, F",
      requiredTime: "2:30-3:45",
    },
    {
      id: 5,
      offeredCourse: "CS 477",
      offeredSection: "3521",
      offeredDays: "M, W, F",
      offeredTime: "3:00-4:15",
      requiredCourse: "CS 487",
      requiredSection: "24341",
      requiredDays: "T, TH",
      requiredTime: "9:30-10:45",
    },
    {
      id: 6,
      offeredCourse: "CS 480",
      offeredSection: "57421",
      offeredDays: "T, TH",
      offeredTime: "12:00-1:15",
      requiredCourse: "CS 440",
      requiredSection: "42871",
      requiredDays: "M, W, F",
      requiredTime: "10:00-11:15",
    },
  ]);

  const handleDelete = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-center">Current Trades</h2>
        <div className="flex-grow overflow-auto">
          <Table className="w-full text-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Offered Course</TableHead>
                <TableHead className="w-1/4">Offered Section & Time</TableHead>
                <TableHead className="w-1/4">Requested Course</TableHead>
                <TableHead className="w-1/4">Required Section & Time</TableHead>
                <TableHead className="w-1/4">Send Email</TableHead>
                <TableHead className="w-1/4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <TableRow key={notification.id} className="h-16">
                    <TableCell className="font-medium">{notification.offeredCourse}</TableCell>
                    <TableCell>
                      {notification.offeredSection} <br />
                      {notification.offeredDays} <br />
                      {notification.offeredTime}
                    </TableCell>
                    <TableCell className="font-medium">{notification.requiredCourse}</TableCell>
                    <TableCell>
                      {notification.requiredSection} <br />
                      {notification.requiredDays} <br />
                      {notification.requiredTime}
                    </TableCell>
                    <TableCell>
                      <ToastDemo />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(notification.id)} >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-xl">
                    No trade notifications.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}


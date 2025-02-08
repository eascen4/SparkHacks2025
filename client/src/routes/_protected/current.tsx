import { createFileRoute } from "@tanstack/react-router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_protected/current")({
  component: RouteComponent,
});

function RouteComponent() {
  const notifications = [
    {
      id: 1,
      offeredCourse: "CS 251",
      requiredCourse: "Math 215",
    },
    {
      id: 2,
      offeredCourse: "CS 377",
      requiredCourse: "CS 401",
    },
    {
      id: 3,
      offeredCourse: "CS 480",
      requiredCourse: "CS 426",
    },
  ];

  const handleEmail = (id: number) => {
    console.log(`Email sent for trade: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-center">Current Trades</h2>
        <div className="flex-grow overflow-auto">
          <Table className="w-full text-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Offered Course</TableHead>
                <TableHead className="w-1/3">Required Course</TableHead>
                <TableHead className="w-1/3">Send Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <TableRow key={notification.id} className="h-16">
                    <TableCell className="font-medium">{notification.offeredCourse}</TableCell>
                    <TableCell>{notification.requiredCourse}</TableCell>
                    <TableCell>
                      <Button
                        variant="default"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg"
                        onClick={() => handleEmail(notification.id)}
                      >
                        Email
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-10 text-xl">
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


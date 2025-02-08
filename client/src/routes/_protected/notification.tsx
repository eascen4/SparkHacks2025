import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/notification")({
  component: RouteComponent,
});

function RouteComponent() {
  const notifications = [
    {
      id: 1,
      class: "Offered Course: CS 251",
      requiredCourse: "Math 215",
    },
    {
      id: 2,
      class: "Offered Course: CS 377",
      requiredCourse: "CS 401",
    },
    {
      id: 3,
      class: "Offered Course: CS 480",
      requiredCourse: "CS 426",
    },
  ];

  // Handle accepting or rejecting a trade
  const handleTradeResponse = (id: number, action: "accept" | "reject") => {
    console.log(`Trade ${action}ed: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Trade Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{notification.class}</h3>
              <p className="text-gray-700">
              </p>
              <p className="text-gray-700">
                <strong>Required Course:</strong> {notification.requiredCourse}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleTradeResponse(notification.id, "accept")}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleTradeResponse(notification.id, "reject")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_protected/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const [wantedSubject, setWantedSubject] = useState("");
  const [wantedCourseNumber, setWantedCourseNumber] = useState("");

  const [giveUpSubject, setGiveUpSubject] = useState("");
  const [giveUpCourseNumber, setGiveUpCourseNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Wanted Class:", wantedSubject, wantedCourseNumber);
    console.log("Willing to Give Up:", giveUpSubject, giveUpCourseNumber);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create a Trade</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Desired class</h3>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              value={wantedSubject}
              onChange={(e) => setWantedSubject(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-gray-700 mt-2">Course Number</label>
            <input
              type="text"
              value={wantedCourseNumber}
              onChange={(e) => setWantedCourseNumber(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Offering Class</h3>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              value={giveUpSubject}
              onChange={(e) => setGiveUpSubject(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-gray-700 mt-2">Course Number</label>
            <input
              type="text"
              value={giveUpCourseNumber}
              onChange={(e) => setGiveUpCourseNumber(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit Trade
          </button>
        </form>
      </div>
    </div>
  );
}

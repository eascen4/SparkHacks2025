import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_protected/current")({
  component: RouteComponent,
});

function RouteComponent() {
  const allCourses = [
    { id: 1, name: "Mathematics", number: "MATH 220" },
    { id: 2, name: "Physics", number: "PHYS 141" },
    { id: 3, name: "Computer Science", number: "CS 377" },
    { id: 4, name: "Biology", number: "BIO 343" },
    { id: 5, name: "Mathematics", number: "MATH 181" },
    { id: 6, name: "Computer Science", number: "CS 251" },
  ];

  const [subject, setSubject] = useState("");
  const [courseNumber, setCourseNumber] = useState("");

  const handleTrade = (courseName: string) => {
    console.log(`Requesting trade for ${courseName}`);
  };

  const filteredCourses = allCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(subject.toLowerCase()) &&
      course.number.toLowerCase().includes(courseNumber.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Current Trades</h2>

      {/* Search Bar */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-4 py-2 border rounded-md w-64"
        />
        <input
          type="text"
          placeholder="Course ID"
          value={courseNumber}
          onChange={(e) => setCourseNumber(e.target.value)}
          className="px-4 py-2 border rounded-md w-32"
        />
      </div>

      {/* Course List */}
      <div className="space-y-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center w-96">
              <div>
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-gray-600">{course.number}</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleTrade(course.name)}
              >
                Trade
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No matching courses found.</p>
        )}
      </div>
    </div>
  );
}



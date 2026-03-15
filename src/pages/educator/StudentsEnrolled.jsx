/* eslint-disable react-hooks/set-state-in-effect */
// src/pages/educator/StudentsEnrolled.jsx
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const StudentEnrolled = () => {
  const [students, setStudents] = useState([]);

  // Fake data for demonstration
  useEffect(() => {
    // لو تحب تتركها فاضية لعرض رسالة "No students"
    const fakeStudents = [
      {
        id: 1,
        name: "Ahmed Mohamed",
        course: "React Masterclass",
        email: "ahmed@example.com",
        date: "Today",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        id: 2,
        name: "Sara Ali",
        course: "JavaScript Basics",
        email: "sara@example.com",
        date: "Yesterday",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 3,
        name: "Omar Khaled",
        course: "Node.js Bootcamp",
        email: "omar@example.com",
        date: "2 days ago",
        status: "Pending",
        avatar: "https://i.pravatar.cc/150?img=7",
      },
      {
        id: 4,
        name: "Laila Hassan",
        course: "Python for Everyone",
        email: "laila@example.com",
        date: "3 days ago",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      {
        id: 5,
        name: "Youssef Nabil",
        course: "Data Science 101",
        email: "youssef@example.com",
        date: "Last week",
        status: "Pending",
        avatar: "https://i.pravatar.cc/150?img=20",
      },
      {
        id: 6,
        name: "Mona Fathy",
        course: "UI/UX Design",
        email: "mona@example.com",
        date: "Last week",
        status: "Active",
        avatar: "https://i.pravatar.cc/150?img=25",
      },
    ];

    setStudents(fakeStudents);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Students Enrolled</h1>

      {students.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img src={assets.nodata} alt="No students" className="w-64 mb-6" />
          <h2 className="text-xl font-semibold text-gray-600">
            No students have enrolled yet
          </h2>
          <p className="text-gray-400 mt-2 text-center max-w-sm">
            Once students enroll in your courses, they will appear here in a
            neat and organized table.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Course</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{student.name}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{student.email}</td>
                  <td className="py-3 px-4">{student.course}</td>
                  <td className="py-3 px-4">{student.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentEnrolled;

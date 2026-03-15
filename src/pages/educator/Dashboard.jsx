/* eslint-disable react-hooks/set-state-in-effect */
// src/pages/educator/Dashboard.jsx

import { useEffect, useState } from "react";
import { coursesData } from "../../assets/assets";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  const [stats, setStats] = useState({
    courses: 0,
    students: 0,
    earnings: 0,
    rating: 0,
  });

  useEffect(() => {
    const courses = coursesData.length;

    const students = coursesData.reduce((acc, c) => acc + (c.students || 0), 0);

    const earnings = coursesData.reduce(
      (acc, c) => acc + (c.price || 0) * (c.students || 0),
      0,
    );

    const rating =
      (
        coursesData.reduce((acc, c) => acc + (c.rating || 0), 0) / courses
      ).toFixed(1) || 0;

    setStats({
      courses,
      students,
      earnings,
      rating,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back {user?.firstName} 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Here's what's happening with your courses today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Total Courses</h3>
          <p className="text-3xl font-bold mt-2">{stats.courses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Total Students</h3>
          <p className="text-3xl font-bold mt-2">{stats.students}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Total Earnings</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">
            ${stats.earnings}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Average Rating</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-500">
            ⭐ {stats.rating}
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Your Courses</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coursesData.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={course.image} className="w-full h-40 object-cover" />

              <div className="p-4">
                <h3 className="font-semibold">{course.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {course.students || 0} students
                </p>

                <div className="flex justify-between mt-3 text-sm">
                  <span className="text-yellow-500">⭐ {course.rating}</span>

                  <span className="text-green-600 font-semibold">
                    ${course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-6">Recent Students</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b text-gray-500 text-sm">
              <tr>
                <th className="py-3">Student</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Ahmed Mohamed</td>
                <td>React Masterclass</td>
                <td>Today</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Sara Ali</td>
                <td>JavaScript Basics</td>
                <td>Yesterday</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-3">Omar Khaled</td>
                <td>Node.js Bootcamp</td>
                <td>2 days ago</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

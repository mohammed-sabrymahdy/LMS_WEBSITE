/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { coursesData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const MyEnrollments = () => {
  const [paidCourses, setPaidCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const paid = JSON.parse(localStorage.getItem("paidCourses") || "{}");
    const paidList = coursesData.filter((course) => paid[course.id]);
    setPaidCourses(paidList);
  }, []);

  if (paidCourses.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        You haven't enrolled in any courses yet.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">My Enrollments</h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paidCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <img src={course.image} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="font-bold text-lg mb-2">{course.title}</h2>
              <p className="text-gray-500 mb-3">{course.educator.name}</p>
              <span className="text-green-600 font-semibold">Enrolled ✅</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollments;

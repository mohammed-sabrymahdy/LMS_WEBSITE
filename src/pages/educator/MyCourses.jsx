// src/pages/educator/MyCourses.jsx
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // <-- نضيف useNavigate

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const goToCourseDetails = (id) => {
    navigate(`/course/${id}`); // نروح لصفحة CourseDetails للكورس
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>

      {courses.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          You haven't created any courses yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-bold">{course.title}</h2>
                <p className="text-gray-500 text-sm">
                  Instructor: {course.instructor}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">
                    ${course.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => goToCourseDetails(course.id)}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Watch
                  </button>

                  <button
                    onClick={() => deleteCourse(course.id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;

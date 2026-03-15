/* eslint-disable react-hooks/set-state-in-effect */
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/student/Footer";
import SearchBar from "../../components/student/SearchBar";
import { coursesData } from "../../assets/assets";
import { useEffect, useState } from "react";

const CoursesList = () => {
  const navigate = useNavigate();
  const { input } = useParams();

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const addedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    const formattedCourses = addedCourses.map((course) => ({
      ...course,
      educator: {
        name: course.instructor,
        channelURL: course.videoUrl,
      },
      rating: 5,
      discount: 0,
    }));

    setAllCourses([...coursesData, ...formattedCourses]);
  }, []);

  const filteredCourses = allCourses.filter((course) => {
    if (!input) return true;

    const search = input.toLowerCase();

    return (
      course.title.toLowerCase().includes(search) ||
      course.description.toLowerCase().includes(search) ||
      course.educator.name.toLowerCase().includes(search)
    );
  });

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 px-1 rounded">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
          <p className="mt-2 text-gray-500">
            <button
              onClick={() => navigate("/")}
              className="text-red-600 font-semibold hover:underline"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-black">Courses</span>
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-12">
          <SearchBar data={input} />
        </div>

        {input && (
          <p className="mb-8 text-gray-600">
            Showing results for{" "}
            <span className="font-semibold text-black">"{input}"</span>
          </p>
        )}

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-xl overflow-hidden
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                border border-gray-100"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover
                    group-hover:scale-110
                    transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-black group-hover:text-red-600 transition">
                    {highlightText(course.title, input)}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {highlightText(course.description, input)}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">
                      ${course.price}
                    </span>

                    <button
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="px-4 py-2 text-sm
                      bg-red-600 text-white
                      rounded-lg
                      hover:bg-black
                      transition duration-300"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-black">No Courses Found</h2>
            <p className="text-gray-500 mt-2">
              Try searching for another course.
            </p>

            <button
              onClick={() => navigate("/course-list")}
              className="mt-6 px-6 py-3
              bg-red-600 text-white
              rounded-lg
              hover:bg-black transition"
            >
              Browse All Courses
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CoursesList;

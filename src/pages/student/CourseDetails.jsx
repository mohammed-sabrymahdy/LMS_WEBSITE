// src/pages/student/CourseDetails.jsx
/* eslint-disable react-hooks/purity */
import { useParams, useNavigate } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { coursesData, assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const CourseDetails = () => {
  useDocumentTitle("CodeClass | Course Details");

  const { id } = useParams();
  const navigate = useNavigate();

  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  const [isPaid, setIsPaid] = useState(false);
  const [course, setCourse] = useState(null);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // استرجاع الكورسات المضافة من localStorage
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

    const combinedCourses = [...coursesData, ...formattedCourses];

    setAllCourses(combinedCourses);

    const selectedCourse = combinedCourses.find((c) => c.id == id);
    setCourse(selectedCourse);

    const paidCourses = JSON.parse(localStorage.getItem("paidCourses") || "{}");
    setIsPaid(!!paidCourses[selectedCourse?.id]);
  }, [id]);

  if (!course)
    return <div className="text-center py-20 text-2xl">Course not found</div>;

  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : "";
  };
  const videoId = getYoutubeId(course.educator.channelURL);

  const handleEnroll = () => {
    if (!isLoaded) return;
    if (!user) {
      openSignIn({ redirectUrl: window.location.href });
    } else {
      if (!isPaid) navigate(`/payment/${course.id}`);
    }
  };

  const relatedCourses = allCourses
    .filter((c) => c.id !== course.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HERO */}
      <div className="bg-red-600 py-14 px-4 md:px-20 lg:px-40 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="mt-4 max-w-3xl">{course.description}</p>
          <div className="flex items-center gap-4 mt-6">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">
              ⭐ {course.rating}
            </span>
            <span className="text-white">
              Instructor: {course.educator.name}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-12">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Course Video"
              allowFullScreen
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <div className="bg-white rounded-xl shadow divide-y">
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  Section 1: Introduction
                </h3>
                <p className="text-sm text-gray-500">3 lectures • 15 min</p>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  Section 2: Core Concepts
                </h3>
                <p className="text-sm text-gray-500">5 lectures • 45 min</p>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  Section 3: Practical Project
                </h3>
                <p className="text-sm text-gray-500">4 lectures • 60 min</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Instructor</h2>
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow">
              <img src={assets.me} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">{course.educator.name}</h3>
                <p className="text-gray-500 text-sm">Professional Instructor</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img src={course.image} className="rounded-lg mb-4" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">
                ${course.price}
              </span>
              {course.discount > 0 && (
                <span className="text-gray-400 line-through">
                  ${course.price + course.discount}
                </span>
              )}
            </div>

            <button
              onClick={handleEnroll}
              disabled={isPaid}
              className={`mt-5 w-full py-3 rounded-lg font-semibold transition ${
                isPaid
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-black"
              }`}
            >
              {isPaid ? "Paid ✅" : "Enroll Now"}
            </button>

            <ul className="mt-6 text-sm text-gray-600 space-y-2">
              <li>✔ Lifetime Access</li>
              <li>✔ Certificate</li>
              <li>✔ Mobile Access</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RELATED COURSES */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedCourses.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                navigate(`/course/${c.id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <img src={c.image} className="rounded-t-xl" />
              <div className="p-4">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{c.educator.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;

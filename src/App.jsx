// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

// Student Components
import Navbar from "./components/student/Navbar";
import Loading from "./components/student/Loading";
import PrivacyPolicy from "./components/student/PrivacyPolicy";

// Lazy Student Pages
const Home = lazy(() => import("./pages/student/Home"));
const CoursesList = lazy(() => import("./pages/student/CoursesList"));
const MyEnrollments = lazy(() => import("./pages/student/MyEnrollments"));
const CourseDetails = lazy(() => import("./pages/student/CourseDetails"));
const Aboutus = lazy(() => import("./components/student/Aboutus"));
const Contactus = lazy(() => import("./components/student/Contactus"));
const PaymentWrapper = lazy(
  () => import("./components/student/PaymentWrapper"),
);

// Lazy Educator Pages
const Educator = lazy(() => import("./pages/educator/Educator"));
const Dashboard = lazy(() => import("./pages/educator/Dashboard"));
const AddCourse = lazy(() => import("./pages/educator/AddCourse"));
const MyCourses = lazy(() => import("./pages/educator/MyCourses"));
const StudentEnrolled = lazy(() => import("./pages/educator/StudentsEnrolled"));

const App = () => {
  const location = useLocation();
  const isEducatorRoute = location.pathname.startsWith("/educator");

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Student Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CoursesList />} />
          <Route path="/course-list/:input" element={<CoursesList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Payment route with course id */}
          <Route path="/payment/:id" element={<PaymentWrapper />} />

          {/* Educator Layout */}
          <Route path="/educator" element={<Educator />}>
            <Route index element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="student-enrolled" element={<StudentEnrolled />} />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-3xl font-bold text-red-600">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

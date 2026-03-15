import { Link, useLocation } from "react-router-dom";
import CourseCard from "./CourseCard";
import { coursesData } from "../../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const CoursesSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const displayedCourses = isHomePage ? coursesData.slice(0, 4) : coursesData;

  return (
    <section className="py-14 px-4 md:px-20 lg:px-40">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore our courses
        </h2>

        <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Browse a wide range of courses designed to help you learn new skills,
          improve your career, and grow at your own pace with expert
          instructors.
        </p>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
        >
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>

        {/* View All Button */}
        {isHomePage && (
          <Link
            to="/course-list"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center justify-center mt-10 px-10 py-3 rounded-full border border-red-600 text-red-600 font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            View all courses
          </Link>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;

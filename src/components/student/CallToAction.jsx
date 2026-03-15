import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-red-600 to-red-700 py-24">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-16 w-20 h-20 bg-white/20 rounded-full animate-float" />
        <span className="absolute top-1/3 right-24 w-32 h-32 bg-white/10 rounded-full animate-float-slow" />
        <span className="absolute bottom-24 left-1/4 w-16 h-16 bg-white/25 rounded-full animate-float-fast" />
        <span className="absolute bottom-16 right-1/3 w-24 h-24 bg-white/15 rounded-full animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center text-white">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Start Learning Today & Build Your Future
          </h2>

          {/* Description */}
          <p className=" paragraph mt-6 text-lg  max-w-2xl">
            Join thousands of students who are mastering modern web development
            skills and advancing their careers with our expert-led courses.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/course-list"
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Browse Courses
            </Link>

            <Link
              to="/educator"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition duration-300"
            >
              Become an Educator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

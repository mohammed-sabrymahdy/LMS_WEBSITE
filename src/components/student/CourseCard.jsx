// src/components/student/CourseCard.jsx
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const finalPrice = course.discount
    ? (course.price - (course.price * course.discount) / 100).toFixed(2)
    : course.price;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.3 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {course.discount > 0 && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white shadow-md">
          -{course.discount}%
        </div>
      )}

      <div className="overflow-hidden rounded-t-3xl">
        <motion.img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            {course.title}
          </h3>

          <div className="mb-3 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < course.rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>

          <div className="mb-3 flex items-center gap-2">
            <img src={assets.youtube_icon} alt="YouTube" className="w-5 h-5" />
            <span className="text-sm font-medium text-red-600">
              {course.educator.name}
            </span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-3">
            {course.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            {course.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">
                  {currency} {finalPrice}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {currency} {course.price}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {currency} {course.price}
              </span>
            )}
          </div>

          <button
            onClick={() => navigate(`/course/${course.id}`)}
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-700 hover:scale-110 transition-all duration-300"
          >
            Enroll
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;

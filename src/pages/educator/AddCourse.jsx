// src/pages/educator/AddCourse.jsx
import { useState } from "react";

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    price: "",
    description: "",
    image: "",
    videoUrl: "",
  });

  const [success, setSuccess] = useState(false); // <-- حالة النجاح

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourses = JSON.parse(localStorage.getItem("courses")) || [];

    const newCourse = {
      ...course,
      id: Date.now(),
    };

    const updatedCourses = [...existingCourses, newCourse];
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    setCourse({
      title: "",
      instructor: "",
      price: "",
      description: "",
      image: "",
      videoUrl: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <h1 className="text-3xl font-bold mb-8">Add New Course</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-3xl space-y-6"
      >
        {/* Title */}
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Instructor */}
        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
          placeholder="Instructor Name"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={course.price}
          onChange={handleChange}
          placeholder="Course Price"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          value={course.image}
          onChange={handleChange}
          placeholder="Course Image URL"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Course Description"
          rows="4"
          className="w-full border p-3 rounded-lg"
        />

        {/* YouTube Video */}
        <input
          type="text"
          name="videoUrl"
          value={course.videoUrl}
          onChange={handleChange}
          placeholder="YouTube Video URL"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Publish Course
        </button>
      </form>

      {/* Toast Notification */}
      {success && (
        <div className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slideIn">
          🎉 Course added successfully!
        </div>
      )}

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AddCourse;

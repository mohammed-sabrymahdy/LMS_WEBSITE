// Aboutus.jsx
import { assets } from "../../assets/assets";

const Aboutus = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Banner */}
      <section className="bg-red-200 text-white py-20 flex flex-col items-center justify-center gap-4">
        {assets.Logo && (
          <img
            src={assets.Logo}
            alt="CodeClass Academy Logo"
            className="w-32 h-32 object-contain"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-bold">CodeClass Academy</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Empowering learners worldwide with top-quality coding courses,
          resources, and professional guidance.
        </p>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto py-16 px-5 md:px-10">
        <h2 className="text-3xl font-semibold text-red-600 mb-6">Our Story</h2>
        <p className="text-gray-700 text-lg mb-4">
          CodeClass Academy was founded to make coding education accessible,
          practical, and impactful. We connect learners with industry experts
          and provide hands-on courses that help them succeed in the tech world.
        </p>
        <p className="text-gray-700 text-lg">
          Our dedication to quality, innovation, and student success drives
          everything we do. Knowledge is power, and we make sure every student
          gets it.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To provide high-quality, accessible coding education that empowers
              learners to excel in their careers and projects.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To become the leading online coding academy recognized for
              excellence, innovation, and transformative impact on learners
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto py-16 px-5 md:px-10">
        <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={assets.me}
              alt="Team Member"
              className="mx-auto w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold">Mohammed Sabry</h4>
            <p className="text-gray-700">Founder & CEO</p>
          </div>
          {/* يمكنك إضافة أعضاء الفريق الآخرين بنفس الطريقة */}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;

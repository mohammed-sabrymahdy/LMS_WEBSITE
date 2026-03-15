// src/pages/student/Home.jsx
import { testimonials } from "../../assets/assets";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import Hero from "../../components/student/Hero";
import TestimonialsSection from "../../components/student/TestmonialsSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection testimonials={testimonials} />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default Home;

// src/components/student/Hero.jsx
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Logo Bounce */}
        <img src={assets.Logo} alt="Logo" className="logo-bounce" />

        {/* Main Heading */}
        <h1>Learn Any Skill Easily</h1>

        {/* Subheading */}
        <p>
          Search, learn, and improve your skills with thousands of online
          courses.
        </p>

        {/* Search Bar */}
        <SearchBar />
        {/* Trusted by learners */}
      </div>
    </section>
  );
};

export default Hero;

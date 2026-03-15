// src/components/educator/Footer.jsx
import { assets } from "../../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const educatorLinks = [
    { name: "Dashboard", href: "/educator" },
    { name: "My Courses", href: "/educator/my-courses" },
    { name: "Add Course", href: "/educator/add-course" },
    { name: "Students Enrolled", href: "/educator/student-enrolled" },
  ];

  return (
    <footer className="bg-black text-white mt-10 mb-0">
      <div className="max-w-6xl mx-auto py-14 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <motion.img
            src={assets.Logo}
            alt="CodeClass Academy Logo"
            className="w-36 h-36 md:w-44 md:h-44 object-contain"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -12, 0] }}
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 20px rgba(220,38,38,0.6))" }}
          />
        </div>

        {/* Educator Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-red-600 mb-4">Educator</h3>
          <ul className="space-y-2">
            {educatorLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="text-white hover:text-red-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-red-600 mb-4">Support</h3>
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={assets.callcenter}
              alt="Customer Support"
              className="w-20 h-20 object-contain rounded-full shadow-lg"
            />
            <ul className="space-y-2 text-gray-300 text-sm text-center md:text-left">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@codeclass.com"
                  className="hover:text-red-600 transition"
                >
                  support@codeclass.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+201234567890"
                  className="hover:text-red-600 transition"
                >
                  +20 123 456 7890
                </a>
              </li>
              <li>
                <Link
                  to="/educator/help"
                  className="hover:text-red-600 transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <span className="block mt-2 text-gray-400 text-xs">
                  We're here 24/7 to assist you with any questions about your
                  courses or students.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
        Copyright © {new Date().getFullYear()} Mohammed Sabry. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;

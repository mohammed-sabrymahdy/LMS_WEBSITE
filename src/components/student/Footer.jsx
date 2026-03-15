// Footer.jsx
import { assets } from "../../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
    { name: "Privacy policy", href: "/privacy" },
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
            animate={{
              y: [0, -12, 0],
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(220,38,38,0.6))",
            }}
          />
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-red-600 mb-4">Student</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-white hover:text-red-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-red-600 mb-4">CodeClass Academy</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            CodeClass Academy is a leading platform for online coding education,
            providing high-quality courses to help learners and professionals
            achieve their tech goals efficiently.
          </p>
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

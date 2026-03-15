/* eslint-disable no-unused-vars */
import { memo, useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton, useUser, useClerk } from "@clerk/clerk-react";

const EducatorNavbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSignIn = useCallback(() => openSignIn(), [openSignIn]);

  return (
    <nav className="w-full backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-md transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img
              src={assets.Logo}
              alt="Logo"
              className="w-36 sm:w-44 lg:w-52 cursor-pointer"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {user && (
              <>
                <Link
                  to="/educator"
                  className={`font-semibold ${
                    pathname === "/educator" ? "text-red-600" : "text-gray-800"
                  } hover:text-red-600 transition`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/educator/my-courses"
                  className={`font-semibold ${
                    pathname.startsWith("/educator/my-courses")
                      ? "text-red-600"
                      : "text-gray-800"
                  } hover:text-red-600 transition`}
                >
                  My Courses
                </Link>
                <Link
                  to="/educator/add-course"
                  className={`font-semibold ${
                    pathname === "/educator/add-course"
                      ? "text-red-600"
                      : "text-gray-800"
                  } hover:text-red-600 transition`}
                >
                  Add Course
                </Link>
                <Link
                  to="/educator/student-enrolled"
                  className={`font-semibold ${
                    pathname.startsWith("/educator/student-enrolled")
                      ? "text-red-600"
                      : "text-gray-800"
                  } hover:text-red-600 transition`}
                >
                  Students
                </Link>
              </>
            )}

            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={handleSignIn}
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
              >
                Sign In / Sign Up
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button onClick={handleSignIn}>
                <img src={assets.userIcon} alt="user" className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-800"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col">
          {user && (
            <>
              <Link
                to="/educator"
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/educator/my-courses"
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                My Courses
              </Link>
              <Link
                to="/educator/add-course"
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Add Course
              </Link>
              <Link
                to="/educator/student-enrolled"
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Students
              </Link>
            </>
          )}

          {!user && (
            <button
              onClick={handleSignIn}
              className="block w-[calc(100%-2rem)] mx-4 my-2 px-4 py-3 bg-red-600 text-white rounded-md"
            >
              Sign In / Sign Up
            </button>
          )}
        </div>
      )}
    </nav>
  );
});

export default EducatorNavbar;

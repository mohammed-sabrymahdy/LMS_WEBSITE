import { memo, useCallback, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCourseListPage = pathname.startsWith("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const goEducator = useCallback(() => {
    navigate("/educator");
    setIsOpen(false);
  }, [navigate]);

  const goEnrollments = useCallback(() => {
    navigate("/my-enrollments");
    setIsOpen(false);
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const signIn = useCallback(() => {
    openSignIn();
    setIsOpen(false);
  }, [openSignIn]);

  return (
    <nav
      className={`w-full backdrop-blur-md bg-white/70 border-b border-gray-200 transition-shadow ${
        isCourseListPage ? "shadow-lg" : "shadow-md"
      }`}
    >
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

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {user && (
              <>
                <button
                  onClick={goEducator}
                  className="font-semibold text-gray-800 hover:text-red-600 transition"
                >
                  Become an Educator
                </button>

                <button
                  onClick={goEnrollments}
                  className="font-semibold text-gray-800 hover:text-red-600 transition"
                >
                  My Enrollments
                </button>
              </>
            )}

            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={signIn}
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
              >
                <img src={assets.userIcon} alt="user" className="w-5 h-5" />
                Sign In / Sign Up
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button onClick={signIn}>
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
        <div className="md:hidden bg-white shadow-lg">
          {user && (
            <>
              <button
                onClick={goEducator}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Become an Educator
              </button>
              <button
                onClick={goEnrollments}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                My Enrollments
              </button>
            </>
          )}

          {!user && (
            <button
              onClick={signIn}
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

export default Navbar;

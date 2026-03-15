import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../assets/assets";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState(data || "");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef();

  // ===== Highlight Text =====
  const highlightMatch = (text, keyword) => {
    if (!keyword) return text;

    const parts = text.split(new RegExp(`(${keyword})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 px-1 rounded">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  // ===== Live Search with Debounce =====
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!input.trim()) {
        setSuggestions([]);
        navigate("");
        return;
      }

      const search = input.toLowerCase();

      const results = coursesData.filter((course) =>
        course.title.toLowerCase().includes(search),
      );

      setSuggestions(results.slice(0, 6));
      setActiveIndex(-1);
    }, 250);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  // ===== Keyboard Navigation =====
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        navigate(`/course-list/${suggestions[activeIndex].title}`);
      } else if (input.trim()) {
        navigate(`/course-list/${input}`);
      }

      setSuggestions([]);
    }

    if (e.key === "Escape") {
      setSuggestions([]);
      inputRef.current.blur();
    }
  };

  // ===== Select Suggestion =====
  const selectCourse = (title) => {
    navigate(`/course-list/${title}`);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center h-12 bg-white border rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-red-500">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search courses..."
          className="flex-1 px-4 outline-none"
        />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && input && (
        <div className="absolute w-full bg-white border rounded-lg mt-2 shadow-xl z-50 overflow-hidden">
          {suggestions.map((course, index) => (
            <div
              key={course.id}
              onClick={() => selectCourse(course.title)}
              className={`px-4 py-3 cursor-pointer flex items-center gap-3 transition
              
              ${
                index === activeIndex
                  ? "bg-red-50 text-red-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={course.image}
                className="w-10 h-10 object-cover rounded"
              />

              <div className="text-sm font-medium">
                {highlightMatch(course.title, input)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { coursesData } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(false);

  const calculateRating = useCallback((course) => {
    if (!course?.courseRatings?.length) return 0;
    const total = course.courseRatings.reduce((sum, r) => sum + r.rating, 0);
    return Math.round((total / course.courseRatings.length) * 10) / 10;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAllCourses(coursesData);
  }, []);

  const value = useMemo(
    () => ({
      currency,
      allCourses,
      calculateRating,
      isEducator,
      setIsEducator,
    }),
    [currency, allCourses, calculateRating, isEducator],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ==============================
// Images Imports
// ==============================

// General Icons
import Logo from "./Logo.png";
import searchIcon from "./search_icon.svg";
import crossIcon from "./cross_icon.svg";
import userIcon from "./user_icon.svg";
import me from "./me.jpg";
import callcenter from "./callcenter.png";

// Company Logos
import microsoftLogo from "./microsoft_logo.svg";
import walmartLogo from "./walmart_logo.svg";
import accentureLogo from "./accenture_logo.svg";
import adobeLogo from "./adobe_logo.svg";
import paypalLogo from "./paypal_logo.svg";

// Course Images
import htmlCourseImg from "./HTMLCourse.png";
import javaScriptCourseImg from "./JavaScriptCourse.png";
import reactTestingImg from "./reactTesting.png";
import cssCourseImg from "./CSSCourse.png";
import youtube_icon from "./youtube_icon.png";
import NextjsCourse from "./NextjsCourse.png";
import NestjsCourse from "./NestjsCourse.png";
import SqlCourse from "./SqlCourse.png";
import NetworkingCourse from "./NetworkingCourse.png";

// ==============================
// Assets Object
// ==============================

export const assets = {
  Logo,
  searchIcon,
  crossIcon,
  userIcon,
  youtube_icon,
  me,
  microsoftLogo,
  walmartLogo,
  accentureLogo,
  adobeLogo,
  paypalLogo,
  NextjsCourse,
  htmlCourseImg,
  javaScriptCourseImg,
  reactTestingImg,
  cssCourseImg,
  NestjsCourse,
  SqlCourse,
  NetworkingCourse,
  callcenter,
};

// ==============================
// Companies Logos (Home Page)
// ==============================

export const companies = [
  assets.microsoftLogo,
  assets.walmartLogo,
  assets.accentureLogo,
  assets.adobeLogo,
  assets.paypalLogo,
];

// ==============================
// Courses Data
// ==============================

export const coursesData = [
  {
    id: 1,
    title: "HTML Course",
    slug: "html-course",
    description:
      "Learn modern frontend development using HTML, CSS, and best practices.",
    price: 49,
    discount: 20,
    rating: 4,
    image: assets.htmlCourseImg,
    educator: {
      name: "freeCodeCamp",
      channelURL: "https://youtu.be/kUMe1FH4CHE",
    },
  },
  {
    id: 2,
    title: "JavaScript Course",
    slug: "javascript-course",
    description:
      "Master JavaScript fundamentals and advanced concepts for modern web development.",
    price: 49,
    discount: 0,
    rating: 5,
    image: assets.javaScriptCourseImg,
    educator: {
      name: "SuperSimpleDev",
      channelURL: "https://youtu.be/EerdGm-ehJQ",
    },
  },
  {
    id: 3,
    title: "React Testing",
    slug: "react-testing-course",
    description:
      "Learn how to test your React applications with modern testing libraries.",
    price: 49,
    discount: 10,
    rating: 3,
    image: assets.reactTestingImg,
    educator: {
      name: "Programming with Mosh",
      channelURL: "https://youtu.be/8Xwq35cPwYg",
    },
  },
  {
    id: 4,
    title: "CSS Course",
    slug: "css-course",
    description:
      "Enhance your web designs with advanced CSS techniques and responsive layouts.",
    price: 49,
    discount: 15,
    rating: 4,
    image: assets.cssCourseImg,
    educator: {
      name: "freeCodeCamp",
      channelURL: "https://youtu.be/1Rs2ND1ryYc",
    },
  },
  {
    id: 5,
    title: "Next.js Course",
    slug: "nextjs-course",
    description:
      "Learn how to build fast and scalable web applications with Next.js.",
    price: 69,
    discount: 25,
    rating: 5,
    image: assets.NextjsCourse,
    educator: {
      name: "Tarmeez Academy",
      channelURL: "https://youtu.be/_t4c-vxalp4",
    },
  },
  {
    id: 6,
    title: "Nest.js Course",
    slug: "nestjs-course",
    description:
      "Master backend development with Nest.js, a powerful Node.js framework.",
    price: 70,
    discount: 30,
    rating: 4,
    image: assets.NestjsCourse,
    educator: {
      name: "Index Academy",
      channelURL: "https://youtu.be/UiAKv84bsY4",
    },
  },
  {
    id: 7,
    title: "SQL Course",
    slug: "sql-course",
    description:
      "Learn SQL from beginner to advanced and master database queries and data analysis.",
    price: 60,
    discount: 15,
    rating: 5,
    image: assets.SqlCourse,
    educator: {
      name: "Moataz Billah Darwish",

      channelURL: "https://youtu.be/UFsTJ1zanXU",
    },
  },
  {
    id: 8,
    title: "Networking Fundamentals",
    slug: "networking-course",
    description:
      "Learn networking basics including IP, protocols, routers, and network architecture.",
    price: 50,
    discount: 20,
    rating: 4,
    image: assets.NetworkingCourse,
    educator: {
      name: "freecode",
      channelURL: "https://youtu.be/fQbBPa0ADvs",
    },
  },
];

// ==============================
// Testimonials
// ==============================

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comment:
      "The courses here completely changed the way I write code. Clear explanations, real projects, and amazing support.",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    role: "UI / UX Designer",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    comment:
      "Very well-structured content and professional instructors. I really loved the practical examples.",
  },
  {
    id: 3,
    name: "Omar Ali",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    comment:
      "One of the best learning platforms I've ever used. The experience feels premium and smooth.",
  },
];

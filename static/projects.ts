import { StaticImageData } from "next/image";
import webAcademyCover from "../public/assets/projects/web-academy/landing-page.png";
import watchedThisCover from "../public/assets/projects/watched-this/landing-page.png";
import neusoftCloudFactoryCover from "../public/assets/projects/neusoft-cloud-factory/landing-page.png";
import favoritePlacesCover from "../public/assets/projects/favorite-places/landing-page.png";
import expenseTrackerCover from "../public/assets/projects/expense-tracker/landing-page.png";
import taskOrganizerCover from "../public/assets/projects/task-organizer/landing-page.png";
import pennyJuiceCover from "../public/assets/projects/penny-juice/landing-page.png";

export type Project = {
  id: string;
  title: string;
  coverImage: StaticImageData;
  techStack: string[];
  description: string;
  summary: string;
  gitHubUrl?: string;
  projectUrl?: string;
};
export const projects: Project[] = [
  {
    id: "p1",
    title: "WebAcademy: E-Learning Platform",
    coverImage: webAcademyCover,
    techStack: [
      "ReactJS+TS",
      "Docker",
      "Spring Cloud",
      "Redis",
      "MySQL",
      "Spring Data JPA",
      "Material UI",
      "TailwindCSS",
      "ReactQuery",
      "Alibaba Nacos",
      "Alibaba Sentinel",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary: "An E-learning platform similar to Udemy",
    gitHubUrl: "https://github.com/its-Danial/webacademy",
  },
  {
    id: "p2",
    title: "WatchedThis: Movie/Tv Show Tracker",
    coverImage: watchedThisCover,
    techStack: ["NextJS+TS", "OAuth", "MongoDB", "TMDB API", "Framer Motion"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "A Website to search popular and trending movies and track when new episodes are released",
    gitHubUrl: "https://github.com/its-Danial/watched-this",
    projectUrl: "https://watched-this.vercel.app",
  },
  {
    id: "p3",
    title: "Favorite Traveled Place",
    coverImage: favoritePlacesCover,
    techStack: [
      "React Native TS",
      "Google Location API",
      "SQLlite",
      "Native Camera",
      "Google+Apple Maps",
      "Geoapify API",
      "React Navigation",
      "TailwindCSS",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gitHubUrl: "https://github.com/its-Danial/react-native-favorite-place",
  },

  {
    id: "p4",
    title: "Neusoft Cloud Factory",
    coverImage: neusoftCloudFactoryCover,
    techStack: ["React JS", "Figma", "Material UI", "Recharts"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gitHubUrl: "https://github.com/its-Danial/neusoft-cloud-factory",
  },
  {
    id: "p5",
    title: "Shared Expense Tracker",
    coverImage: expenseTrackerCover,
    techStack: [
      "React Native TS",
      "SQLlite",
      "React Navigation",
      "Expo",
      "TailwindCSS",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gitHubUrl:
      "https://github.com/its-Danial/react-native-roomate-expense-tracker",
  },
  {
    id: "p6",
    title: "Penny Juice Website Redesign",
    coverImage: pennyJuiceCover,
    techStack: ["React JS+TS", "NextJS", "TailwindCSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gitHubUrl: "https://github.com/its-Danial/penny-juice-redesign",
    projectUrl: "https://penny-juice-redesign.vercel.app/",
  },
  {
    id: "p7",
    title: "Task Organizer",
    coverImage: taskOrganizerCover,
    techStack: ["EJS", "NodeJS", "MongoDB", "Bootstrap", "Heroku"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    projectUrl: "https://murmuring-mountain-35046.herokuapp.com/",
  },
];

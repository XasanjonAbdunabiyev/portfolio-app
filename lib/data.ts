import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/portfolio-images/wikitsull-website.png";
import rmtdevImg from "@/public/portfolio-images/youtube-website.png";
import wordanalyticsImg from "@/public/portfolio-images/scholl.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Self study",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;



export const projectsData = [
  {
    title: "Wiki Tsull UZ",
    description:
      "WikiTsull was our first project and we worked as a team on the project's dashboard. For more information, go to the following link https://www.wikitsuull.uz/uz/maqolalar",
    tags: ["React", "Typescript", "React Query"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Youtube Clone",
    description:
      "I made a clone version of Youtube clone website as much as possible. This project has several functional parts like google  registration, all crud actions, SEO optimize etc.",
    tags: ["React", "TypeScript", "Tailwind", "Chakra-ui", "Firebase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "26th School Profile",
    description:
      "The 26th general school under the Ministry of Public Education of Uzbekistan was founded in 1984 Our school can meet modern and quality education standards with modern equipments to get enough knowledge",
    tags: ["React", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Zustand",
  "Antd Design",
  "Figma",
  "Animete CSS",
  "Firebase",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;

"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  Code2,
  GraduationCap,
  HeartHandshake,
  Layers3,
  LibraryBig,
  School,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const storyCards = [
  {
    title: "Programming journey",
    Icon: BookOpenText,
    text: "I started by learning how websites are structured with HTML, CSS, and JavaScript, then moved into React and Next.js. As I built more projects, I became interested in the backend too, especially APIs, authentication, database operations, and how a complete application works from UI to server.",
  },
  {
    title: "Work I enjoy",
    Icon: Layers3,
    text: "I enjoy building full stack features where the frontend and backend connect clearly: clean pages, reusable components, Express APIs, MongoDB data models, protected routes, JWT-based flows, and user-friendly responsive interfaces.",
  },
  {
    title: "How I think",
    Icon: HeartHandshake,
    text: "My CSE background helps me think beyond only UI. I like understanding logic, structured programming, data structures, algorithms, and object-oriented concepts because they make my code more organized and easier to improve.",
  },
];

const educationItems = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    place: "Metropolitan University, currently studying, 5th semester",
    Icon: GraduationCap,
  },
  {
    title: "Higher Secondary Certificate, Science",
    place: "Govt. Agragami Girls High School and College, 2023",
    Icon: School,
  },
  {
    title: "Secondary School Certificate, Science",
    place: "Govt. Agragami Girls High School and College, 2021",
    Icon: School,
  },
];

const learningPlatforms = ["Coursera", "Udemy", "Programming Hero", "Phitron"];

const personalityNotes = [
  { label: "Curious learner", Icon: Sparkles },
  { label: "CSE mindset", Icon: Code2 },
  { label: "Consistent practice", Icon: LibraryBig },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="sectionBlock aboutSection"
      aria-labelledby="about-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={staggerGroup}
    >
      <motion.div className="sectionIntro" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="eyebrow">About Me</p>
        <h2 id="about-title">A CSE student building full stack web applications with care.</h2>
        <p>
          I am Bushra, a MENN stack developer and Computer Science and Engineering student. I enjoy learning both the visual side of web development and the logic that powers real applications.
        </p>
      </motion.div>

      <motion.div className="aboutLayout" variants={staggerGroup}>
        <motion.div className="aboutPanel aboutMainCopy" variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
          <p>
            My programming journey started with curiosity about how websites are made and how code can turn an idea into something interactive. I began with frontend fundamentals, then grew into React and Next.js because I wanted to build smoother, more structured user experiences.
          </p>
          <p>
            Over time, I became interested in backend development too. I now work with Node.js, Express.js, MongoDB, authentication, Better Auth, and JWT. I like understanding the full journey of a feature: the interface, the API, the database, the protected user flow, and the final experience on different screen sizes.
          </p>
          <p>
            Alongside web development, I am building my foundation in C, C++, Java, structured programming, data structures and algorithms, and object-oriented programming. Outside of coding, I enjoy calm learning time, exploring good UI designs, and improving my work step by step until it feels clean and meaningful.
          </p>
        </motion.div>

        <motion.div className="aboutSide" variants={staggerGroup}>
          <motion.div className="aboutStatCard" variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
            <span>Current Focus</span>
            <strong>Full Stack Web Apps</strong>
            <p>Next.js interfaces, Express APIs, MongoDB data, auth flows, and strong programming fundamentals.</p>
          </motion.div>

          <motion.div className="personalityGrid" aria-label="Personal strengths" variants={staggerGroup}>
            {personalityNotes.map(({ label, Icon }) => (
              <motion.div className="personalityItem" key={label} variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }}>
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="storyGrid" variants={staggerGroup}>
        {storyCards.map(({ title, text, Icon }) => (
          <motion.article className="storyCard" key={title} variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="storyIcon">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div className="aboutDetailsGrid" variants={staggerGroup}>
        <motion.article className="educationPanel" variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
          <div className="miniSectionHeader">
            <GraduationCap size={20} strokeWidth={1.8} aria-hidden="true" />
            <h3>Education</h3>
          </div>
          <div className="educationList">
            {educationItems.map(({ title, place, Icon }) => (
              <div className="educationItem" key={title}>
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{place}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article className="learningPanel" variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
          <div className="miniSectionHeader">
            <LibraryBig size={20} strokeWidth={1.8} aria-hidden="true" />
            <h3>Learning Platforms</h3>
          </div>
          <div className="learningChips">
            {learningPlatforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}

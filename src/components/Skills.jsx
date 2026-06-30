"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  FileJson,
  GitBranch,
  KeyRound,
  LayoutDashboard,
  MessageCircle,
  Network,
  Package,
  Palette,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const featuredSkills = {
  frontend: [
    { name: "React", type: "Frontend", Icon: Braces },
    { name: "Next.js", type: "Framework", Icon: PanelsTopLeft },
    { name: "Tailwind CSS", type: "Styling", Icon: Palette },
    { name: "Framer Motion", type: "Animation", Icon: Sparkles },
  ],
  backend: [
    { name: "MongoDB", type: "Database", Icon: Database },
    { name: "Express.js", type: "Backend", Icon: ServerCog },
    { name: "Node.js", type: "Runtime", Icon: TerminalSquare },
    { name: "Better Auth", type: "Authentication", Icon: ShieldCheck },
  ],
  soft: [
    { name: "Communication", type: "Collaboration", Icon: MessageCircle },
    { name: "Problem-Solving", type: "Thinking", Icon: Blocks },
    { name: "Teamwork", type: "People", Icon: Users },
    { name: "AI Automation", type: "Currently Learning", Icon: Bot },
  ],
};

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    Icon: LayoutDashboard,
    DetailIcon: Code2,
    title: "Frontend Technologies I Work With",
    description:
      "I build responsive interfaces with React and Next.js, then polish the experience with modern styling systems, animation, and component libraries.",
    groups: [
      { title: "Core Web", items: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"] },
      { title: "Frameworks & Libraries", items: ["React", "Next.js", "Framer Motion"] },
      { title: "UI & Styling", items: ["CSS", "Tailwind CSS", "Hero UI", "DaisyUI"] },
      { title: "Frontend Integration", items: ["RESTful APIs", "JSON", "API Integration"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: ServerCog,
    DetailIcon: ShieldCheck,
    title: "Backend, Database & API Skills",
    description:
      "I work with server-side JavaScript, Express APIs, MongoDB databases, authentication flows, and practical tools for testing and deployment.",
    groups: [
      { title: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "API Design"] },
      { title: "Database", items: ["MongoDB", "Database Design", "CRUD Operations"] },
      { title: "Authentication", items: ["Better Auth", "JWT", "Protected Routes", "User Sessions"] },
      { title: "Testing & API Tools", items: ["Thunder Client", "JSON", "API Integration"] },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    Icon: MessageCircle,
    DetailIcon: Users,
    title: "Professional, Academic & Creative Strengths",
    description:
      "Along with web development, I bring CSE fundamentals, strong learning habits, creative thinking, and communication skills that help me work better in real projects.",
    groups: [
      { title: "Soft Skills", items: ["Communication", "Problem-Solving", "Adaptability", "Teamwork", "Emotional Intelligence"] },
      { title: "Programming Languages", items: ["C", "C++", "JavaScript", "Java"] },
      { title: "Academic Knowledge", items: ["Data Structures", "Algorithms", "Structured Programming", "Object-Oriented Programming"] },
      { title: "DevOps, Tools & Version Control", items: ["Git", "GitHub", "Vercel", "Netlify", "Vite", "npm", "VS Code"] },
      { title: "Creative & Currently Learning", items: ["Painting", "Story Writing", "AI Automation"] },
    ],
  },
];

const toolIconMap = {
  frontend: Network,
  backend: KeyRound,
  soft: Cloud,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const DetailIcon = activeContent.DetailIcon;
  const ToolIcon = toolIconMap[activeContent.id] ?? Wrench;

  return (
    <motion.section
      id="skills"
      className="sectionBlock skillsSection"
      aria-labelledby="skills-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <motion.div className="sectionIntro skillsIntro" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="eyebrow">My Skills</p>
        <h2 id="skills-title">Technologies and strengths I work with.</h2>
        <p>
          A recruiter-friendly overview of my frontend, backend, academic, tool-based, and soft-skill strengths without self-rating percentages.
        </p>
      </motion.div>

      <motion.div className="skillsTabsShell compactSkillsTabs" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}>
        <div className="skillsTabList compactTabList" role="tablist" aria-label="Skill categories">
          {tabs.map(({ id, label, Icon }) => (
            <button
              className={`skillsTabButton ${activeTab === id ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`skills-panel-${id}`}
              id={`skills-tab-${id}`}
              key={id}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <motion.div
          className="skillsTabPanel recruiterSkillPanel"
          id={`skills-panel-${activeContent.id}`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${activeContent.id}`}
          key={activeContent.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <div className="skillsTabCopy compactTabCopy">
            <div className="skillGroupIcon tabPanelIcon">
              <DetailIcon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3>{activeContent.title}</h3>
            <p>{activeContent.description}</p>
          </div>

          <div className="featuredSkillGrid" aria-label={`${activeContent.label} featured skills`}>
            {featuredSkills[activeContent.id].map(({ name, type, Icon }) => (
              <motion.article
                className="featuredSkillCard"
                key={name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="featuredSkillIcon">
                  <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <strong>{name}</strong>
                <span>{type}</span>
              </motion.article>
            ))}
          </div>

          <div className="tabSkillGroups recruiterSkillGroups">
            {activeContent.groups.map((group) => (
              <div className="tabSkillGroup" key={group.title}>
                <div className="miniSkillHeading">
                  <ToolIcon size={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{group.title}</span>
                </div>
                <motion.div
                  className="tabSkillCloud"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
                >
                  {group.items.map((skill) => (
                    <motion.span
                      className="tabSkillPill"
                      key={skill}
                      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

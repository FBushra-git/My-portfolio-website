"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Code2,
  Database,
  KeyRound,
  LayoutDashboard,
  MessageCircle,
  Paintbrush,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    Icon: LayoutDashboard,
    DetailIcon: Code2,
    title: "Frontend Development",
    description:
      "I build responsive, clean, and user-friendly interfaces with reusable components and modern frontend tools. I care about spacing, readability, responsiveness, and smooth user flows.",
    groups: [
      { title: "Core", items: ["HTML", "CSS", "JavaScript"] },
      { title: "Frameworks", items: ["React", "Next.js"] },
      { title: "UI Focus", items: ["Responsive Layouts", "Reusable Components", "Clean Visual UI", "Interactive User Flows"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: ServerCog,
    DetailIcon: ShieldCheck,
    title: "Backend, Database & Authentication",
    description:
      "I work with server logic, API routes, MongoDB data flows, and authentication so applications can handle real user actions safely and clearly.",
    groups: [
      { title: "Runtime & Server", items: ["Node.js", "Express.js", "REST APIs"] },
      { title: "Database", items: ["MongoDB", "Data Modeling", "CRUD Operations"] },
      { title: "Authentication", items: ["JWT", "Better Auth", "Protected Routes", "User Sessions"] },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    Icon: MessageCircle,
    DetailIcon: Users,
    title: "Soft Skills, Academic Base & Creative Strengths",
    description:
      "Along with technical skills, I bring communication, consistency, academic CS knowledge, and creative thinking from painting and story writing.",
    groups: [
      { title: "Working Style", items: ["Communication", "Problem Solving", "Self-learning", "Attention to Detail", "Time Management"] },
      { title: "Academic Knowledge", items: ["C", "C++", "Java (Learning)", "Structured Programming", "Data Structures", "Algorithms", "OOP"] },
      { title: "Creative Skills", items: ["Painting", "Story Writing", "Creative Thinking", "Visual Balance", "Presentation Sense"] },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const DetailIcon = activeContent.DetailIcon;

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
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">A practical skill set with technical depth and creative range.</h2>
        <p>
          Explore my skills by category: frontend, backend, and soft skills with academic and creative strengths included where they belong.
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
          className="skillsTabPanel compactTabPanel"
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

          <div className="tabSkillGroups">
            {activeContent.groups.map((group) => (
              <div className="tabSkillGroup" key={group.title}>
                <div className="miniSkillHeading">
                  <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{group.title}</span>
                </div>
                <motion.div
                  className="tabSkillCloud"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
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

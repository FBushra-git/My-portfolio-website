"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/projects/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="sectionBlock projectsSection"
      aria-labelledby="projects-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      <motion.div className="sectionIntro" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">Selected projects from my web development journey.</h2>
        <p>
          A collection of frontend and full stack practice projects where I worked with responsive layouts, API integration, routing, authentication concepts, and deployment.
        </p>
      </motion.div>

      <motion.div className="projectGrid" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        {projects.map((project, index) => (
          <motion.article
            className="projectCard motionCard"
            key={project.slug}
            variants={fadeUp}
            transition={{ duration: 0.62, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="projectPreview animatedPreview" aria-label={`${project.name} preview`}>
              <span>0{index + 1}</span>
              <strong>{project.imageLabel}</strong>
            </div>
            <div className="projectCardBody">
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
              <div className="projectStackPreview">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="projectActions">
                <Link className="detailsButton magneticButton" href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
                <a className="repoButton magneticButton" href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
                  <Code2 size={17} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

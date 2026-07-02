"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/app/projects/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProjects = useMemo(() => {
    return Array.from({ length: Math.min(3, projects.length) }, (_, offset) => {
      const projectIndex = (startIndex + offset) % projects.length;
      return { project: projects[projectIndex], index: projectIndex };
    });
  }, [startIndex]);

  const showPrevious = () => {
    setStartIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % projects.length);
  };

  return (
    <section id="projects" className="sectionBlock projectsSection" aria-labelledby="projects-title">
      <div className="projectsHeaderRow">
        <div className="sectionIntro">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Selected projects from my web development journey.</h2>
          <p>
            Three highlighted projects are shown here. Visit the full projects page to explore everything with details, live previews, and client-side repositories.
          </p>
        </div>

        <div className="projectHeaderActions" aria-label="Project slider controls">
          <button className="sliderButton" type="button" onClick={showPrevious} aria-label="Previous projects">
            <ChevronLeft size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <button className="sliderButton" type="button" onClick={showNext} aria-label="Next projects">
            <ChevronRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <Link className="viewAllButton" href="/projects">
            View All
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="projectSliderGrid">
        {visibleProjects.map(({ project, index }) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

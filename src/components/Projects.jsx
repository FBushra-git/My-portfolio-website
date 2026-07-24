import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/projects/data";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section id="projects" className="sectionBlock projectsSection" aria-labelledby="projects-title">
      <div className="projectsHeaderRow">
        <div className="sectionIntro">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Selected projects from my web development journey.</h2>
          <p>
            SkillForge AI, CrowdSpark, Promptrix, and PetNest are highlighted here. Visit the full projects page for the complete collection, live previews, screenshots, and repositories.
          </p>
        </div>

        <div className="projectHeaderActions">
          <Link className="viewAllButton" href="/projects">
            View All
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="projectSliderGrid">
        {featuredProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
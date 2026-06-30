import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function Projects() {
  return (
    <section id="projects" className="sectionBlock projectsSection" aria-labelledby="projects-title">
      <div className="sectionIntro">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">Selected projects from my web development journey.</h2>
        <p>
          A collection of frontend and full stack practice projects where I worked with responsive layouts, API integration, routing, authentication concepts, and deployment.
        </p>
      </div>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <article className="projectCard" key={project.slug}>
            <div className="projectPreview" aria-label={`${project.name} preview`}>
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
                <Link className="detailsButton" href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
                <a className="repoButton" href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
                  <Code2 size={17} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


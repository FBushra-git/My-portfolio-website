import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project, index, className = "" }) {
  return (
    <article className={`projectCard ${className}`}>
      <div className="projectPreview" aria-label={`${project.name} preview`}>
        <span>{String(index + 1).padStart(2, "0")}</span>
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
          {project.liveLink !== "#" && (
            <a className="repoButton" href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`${project.name} live preview`}>
              <ExternalLink size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
          )}
          <a className="repoButton" href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
            <Code2 size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

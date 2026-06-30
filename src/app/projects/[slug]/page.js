import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  return {
    title: project ? `${project.name} | Bushra Portfolio` : "Project | Bushra Portfolio",
    description: project?.shortDescription ?? "Project details from Bushra's portfolio.",
  };
}

export default function ProjectDetails({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="projectDetailsPage">
      <nav className="projectDetailsNav">
        <Link className="brand" href="/">Bushra</Link>
        <Link className="backLink" href="/#projects">
          <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
          Projects
        </Link>
      </nav>

      <section className="sectionBlock projectDetailsHero">
        <div className="projectDetailsPreview">
          <span>{project.imageLabel}</span>
          <strong>{project.name}</strong>
        </div>
        <div className="projectDetailsCopy">
          <p className="eyebrow">Project Details</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className="projectDetailsActions">
            {project.liveLink !== "#" && (
              <a className="primaryBtn" href={project.liveLink} target="_blank" rel="noreferrer">
                <ExternalLink size={18} strokeWidth={1.8} aria-hidden="true" />
                Live Project
              </a>
            )}
            <a className="ghostBtn" href={project.githubLink} target="_blank" rel="noreferrer">
              <Code2 size={18} strokeWidth={1.8} aria-hidden="true" />
              GitHub Client
            </a>
          </div>
        </div>
      </section>

      <section className="sectionBlock projectInfoGrid">
        <article className="projectInfoCard stackCard">
          <h2>Main Technology Stack</h2>
          <div className="projectStackList">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </article>
        <article className="projectInfoCard">
          <h2>Challenges Faced</h2>
          <p>{project.challenges}</p>
        </article>
        <article className="projectInfoCard">
          <h2>Future Plans</h2>
          <p>{project.improvements}</p>
        </article>
      </section>
    </main>
  );
}


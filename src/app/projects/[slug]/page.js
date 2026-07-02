import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

function getProject(slug) {
  return projects.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.name} | Bushra Portfolio` : "Project | Bushra Portfolio",
    description: project?.shortDescription ?? "Project details from Bushra's portfolio.",
  };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  const screenshots = project?.screenshots ?? [];

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

      <section className="sectionBlock projectDetailsHero" aria-labelledby="project-title">
        <div className="projectDetailsPreview">
          <span>{project.imageLabel}</span>
          <strong>{project.name}</strong>
        </div>
        <div className="projectDetailsCopy">
          <p className="eyebrow">Project Overview</p>
          <h1 id="project-title">{project.name}</h1>
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
              Repository
            </a>
          </div>
        </div>
      </section>

      <section className="sectionBlock projectScreenshotSection" aria-labelledby="project-screenshot-title">
        <div className="sectionIntro">
          <p className="eyebrow">Website Screenshots</p>
          <h2 id="project-screenshot-title">Screens from the project interface.</h2>
          <p>The long preview shows the full page, and the gallery highlights important screens from the website.</p>
        </div>

        <div className="projectScreenshotFrame projectLongScreenshotFrame">
          {project.screenshot ? (
            <Image src={project.screenshot} alt={`${project.name} long website screenshot`} width={1440} height={4200} />
          ) : (
            <div className="projectScreenshotPlaceholder">
              <span>{project.name}</span>
              <strong>Long preview coming soon</strong>
            </div>
          )}
        </div>

        {screenshots.length > 0 && (
          <div className="projectScreenshotGrid" aria-label={`${project.name} screenshot gallery`}>
            {screenshots.map((screenshot, index) => (
              <figure className="projectScreenshotCard" key={screenshot}>
                <Image src={screenshot} alt={`${project.name} screenshot ${index + 1}`} width={900} height={620} />
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {project.liveLink !== "#" && (
        <section className="sectionBlock livePreviewSection" aria-labelledby="project-preview-title">
          <div className="sectionIntro">
            <p className="eyebrow">Live Preview</p>
            <h2 id="project-preview-title">Explore the project without leaving the portfolio.</h2>
            <p>If the preview does not load because of browser security settings, use the Live Project button above.</p>
          </div>
          <div className="livePreviewFrame">
            <iframe src={project.liveLink} title={`${project.name} live preview`} loading="lazy" />
          </div>
        </section>
      )}

      <section className="sectionBlock projectInfoSection" aria-labelledby="project-info-title">
        <div className="sectionIntro">
          <p className="eyebrow">Project Notes</p>
          <h2 id="project-info-title">Purpose, features, stack, and future plans.</h2>
        </div>

        {(project.purpose || project.features?.length > 0) && (
          <div className="projectDetailGrid">
            {project.purpose && (
              <article className="projectInfoCard projectWideCard">
                <h2>Purpose</h2>
                <p>{project.purpose}</p>
                {project.purposePoints?.length > 0 && (
                  <ul className="projectBulletList">
                    {project.purposePoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            )}

            {project.features?.length > 0 && (
              <article className="projectInfoCard projectWideCard">
                <h2>Key Features</h2>
                <ul className="projectBulletList featureList">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        )}

        <div className="projectInfoGrid">
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
        </div>
      </section>
    </main>
  );
}

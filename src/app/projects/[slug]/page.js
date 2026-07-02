import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import ProjectLivePreview from "@/components/ProjectLivePreview";
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

  if (!project) {
    notFound();
  }

  const screenshots = project.screenshots ?? [];

  return (
    <main className="projectDetailsPage">
      <nav className="projectDetailsNav">
        <Link className="brand" href="/">Bushra</Link>
        <div className="projectNavActions">
          <Link className="backLink" href="/#projects">
            <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
            Projects
          </Link>
        </div>
      </nav>

      <section className="projectProductDetail" aria-labelledby="project-title">
        <div className="projectProductMedia">
          <div className="projectProductPreview interactiveProjectPreview">
            {project.liveLink !== "#" ? (
              <ProjectLivePreview projectName={project.name} liveLink={project.liveLink} />
            ) : project.screenshot ? (
              <Image src={project.screenshot} alt={`${project.name} website preview`} width={1440} height={4200} priority />
            ) : (
              <div className="projectScreenshotPlaceholder">
                <span>{project.imageLabel}</span>
                <strong>Preview coming soon</strong>
              </div>
            )}
          </div>

          {screenshots.length > 0 && (
            <div className="projectProductThumbs" aria-label={`${project.name} screenshots`}>
              {screenshots.map((screenshot, index) => (
                <div className="projectProductThumb" key={screenshot}>
                  <Image src={screenshot} alt={`${project.name} screenshot ${index + 1}`} width={240} height={170} />
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="projectProductInfo">
          <p className="projectBreadcrumb">Home / Projects / {project.name}</p>
          <div className="projectTitleLine">
            <div>
              <p className="eyebrow">{project.imageLabel}</p>
              <h1 id="project-title">{project.name}</h1>
            </div>
            {project.liveLink !== "#" && <span>Live</span>}
          </div>

          <p className="projectProductDescription">{project.description}</p>

          <div className="projectQuickFacts">
            <span>Role</span>
            <strong>Fullstack Developer</strong>
            <span>Project Type</span>
            <strong>{project.imageLabel}</strong>
            <span>Stack</span>
            <strong>{project.stack.slice(0, 3).join(", ")}</strong>
          </div>

          <div className="projectDetailsActions productDetailActions">
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

          <div className="projectRightPanel">
            <h2>Project Focus</h2>
            <p>{project.purpose ?? project.shortDescription}</p>
          </div>
        </aside>
      </section>

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










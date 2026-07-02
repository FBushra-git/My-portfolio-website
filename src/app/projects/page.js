import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "./data";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | Bushra Portfolio",
  description: "All projects from Bushra's portfolio with live links and details.",
};

export default function ProjectsPage() {
  return (
    <main className="projectDetailsPage">
      <nav className="projectDetailsNav">
        <Link className="brand" href="/">Bushra</Link>
        <div className="projectNavActions">
          <Link className="backLink" href="/#projects">
            <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
            Home
          </Link>
        </div>
      </nav>

      <section className="sectionBlock allProjectsSection">
        <div className="sectionIntro">
          <p className="eyebrow">All Projects</p>
          <h1>Every project in one place.</h1>
          <p>
            Browse my project collection with live project links, client-side repositories, details, challenges, and future improvement plans.
          </p>
        </div>

        <div className="projectGrid allProjectGrid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}



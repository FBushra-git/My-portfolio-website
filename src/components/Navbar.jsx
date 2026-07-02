"use client";

import { useEffect, useState } from "react";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = navItems.findLast((item) => {
        const section = document.querySelector(item.href);
        return section && section.offsetTop <= window.scrollY + 140;
      });

      setActiveSection(currentSection?.href.slice(1) ?? "home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#home">Bushra</a>

      <div className="navLinks" aria-label="Portfolio sections">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              className={isActive ? "active" : ""}
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      <ThemeToggleButton />
    </nav>
  );
}

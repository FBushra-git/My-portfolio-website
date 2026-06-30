"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState("home");
  const isLight = theme === "light";
  const nextThemeLabel = isLight ? "Dark" : "Light";
  const ThemeIcon = isLight ? Moon : Sun;

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

      <button
        className="themeToggle"
        type="button"
        onClick={onThemeToggle}
        aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
        title={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
      >
        <ThemeIcon size={17} strokeWidth={1.8} aria-hidden="true" />
        <span>{nextThemeLabel}</span>
      </button>
    </nav>
  );
}

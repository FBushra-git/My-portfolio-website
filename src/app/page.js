"use client";

import { useState } from "react";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <main className={`themeTest ${theme}`}>
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
      <Banner />
      <About />
      <Skills />
    </main>
  );
}

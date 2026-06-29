"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <main className={`themeTest ${theme}`}>
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
      <Banner />
    </main>
  );
}

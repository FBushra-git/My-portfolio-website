"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggleButton({ className = "themeToggle" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const nextThemeLabel = isLight ? "Dark" : "Light";
  const ThemeIcon = isLight ? Moon : Sun;

  return (
    <button
      className={className}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
      title={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
    >
      <ThemeIcon size={17} strokeWidth={1.8} aria-hidden="true" />
      <span>{nextThemeLabel}</span>
    </button>
  );
}

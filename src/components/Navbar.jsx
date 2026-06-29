const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onThemeToggle }) {
  const nextThemeLabel = theme === "light" ? "Dark" : "Light";

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#home">Bushra</a>

      <div className="navLinks" aria-label="Portfolio sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>

      <button
        className="themeToggle"
        type="button"
        onClick={onThemeToggle}
        aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
      >
        {nextThemeLabel}
      </button>
    </nav>
  );
}

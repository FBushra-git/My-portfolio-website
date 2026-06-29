const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Facebook", href: "https://facebook.com/your-username" },
];

export default function Banner() {
  return (
    <section id="home" className="banner" aria-labelledby="banner-title">
      <div className="bannerText">
        <p className="eyebrow">Frontend Developer</p>
        <h1 id="banner-title">Hi, I am Bushra</h1>
        <p className="introText">
          I create clean, responsive, and elegant web experiences with modern frontend tools. I enjoy turning ideas into polished websites that feel smooth, useful, and professional on every device.
        </p>

        <div className="bannerActions" aria-label="Primary actions">
          <a
            className="primaryBtn"
            href="https://wa.me/8801000000000"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
          <a className="ghostBtn" href="/resume.pdf" download>
            Download Resume
          </a>
        </div>

        <div className="bannerSocials" aria-label="Social profile links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="portraitFrame" aria-label="Professional photo">
        <div className="portraitGlow" />
        <div className="portraitPlaceholder">
          <span>Your Image</span>
        </div>
      </div>
    </section>
  );
}

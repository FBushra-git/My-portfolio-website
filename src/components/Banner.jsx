import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Download, Mail, Send, SquareUserRound } from "lucide-react";

const nameWords = ["Hi,", "I", "am", "Bushra"];

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/FBushra-git", Icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nusrat-tasmin-bushra/", Icon: SquareUserRound },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=bushratasmin5202@gmail.com", Icon: Mail },
];

export default function Banner() {
  return (
    <section id="home" className="banner" aria-labelledby="banner-title">
      <div className="bannerText">
        <p className="eyebrow">MENN Stack Developer</p>
        <motion.h1
          id="banner-title"
          className="typingName"
          aria-label="Hi, I am Bushra"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.075 }}
        >
          {nameWords.map((word) => (
            <span className="typingWord" key={word}>
              {word.split("").map((letter, index) => (
                <motion.span
                  aria-hidden="true"
                  className="typingLetter"
                  key={`${word}-${letter}-${index}`}
                  variants={letterVariants}
                  transition={{ duration: 0.01 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <p className="introText">
          I build clean, responsive, and user-friendly web applications using MongoDB, Express.js, Next.js, and Node.js. I enjoy creating polished interfaces, connecting them with reliable APIs, and turning ideas into complete digital products.
        </p>

        <div className="bannerActions" aria-label="Primary actions">
          <a
            className="primaryBtn"
            href="https://wa.me/8801000000000"
            target="_blank"
            rel="noreferrer"
          >
            <Send size={18} strokeWidth={1.9} aria-hidden="true" />
            Hire Me
          </a>
          <a className="ghostBtn" href="/resume.pdf" download>
            <Download size={18} strokeWidth={1.9} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="bannerSocials" aria-label="Social profile links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="portraitFrame" aria-label="Professional photo">
        <div className="portraitGlow" />
        <div className="portraitPlaceholder portraitImageWrap">
          <Image
            src="/bg-2.jpeg"
            alt="Bushra professional portrait"
            width={720}
            height={900}
            priority
          />
        </div>
      </div>
    </section>
  );
}


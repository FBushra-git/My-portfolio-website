import { Code2, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/FBushra-git", Icon: Code2, external: true },
  { label: "Email", href: "mailto:bushratasmin5202@gmail.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/8801319244812", Icon: MessageCircle, external: true },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-[min(1080px,calc(100%-32px))] border-t border-black/10 py-8 text-[#6f6761] dark:border-white/15 dark:text-[#d6c8d2]">
      <div className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-white/35 p-6 backdrop-blur-xl dark:border-white/15 dark:bg-white/5 md:flex-row md:items-center md:justify-between">
        <div>
          <a className="font-[var(--font-heading)] text-3xl font-semibold leading-none text-[#181514] dark:text-[#f8edf1]" href="#home">Bushra</a>
          <p className="mt-3 max-w-xl text-sm leading-6">MENN Stack Developer | CSE Student | Building clean, responsive, and useful web experiences.</p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label="Footer links">
          {footerLinks.map(({ label, href, Icon, external }) => (
            <a
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-[#181514] transition hover:-translate-y-0.5 hover:border-[#8b5d65]/40 dark:border-white/15 dark:bg-white/10 dark:text-[#f8edf1] dark:hover:border-[#bb8b94]/50"
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="py-5 text-center text-xs">Copyright 2026 Bushra. All rights reserved.</p>
    </footer>
  );
}

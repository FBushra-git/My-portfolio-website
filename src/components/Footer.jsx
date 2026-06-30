"use client";

import { motion } from "framer-motion";
import { Code2, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/FBushra-git", Icon: Code2, external: true },
  { label: "Email", href: "mailto:bushratasmin5202@gmail.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/8801319244812", Icon: MessageCircle, external: true },
];

export default function Footer() {
  return (
    <motion.footer
      className="mx-auto w-[min(1080px,calc(100%-32px))] border-t border-[var(--line)] py-8 text-[var(--muted)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="motionCard flex flex-col gap-5 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-6 shadow-[0_18px_50px_rgba(24,21,20,0.08)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <a className="font-[var(--font-heading)] text-3xl font-semibold leading-none text-[var(--text)]" href="#home">Bushra</a>
          <p className="mt-3 max-w-xl text-sm leading-6">MENN Stack Developer | CSE Student | Building clean, responsive, and useful web experiences.</p>
        </div>

        <div className="flex flex-wrap gap-3" aria-label="Footer links">
          {footerLinks.map(({ label, href, Icon, external }) => (
            <motion.a
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_52%,transparent)] text-[var(--text)] transition hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--line))]"
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              whileHover={{ y: -3, rotate: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>

      <p className="py-5 text-center text-xs">Copyright 2026 Bushra. All rights reserved.</p>
    </motion.footer>
  );
}

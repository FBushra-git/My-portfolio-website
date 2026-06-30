"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "bushratasmin5202@gmail.com",
    href: "mailto:bushratasmin5202@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "01319244812",
    href: "tel:+8801319244812",
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "01319244812",
    href: "https://wa.me/8801319244812",
    Icon: MessageCircle,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-[min(1080px,calc(100%-32px))] border-t border-[var(--line)] py-20 text-[var(--text)] md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="motionCard overflow-hidden rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] shadow-[0_24px_70px_rgba(24,21,20,0.10)] backdrop-blur-xl"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="animatedPreview border-b border-[var(--line)] bg-[radial-gradient(circle_at_15%_12%,color-mix(in_srgb,var(--accent-soft)_30%,transparent),transparent_32%),radial-gradient(circle_at_82%_82%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_34%)] p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">Contact</p>
            <h2 id="contact-title" className="font-[var(--font-heading)] text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-none text-[var(--text)]">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              Have a project idea, collaboration, or opportunity? Send a message directly. I prefer clear, friendly communication and practical project discussions.
            </p>
            <a
              className="magneticButton mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d59faf] bg-[#e9b8c1] px-5 text-sm font-black uppercase tracking-[0.08em] text-[#181514] shadow-[0_12px_30px_rgba(138,96,100,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0c8cf] [.themeTest.dark_&]:border-[#bb8b94] [.themeTest.dark_&]:bg-[#bb8b94] [.themeTest.dark_&]:text-[#15171c]"
              href="https://wa.me/8801319244812"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={18} strokeWidth={1.8} aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>

          <motion.div
            className="grid gap-4 bg-[color-mix(in_srgb,var(--surface-strong)_38%,transparent)] p-7 sm:p-9"
            aria-label="Contact information"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {contactItems.map(({ label, value, href, Icon }) => (
              <motion.a
                className="group grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-5 shadow-[0_12px_34px_rgba(24,21,20,0.07)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--line))] max-sm:grid-cols-1"
                href={href}
                key={label}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel={label === "WhatsApp" ? "noreferrer" : undefined}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: "easeOut" }}
                whileHover={{ x: 6 }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_62%,transparent)] text-[var(--accent)] transition group-hover:scale-105">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-[var(--accent)]">{label}</span>
                  <strong className="mt-1 block break-words text-base leading-snug text-[var(--text)]">{value}</strong>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

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

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto w-[min(1080px,calc(100%-32px))] border-t border-black/10 py-20 text-[#181514] dark:border-white/15 dark:text-[#f8edf1] md:py-28">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/45 shadow-[0_24px_70px_rgba(24,21,20,0.10)] backdrop-blur-xl dark:border-white/15 dark:bg-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-black/10 p-7 dark:border-white/15 sm:p-9 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#8b5d65] dark:text-[#bb8b94]">Contact</p>
            <h2 id="contact-title" className="font-[var(--font-heading)] text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-none">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6f6761] dark:text-[#d6c8d2]">
              Have a project idea, collaboration, or opportunity? Send a message directly. I prefer clear, friendly communication and practical project discussions.
            </p>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#181514] px-5 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(24,21,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2b2522] dark:bg-[#bb8b94] dark:text-[#15171c] dark:hover:bg-[#d3a4ac]"
              href="https://wa.me/8801319244812"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={18} strokeWidth={1.8} aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>

          <div className="grid gap-4 p-7 sm:p-9" aria-label="Contact information">
            {contactItems.map(({ label, value, href, Icon }) => (
              <a
                className="group grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-black/10 bg-[#fffaf4]/70 p-5 transition hover:-translate-y-1 hover:border-[#8b5d65]/40 hover:bg-white/85 dark:border-white/15 dark:bg-white/5 dark:hover:border-[#bb8b94]/50 dark:hover:bg-white/10 max-sm:grid-cols-1"
                href={href}
                key={label}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel={label === "WhatsApp" ? "noreferrer" : undefined}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/80 text-[#8b5d65] transition group-hover:scale-105 dark:border-white/15 dark:bg-white/10 dark:text-[#bb8b94]">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-[#8b5d65] dark:text-[#bb8b94]">{label}</span>
                  <strong className="mt-1 block break-words text-base leading-snug text-[#181514] dark:text-[#f8edf1]">{value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

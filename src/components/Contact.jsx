import { Mail, MessageCircle, Phone, Send } from "lucide-react";

const contactItems = [
  { label: "Email", value: "bushratasmin5202@gmail.com", href: "mailto:bushratasmin5202@gmail.com", Icon: Mail },
  { label: "Phone", value: "01319244812", href: "tel:+8801319244812", Icon: Phone },
  { label: "WhatsApp", value: "01319244812", href: "https://wa.me/8801319244812", Icon: MessageCircle },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto w-[min(1080px,calc(100%-32px))] border-t border-[var(--line)] py-20 text-[var(--text)] md:py-28">
      <div className="!rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] p-3 shadow-[0_26px_80px_rgba(24,21,20,0.11)] backdrop-blur-xl">
        <div className="grid overflow-hidden !rounded-xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="!rounded-xl border border-[var(--line)] bg-[radial-gradient(circle_at_18%_18%,color-mix(in_srgb,var(--accent-soft)_34%,transparent),transparent_34%),radial-gradient(circle_at_82%_78%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_36%),color-mix(in_srgb,var(--surface-strong)_48%,transparent)] p-7 sm:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">Contact</p>
            <h2 id="contact-title" className="font-[var(--font-heading)] text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-none text-[var(--text)]">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              Have a project idea, collaboration, or opportunity? Send a message directly. I prefer clear, friendly communication and practical project discussions.
            </p>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 !rounded-lg border border-[#d59faf] bg-[#e9b8c1] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#181514] shadow-[0_12px_30px_rgba(138,96,100,0.18)] [.themeTest.dark_&]:border-[#bb8b94] [.themeTest.dark_&]:bg-[#bb8b94] [.themeTest.dark_&]:text-[#15171c]"
              href="https://wa.me/8801319244812"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={18} strokeWidth={1.8} aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>

          <div className="grid gap-4 p-4 sm:p-6" aria-label="Contact information">
            {contactItems.map(({ label, value, href, Icon }) => (
              <a
                className="group grid grid-cols-[auto_1fr] items-center gap-4 !rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-5 shadow-[0_10px_30px_rgba(24,21,20,0.06)] max-sm:grid-cols-1"
                href={href}
                key={label}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel={label === "WhatsApp" ? "noreferrer" : undefined}
              >
                <div className="grid h-12 w-12 place-items-center !rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_62%,transparent)] text-[var(--accent)]">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-[var(--accent)]">{label}</span>
                  <strong className="mt-1 block break-words text-base leading-snug text-[var(--text)]">{value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

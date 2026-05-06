import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, AtSign } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emirates Expedition" },
      { name: "description", content: "Reach Emirates Expedition by phone (+91 70127 75400 / +91 79945 49785), WhatsApp, email or Instagram." },
      { property: "og:title", content: "Contact — Emirates Expedition" },
      { property: "og:description", content: "Talk to us about your group trip, school expedition or custom package." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-wider sm:text-5xl md:text-8xl">
              CALL US, WE <span className="gradient-gold-text">PICK UP</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Real humans, India Standard Time. Whether you're planning a school
              trip months ahead or need a coach this weekend — call, WhatsApp or DM.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Card icon={<Phone size={18} />} title="Call / WhatsApp" lines={["+91 70127 75400", "+91 79945 49785"]} />
              <Card icon={<Mail size={18} />} title="Email" lines={["emiratesexpedition25@gmail.com"]} />
              <Card icon={<MapPin size={18} />} title="Base" lines={["Thattathumala, Trivandrum", "Kerala, India"]} />
              <Card icon={<Clock size={18} />} title="Hours" lines={["Bookings: 24/7", "Office: 09:00 — 21:00 IST"]} />
            </div>

            <div className="mt-12 rounded-sm border border-gold/40 bg-card/40 p-6">
              <p className="font-display text-2xl tracking-wider">
                PREFER INSTAGRAM? SLIDE IN.
              </p>
              <a
                href="https://www.instagram.com/emirates_expedition_/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[48px] items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-gold hover:underline"
              >
                <AtSign size={14} /> @emirates_expedition_ →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 overflow-hidden rounded-sm border border-border/60 bg-card/40">
              <iframe
                title="Thattathumala map"
                src="https://maps.google.com/maps?q=8.801285,76.8781195&z=15&output=embed"
                className="h-[500px] w-full"
                style={{ filter: "grayscale(1) brightness(0.6) contrast(1.2) invert(0.9)" }}
              />
              <div className="border-t border-border/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Headquarters</p>
                <p className="mt-2 font-display text-xl tracking-wider">THATTATHUMALA, TRIVANDRUM</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="rounded-sm border border-border/60 bg-card/40 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-primary-foreground">{icon}</div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{title}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-foreground/90">{l}</p>
      ))}
    </div>
  );
}

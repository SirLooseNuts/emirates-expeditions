import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emirates Expedition" },
      { name: "description", content: "Reach our Dubai-based concierge by phone, email, WhatsApp or Instagram. We respond within four hours." },
      { property: "og:title", content: "Contact — Emirates Expedition" },
      { property: "og:description", content: "Talk to our concierge about your private UAE expedition." },
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
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              We answer in <span className="italic gradient-gold-text">four hours</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Whether you're planning months ahead or already in the back of a
              taxi from DXB — we're here. Real humans. Local time.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Card icon={<Phone size={18} />} title="Call / WhatsApp" lines={["+971 50 000 0000"]} />
              <Card icon={<Mail size={18} />} title="Email" lines={["hello@emiratesexpedition.com"]} />
              <Card icon={<MapPin size={18} />} title="Base camp" lines={["Al Quoz, Dubai", "United Arab Emirates"]} />
              <Card icon={<Clock size={18} />} title="Hours" lines={["Concierge: 24/7", "Office: 09:00 — 21:00 GST"]} />
            </div>

            <div className="mt-12 rounded-sm border border-gold/40 bg-card/40 p-6">
              <p className="font-display text-2xl">
                Prefer Instagram? Slide into our DMs.
              </p>
              <a
                href="https://www.instagram.com/emirates_expedition_/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-mono text-sm uppercase tracking-[0.2em] text-gold hover:underline"
              >
                @emirates_expedition_ →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 overflow-hidden rounded-sm border border-border/60 bg-card/40">
              <iframe
                title="Dubai map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.20%2C25.10%2C55.32%2C25.22&layer=mapnik"
                className="h-[500px] w-full grayscale"
                style={{ filter: "grayscale(0.7) brightness(0.7) sepia(0.3)" }}
              />
              <div className="border-t border-border/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Headquarters</p>
                <p className="mt-2 font-display text-xl">Al Quoz, Dubai</p>
                <p className="text-sm text-muted-foreground">United Arab Emirates</p>
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
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">{icon}</div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{title}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-foreground/90">{l}</p>
      ))}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { tours } from "@/data/tours";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const searchSchema = z.object({ tour: z.string().optional() });

export const Route = createFileRoute("/booking")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Book Your Group Trip — Emirates Expedition" },
      { name: "description", content: "Request a quote for school trips, group expeditions, or custom packages. Our team responds the same day." },
      { property: "og:title", content: "Book Your Group Trip — Emirates Expedition" },
      { property: "og:description", content: "Get a custom quote for your school, college or group expedition." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const { tour: preselected } = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "N/A";
    const email = formData.get("email") || "N/A";
    const phone = formData.get("phone") || "N/A";
    const country = formData.get("country") || "N/A";
    const tourSlug = formData.get("tour");
    const date = formData.get("date") || "N/A";
    const guests = formData.get("guests") || "N/A";
    const message = formData.get("message") || "N/A";

    const tourTitle = tours.find((t) => t.slug === tourSlug)?.title || (tourSlug === "custom" ? "Custom / bespoke itinerary" : tourSlug || "N/A");

    const whatsappMessage = `*New Quote Request*
Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Package: ${tourTitle}
Date: ${date}
Guests: ${guests}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919074390973?text=${encodedMessage}`;

    setTimeout(() => {
      toast.success("Redirecting to WhatsApp...", {
        description: "Opening WhatsApp to send your request.",
      });
      window.open(whatsappUrl, "_blank");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <div className="pt-32">
      <Toaster />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Book a Trip</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wider sm:text-7xl">
              REQUEST <span className="gradient-gold-text">A QUOTE</span>.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Tell us about your group — school, college, family, or custom — and
              we'll send back a tailored proposal the same day.
            </p>

            <div className="mt-12 space-y-6 border-l border-gold/40 pl-6">
              <Step n="01" t="Share your trip" b="Group size, destinations, dates — quick form or WhatsApp." />
              <Step n="02" t="Get your quote" b="Custom itinerary + transparent pricing within 24 hours." />
              <Step n="03" t="Hit the road" b="We handle the coach, the guide, the food, the photos." />
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-6 rounded-sm border border-border/60 bg-card/60 p-8 lg:col-span-7 lg:p-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" />
              <Field label="Country" name="country" />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Package</label>
              <select
                name="tour"
                defaultValue={preselected ?? ""}
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none"
              >
                <option value="">Select a package…</option>
                {tours.map((t) => (
                  <option key={t.slug} value={t.slug}>{t.title}</option>
                ))}
                <option value="custom">Custom / bespoke itinerary</option>
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Preferred date" name="date" type="date" />
              <Field label="Group size" name="guests" type="number" min={1} defaultValue={2} />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tell us more</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Anniversary, dietary notes, must-have moments…"
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-sm bg-gold py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Request"}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to our team contacting you about your booking.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        {...rest}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function Step({ n, t, b }: { n: string; t: string; b: string }) {
  return (
    <div>
      <div className="font-mono text-xs tracking-[0.25em] text-gold">{n}</div>
      <h4 className="mt-1 font-display text-xl">{t}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{b}</p>
    </div>
  );
}

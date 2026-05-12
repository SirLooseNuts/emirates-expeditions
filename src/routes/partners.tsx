import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Trusted Travel Partners — Emirates Expedition" },
      { name: "description", content: "Meet all of Emirates Expedition's trusted travel partners across South India. Click any partner to visit their Instagram." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "Komban", url: "https://www.instagram.com/komban_holidays_official/" },
  { name: "Oneness", url: "https://www.instagram.com/onenesstravels/" },
  { name: "Shylock", url: "https://www.instagram.com/shylock_holidays_official/" },
  { name: "Daivik", url: "https://www.instagram.com/daivik_holidays_official/" },
  { name: "Madrak", url: "https://www.instagram.com/madrak_travel._experts_/" },
  { name: "NORWAY", url: "https://www.instagram.com/norway_travel_premium/" },
  { name: "Bigbro", url: "https://www.instagram.com/bigbro_travelhub_official/" },
  { name: "Platinum", url: "https://www.instagram.com/platinum_holidays_official/" },
  { name: "Squadron", url: "https://www.instagram.com/squadron_travel_hub/" },
  { name: "Godfather", url: "https://www.instagram.com/godfather_holidays_official/" },
  { name: "Zero", url: "https://www.instagram.com/zero_expeditions/" },
  { name: "Squirrel", url: "https://www.instagram.com/squirrel_trails/" },
  { name: "dozando", url: "https://www.instagram.com/dozando_tourcompany/" },
  { name: "Karthikeyan", url: "https://www.instagram.com/karthikeyan_travel_hub/" },
  { name: "Samurai", url: "https://www.instagram.com/samurai_transits/" },
  { name: "Herox", url: "https://www.instagram.com/herox_travelmates/" },
  { name: "Udayon", url: "https://www.instagram.com/udayon_holidays_official/" },
  { name: "Travizio", url: "https://www.instagram.com/travizo_holidays_official/" },
  { name: "Simba", url: "https://www.instagram.com/simba_travel_king/" },
  { name: "Siyon", url: "https://www.instagram.com/siyon_travel_hub_official/" },
  { name: "Pathoos", url: "https://www.instagram.com/pathoos_holidays_official_/" },
  { name: "Tibetan", url: "https://www.instagram.com/tibetan_travel_expedition/" },
  { name: "Oreon", url: "https://www.instagram.com/oreon_travel_experts_official/" },
  { name: "Optimus", url: "https://www.instagram.com/optimus_travelvibes.official/" },
  { name: "Memoir", url: "https://www.instagram.com/memoir_holidays_/" },
  { name: "D Company", url: "https://www.instagram.com/dcompany_travelnexus/" },
  { name: "Kabuka", url: "https://www.instagram.com/kabuka.official/" },
  { name: "Dorado", url: "https://www.instagram.com/dorado_travel_hub_official_/" },
  { name: "Foreign", url: "https://www.instagram.com/foreign_travel_expedition/" },
  { name: "RedBull", url: "https://www.instagram.com/redbull_holidays_official/" },
  { name: "Toxic", url: "https://www.instagram.com/toxic.travel_hub/" },
  { name: "Maddox", url: "https://www.instagram.com/_maddox_travel_hub_official_/" },
  { name: "Guardian", url: "https://www.instagram.com/guardian_travelmates_official/" },
  { name: "Salamz", url: "https://www.instagram.com/salamztravelleisure/" },
  { name: "Captain", url: "https://www.instagram.com/_captain_holidays/" },
  { name: "Turbo", url: "https://www.instagram.com/turbo_travel_hub_/" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function PartnersPage() {
  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Our Network</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
            TRUSTED <br />
            <span className="gradient-gold-text">TRAVEL PARTNERS</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/70 font-light leading-relaxed">
            Emirates Expedition works alongside{" "}
            <span className="text-gold font-medium">{partners.length} trusted travel companies</span>{" "}
            across South India. Each one is a click away — follow them on Instagram.
          </p>
        </motion.div>
      </section>

      {/* PARTNERS LIST */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, idx) => (
              <motion.li
                key={partner.name}
                variants={cardVariants}
                className="flex gap-4 items-start group"
              >
                <span className="font-mono text-sm text-muted-foreground min-w-[28px] mt-0.5 group-hover:text-gold transition-colors">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 leading-relaxed font-light group-hover:text-white transition-colors"
                >
                  {partner.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 rounded-sm border border-gold/20 bg-card/40 p-10 text-center"
        >
          <p className="eyebrow">Want to collaborate?</p>
          <h2 className="mt-4 font-display text-3xl tracking-wider sm:text-5xl uppercase">
            BECOME A <span className="gradient-gold-text">PARTNER</span>.
          </h2>
          <p className="mt-4 text-foreground/60 max-w-md mx-auto">
            Join our growing network of travel companies and reach thousands of group travelers across South India.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02]"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

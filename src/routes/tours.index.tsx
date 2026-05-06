import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/tours/")({
  component: ToursPage,
});

const packages = [
  {
    title: "ONE DAY TRIPS",
    items: [
      "Wonderla, Forum Mall/Lulumall",
      "Athirapally, Vazhachal, Silverstrom/Dreamworld",
      "Munnar",
      "Kodaikanal",
      "Wagamon",
      "Marayoor",
      "Idukki",
      "Ooty",
      "Alapuzha/ Kollam Houseboat",
      "Kanyakumari",
      "Thenmala, palaruvi, Kutralam",
      "Ponmudi, Meenmutty waterfall"
    ]
  },
  {
    title: "TWO DAY TRIPS (2 day, 3 night)",
    items: [
      "Ooty, Wayand",
      "Kodaikanal, Munnar",
      "Marayoor, Kodaikanal",
      "Munnar, Marayoor",
      "Munnar, Wonderla",
      "Coorg, Mysore",
      "Mysore, Ooty",
      "Banglore, Mysore",
      "Mysore, Banglore Wonderla",
      "Wagamon, Idukki",
      "Mysore, Chikmanglore",
      "Coorg, Chikmanglore",
      "Rameswaram, Kodaikanal",
      "kodaikanal, Wagamon",
      "Wagamon, Wonderla",
      "Ooty, Black Thunder",
      "Malampuzha, Ooty",
      "Athirapally, Vazhachal, Valpara"
    ]
  },
  {
    title: "THREE DAY TRIPS",
    items: [
      "Wagamon, Munnar, Wonderla",
      "Munnar, Marayoor, Wonderla",
      "Wagamon, Munnar, Idukki",
      "Chikmanglore, Belur, Mysore",
      "Mysore, Chikmanglore, Wonderla",
      "Coorg, Mysore, Banglore",
      "Coorg, Chikmanglore, Mysore",
      "Mysore, Coorg, Wayanad",
      "Mysore, Ooty, Wonderla",
      "Kodaikanal, Munnar, Wonderla",
      "Kodaikanal, Marayoor, Munnar",
      "Kodaikanal, Munnar, Wagamon",
      "Kodaikanal, Marayoor, Wonderla",
      "Wayand, Ooty, Wonderla",
      "Mookambika",
      "Banglore, Mysore, Chikmanglore",
      "Rameswaram, Kodaikanal, Munnar",
      "Uduppi, Coorg, Mysore"
    ]
  },
  {
    title: "FOUR DAY TRIPS",
    items: [
      "Ooty, Wayand, Wonderla",
      "Kodaikanal, Marayoor, Munnar, Wonderla",
      "Kodaikanal, Munnar, Wagamon, Wonderla",
      "Wagamon, Ramakkalmedu, Idukki, Munnar, Marayoor/Wonderla",
      "Banglore, Mysore, ooty, Wayand/Wonderla",
      "Coorg, Chikmanglore, Belur,Mysore",
      "Dendeli, Uduppi, Croög, Chikmanglore",
      "Uduppi, Coorg, Sravanabelgola, Chikmanglore, Mysore",
      "Myosre, chikmanglore, Coorg, Wayanad",
      "Uduppi, Dendeli, Chikmanglore, Coorg",
      "Coorg, Mysore , Mysore, Wayand",
      "Banglore, Mysore, chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Banglore",
      "Ooty, Mysore, Coorg, Wayand",
      "Mysore, coorg, Wayand, Kozhikode",
      "Uduppi, Goa, Goa, Chikmaglore",
      "Rameswaram, Kodaikanal, Palani, Kanyakumari"
    ]
  },
  {
    title: "FIVE DAY TRIPS",
    items: [
      "Uduppi, Dendeli, Goa,Goa, Chikmanglore",
      "Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Dendeli, Uduppi",
      "Wayandu, Ooty, Mysore, Chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Mysore, Banglore",
      "Alapuzha House boat, Wagamon, Calveri Mount, Idukki dam, Munnar, Wonderla/Marayoor"
    ]
  },
  {
    title: "SIX DAY TRIPS",
    items: [
      "Uduppi, Dendeli, Goa,Goa, Chikmanglore, Coorg",
      "Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg, Wayand",
      "Coorg, Chikmanglore, Belur, Dendeli, Uduppi, Kozhikode",
      "Wayandu, Ooty, Mysore, Chikmanglore,Belur, Coorg",
      "Coorg, Chikmanglore, Belur, Mysore, Banglore, Banglore Wonderla"
    ]
  }
];

function ToursPage() {
  let counter = 1;
  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 lg:px-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Travel Trip Packages</p>
          <h1 className="mt-4 font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
            OUR <span className="gradient-gold-text">PACKAGES</span>.
          </h1>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-32 lg:px-10">
        <div className="flex flex-col gap-10 sm:gap-16">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {pkg.title}
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-lg font-light text-foreground/80">
                {pkg.items.map((item) => {
                  const currentCount = counter++;
                  return (
                    <li key={currentCount} className="pl-2" value={currentCount}>
                      {item}
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-16 sm:py-32 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow block mb-4">Bespoke Engineering</span>
              <h2 className="font-display text-4xl leading-none tracking-tight sm:text-6xl uppercase">
                CRAFT YOUR <br /> <span className="gradient-gold-text">OWN ROUTE</span>.
              </h2>
            </div>
            <div>
              <p className="text-xl text-foreground/70 font-light leading-relaxed">
                Looking for a specific university loop, devotion circuit, or 
                corporate retreat? We design fully custom long-haul itineraries 
                tailored to your group's energy.
              </p>
              <a
                href="/booking"
                className="mt-10 inline-flex min-h-[48px] items-center gap-6 rounded-xl bg-gold px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground hover:scale-[1.02] shadow-glow-sm transition-all"
              >
                Request Custom Build
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

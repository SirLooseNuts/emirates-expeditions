import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="eyebrow">Emirates Expedition</p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
            Where the dunes meet the <span className="gradient-gold-text">horizon</span>.
          </h3>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Crafting cinematic desert journeys, luxury yacht escapes, and bespoke
            adventure expeditions across the Emirates since 2017.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li><Link to="/tours" className="hover:text-gold">Tours</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/booking" className="hover:text-gold">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reach Us</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold" /> Al Quoz, Dubai, UAE</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +971 50 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> hello@emiratesexpedition.com</li>
            <li>
              <a
                href="https://www.instagram.com/emirates_expedition_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline"
              >
                <span className="text-base leading-none">◎</span> @emirates_expedition_
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Emirates Expedition. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.25em]">Dubai · Abu Dhabi · Ras Al Khaimah</p>
        </div>
      </div>
    </footer>
  );
}

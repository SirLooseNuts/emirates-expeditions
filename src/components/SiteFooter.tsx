import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, AtSign } from "lucide-react";

import logo from "@/assets/logo-main.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link to="/" className="group flex items-center gap-4 mb-6">
            <img
              src={logo}
              alt=""
              className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-[0.1em] text-white uppercase">
                EMIRATES <span className="text-gold">EXPEDITION</span>
              </div>
              <div className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/40">
                A journey of thousand miles
              </div>
            </div>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            South India's group expedition specialists — school trips, college tours, family
            adventures, and devotional journeys aboard our signature touring coaches.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <Link to="/tours" className="hover:text-gold">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-gold">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reach Us</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-gold" /> Thattathumala, Trivandrum, Kerala,
              India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> +91 70127 75400
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> +91 79945 49785
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" /> emiratesexpedition16@gmail.com
            </li>
            <li>
              <a
                href="https://www.instagram.com/emirates_expedition_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline"
              >
                <AtSign size={14} /> @emirates_expedition_
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Emirates Expedition. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.25em]">
            Kerala · Karnataka · Tamil Nadu · Goa
          </p>
        </div>
      </div>
    </footer>
  );
}

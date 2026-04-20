import { createFileRoute, Outlet } from "@tanstack/react-router";
import hero from "@/assets/group-pathoos-munnar.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Emirates Expedition" },
      { name: "description", content: "Browse school trips (KTM 3.0, KTM 2.0), group expeditions, college tours and custom packages across Munnar, Wayanad, Coorg, Goa, Hampi & more." },
      { property: "og:title", content: "Tour Packages — Emirates Expedition" },
      { property: "og:description", content: "School trips, group expeditions, college tours and custom packages across South India." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => <Outlet />,
});


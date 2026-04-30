// This file uses Vite's glob import to automatically load all images in the gallery folder
// This avoids writing 100+ individual import statements.

export interface Photo {
  src: string;
  alt: string;
  category: "Fleet" | "Expeditions" | "Moments";
}

const imageModules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url", // Ensure we get the URL as a string
});

// Promotional/themed graphic images to exclude from the gallery.
// These are flyers, festival cards, brochures — not expedition photos.
const BLOCKED_PATTERNS = [
  // Known promotional graphic files by timestamp ID (Eid Mubarak, New Year, Kerala Piravi, brochures)
  "1749232955", // Eid Mubarak poster (48KB — graphic)
  "1773931410", // Festival/theme card (38KB — graphic)
  "1761962075", // Small promo graphic (66KB)
  // Platinum UK marketing material
  "platinum",
  // Shylock Holidays branded content (bus company ads)
  "shylock_holidays_official",
  // Emirates Holidays official (different company branding)
  "emirates_holidays_official",
];

const isBlockedImage = (fileName: string): boolean => {
  const lower = fileName.toLowerCase();
  return BLOCKED_PATTERNS.some((pattern) => lower.includes(pattern.toLowerCase()));
};

export const galleryPhotos: Photo[] = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .filter(([path]) => {
    const fileName = path.split("/").pop() || "";
    return !isBlockedImage(fileName);
  })
  .map(([path, mod]) => {
    const fileName = path.split("/").pop() || "";
    const src = typeof mod === "string" ? mod : (mod as any).default || (mod as any);

    // Categorization logic based on filename patterns
    let category: Photo["category"] = "Moments";

    const lowerName = fileName.toLowerCase();

    if (
      lowerName.includes("pra_bl_o") ||
      lowerName.includes("shylock_holidays_official") ||
      lowerName.includes("1760951620")
    ) {
      category = "Moments";
    } else if (
      lowerName.includes("shylock") ||
      lowerName.includes("oneness") ||
      lowerName.includes("candy") ||
      lowerName.includes("autobacz") ||
      lowerName.includes("holidays")
    ) {
      category = "Fleet";
    } else if (lowerName.includes("expedition")) {
      category = "Expeditions";
    }

    // Clean up alt text from filename
    // Remove extension and common suffixes
    const cleanName = fileName
      .split(".")[0]
      .split("_")
      .filter((part) => part.length > 2 && !/^\d+$/.test(part)) // Remove dates/numbers
      .join(" ");

    return {
      src,
      alt: cleanName || "Emirates Expedition Moment",
      category,
    };
  });

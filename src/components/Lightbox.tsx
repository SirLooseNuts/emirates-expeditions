import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            className="absolute top-6 right-6 z-50 text-white/50 hover:text-white p-2 transition-colors"
            onClick={onClose}
          >
            <X size={32} />
          </button>

          <div className="relative h-full w-full flex items-center justify-center p-4 md:p-12">
            <button
              className="absolute left-4 md:left-8 z-50 rounded-full bg-white/5 p-4 text-white/50 hover:bg-white/10 hover:text-white transition-all"
              onClick={handlePrevious}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  IMAGE {currentIndex + 1} OF {images.length}
                </p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 z-50 rounded-full bg-white/5 p-4 text-white/50 hover:bg-white/10 hover:text-white transition-all"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

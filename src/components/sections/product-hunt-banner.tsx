"use client";

import { useState } from "react";
import { X } from "lucide-react";

/**
 * ProductHuntBanner is a sticky announcement banner for the Product Hunt launch.
 * It is a client component to manage its own visibility state.
 */
const ProductHuntBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[60] font-sans">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex grow items-center justify-center text-center">
            <p className="font-medium text-white text-sm tracking-wide">
              WE HAVE LAUNCHED IN PRODUCT HUNT SUPPORT US BY UPVOTE
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.producthunt.com/posts/adaapt-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded bg-white px-4 py-1 text-sm font-semibold text-indigo-600 transition-all hover:bg-opacity-90"
            >
              UPVOTE
            </a>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200"
              aria-label="Close announcement"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHuntBanner;
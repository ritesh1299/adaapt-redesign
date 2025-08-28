"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const ProductHuntBanner = ({ onDismiss }: { onDismiss: () => void }) => (
  <div className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
    <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
      <div className="flex flex-grow items-center justify-center gap-3">
        <p className="font-medium text-white text-sm text-center">
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
        <button onClick={onDismiss} className="text-white hover:text-gray-200">
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function Navigation() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-[60] transition-transform duration-300 ease-in-out ${
          isBannerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ProductHuntBanner onDismiss={() => setIsBannerVisible(false)} />
      </div>

      <header
        className={`fixed left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 transform rounded-2xl bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isBannerVisible ? 'top-28 sm:top-24' : 'top-4'
        }`}
      >
        <nav className="flex items-center justify-between px-2 py-4 sm:px-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Adaapt</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/logo-color-1.svg?"
                alt="Adaapt logo"
                width={150}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-purple-600">
              About
            </Link>
            <Link href="/#pricing" className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-purple-600">
              Pricing
            </Link>
            <Link href="/#features" className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-purple-600">
              Features
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
            <Link
              href="/dashboard"
              className="flex h-[43px] items-center justify-center whitespace-nowrap rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#7c3aed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
              Try Free
            </Link>
            <a
              href="https://www.producthunt.com/posts/adaapt-ai?embed=true"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-[8px]"
            >
              <Image
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=579982&theme=light"
                alt="Adaapt.ai on Product Hunt"
                width={200}
                height={43}
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </a>
          </div>
        </nav>
        
        {isMobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* The mobile menu panel itself would be implemented here, likely using a Sheet or Dialog component from a library like Shadcn/UI. */}
          </div>
        )}
      </header>
    </>
  );
}
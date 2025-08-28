import React from 'react';
import Image from 'next/image';

const integrationLogos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-588271-Microsoft_Teams_Logo_PNG1.png?", alt: "Microsoft Teams" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-645026-Oracle-Logo.jpg?", alt: "Oracle" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-609753-Quickbooks-Logo.png?", alt: "Quickbooks" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-155406-sap.jpg?", alt: "SAP" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-448952-Tally_-_Logo.png?", alt: "Tally" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-354148-Whatsapp_logo_PNG6.png?", alt: "WhatsApp" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-899281-1527579650_claim-book_sm.png?", alt: "Claim Book" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-834815-1689759330_Books-logo-lockup.jpg?", alt: "Zoho Books" },
];

/**
 * Note: This component uses a custom animation `animate-scroll`.
 * This animation is assumed to be defined in the project's `tailwind.config.js`.
 *
 * Example `tailwind.config.js` extension:
 * theme: {
 *   extend: {
 *     animation: {
 *       scroll: 'scroll 40s linear infinite',
 *     },
 *     keyframes: {
 *       scroll: {
 *         '0%': { transform: 'translateX(0)' },
 *         '100%': { transform: 'translateX(-100%)' },
 *       },
 *     },
 *   },
 * },
 */
const PlatformIntegrations = () => {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Seamless Integration Across All Platforms
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Eliminate errors and achieve peak efficiency by automating workflows across multiple applications. Adaapt.ai ensures smooth, uninterrupted operation, optimizing your processes regardless of the systems you use.
          </p>
        </div>
      </div>

      <div className="mt-16 w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex items-center justify-start flex-shrink-0 animate-[scroll_40s_linear_infinite]">
          {integrationLogos.map((logo, index) => (
            <div key={`logo-first-${index}`} className="mx-4 flex h-32 w-48 flex-shrink-0 items-center justify-center rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start flex-shrink-0 animate-[scroll_40s_linear_infinite]" aria-hidden="true">
          {integrationLogos.map((logo, index) => (
            <div key={`logo-second-${index}`} className="mx-4 flex h-32 w-48 flex-shrink-0 items-center justify-center rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformIntegrations;
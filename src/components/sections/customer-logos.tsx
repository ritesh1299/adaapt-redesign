"use client";

import Image from "next/image";

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-030772-logo-1.png?", alt: "customer" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-519254-logo-2.png?", alt: "customer" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-699475-logo-4.png?", alt: "customer" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-454159-logo-5.png?", alt: "customer" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-600545-logo-6.png?", alt: "customer" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-562342-logo-7.png?", alt: "customer" },
];

const CustomerLogos = () => {
  return (
    <div className="pt-8 pb-12 mb-12">
      <style >
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="mx-auto max-w-full">
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-10 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  className="max-h-8 w-auto object-contain opacity-90 transition-all duration-300 ease-in-out hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogos;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const supporters = [
  {
    name: 'Forbes India',
    href: 'https://www.youtube.com/watch?v=tA9foGXM8Y8&ab_channel=moneycontrol',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-660431-forbes-india-logo.png?',
    width: 200,
    height: 38,
  },
  {
    name: 'Nasscom',
    href: 'https://www.nasscom.in/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-401128-nasscom-logo.jpg?',
    width: 200,
    height: 55,
  },
  {
    name: 'Times Now',
    href: 'https://www.timesnownews.com/india/most-inspiring-leaders-to-watch-out-for-in-2024-article-106753020',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-781912-time-now-logo.png?',
    width: 150,
    height: 62,
  },
  {
    name: 'Times of India',
    href: 'https://timesofindia.indiatimes.com/business/india-business/leap-to-unicorn-trailblazing-startups-their-founders-to-watch-out-for-2024/articleshow/105806941.cms',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-435722-times-of-india-logo.jpg?',
    width: 200,
    height: 38,
  },
  {
    name: 'Upekkha',
    href: 'https://www.upekkha.io/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-168517-upekkha-logo.png?',
    width: 154,
    height: 37,
  },
  {
    name: 'Outlook',
    href: 'https://www.outlookindia.com/business-spotlight/masters-of-innovation-unveiling-the-top-10-brands-redefining-excellence',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/outlook-logo-12.svg?',
    width: 160,
    height: 31,
  },
  {
    name: 'Microsoft',
    href: 'https://www.microsoft.com/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-060279-microsoft-logo.png?',
    width: 154,
    height: 33,
  },
];

const Supporters = () => {
  const duplicatedLogos = [...supporters, ...supporters];

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Supporters
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We are recognized & trusted by
          </h2>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}
        </style>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-8 flex-shrink-0"
                aria-label={logo.name}
              >
                <div className="flex h-24 w-60 items-center justify-center rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-indigo-600 px-6 py-10 sm:px-12 lg:flex-row">
          <h2 className="max-w-xl text-center text-2xl font-bold tracking-tight text-white lg:text-left sm:text-3xl">
            Interested in learning more? Take a demo with our experts today!
          </h2>
          <Link
            href="/contact"
            className="flex flex-shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Supporters;
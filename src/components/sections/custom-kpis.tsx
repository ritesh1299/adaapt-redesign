import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const features = [
  'Monitor role-specific KPIs:',
  'Create custom visualizations:',
  'Access comprehensive dashboards:',
  'Configure SLA alerts:',
];

export default function CustomKpis() {
  return (
    <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 rounded-xl sm:gap-y-20 lg:grid-cols-5">
      <div className="px-6 lg:col-span-2 lg:ml-10 lg:px-0">
        <h2 className="text-base font-semibold leading-7 text-[var(--color-purple-accent)]">
          Custom KPIs
        </h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Personalized Performance Tracking
        </p>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Monitor and customize KPIs specific to your role and requirements.
        </p>

        <dl className="mt-8 max-w-xl space-y-4 text-sm leading-7 text-text-secondary lg:max-w-none">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-7">
              <dt className="inline font-semibold text-text-primary">
                <Check
                  className="absolute left-0 top-1 h-4 w-4 text-success-green"
                  aria-hidden="true"
                />
                {feature}
              </dt>
            </div>
          ))}
        </dl>
        
        <div className="mt-8">
            <Link
              href="https://www.adaapt.ai/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-text-secondary shadow-sm transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Schedule demo
            </Link>
        </div>
      </div>

      <div className="-mt-6 lg:col-span-3">
        <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/custom-kpis-10.svg?"
            alt="Custom KPIs dashboard illustration"
            width={580}
            height={404}
            className="w-full rounded-md shadow-2xl ring-1 ring-gray-900/10 sm:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const features = [
  "Connect multiple databases",
  "Self-training AI models",
  "Integrate knowledge centers",
  "Extract text-based insights",
];

export default function SeamlessIntegrations() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">
              Seamless Integrations
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Connect Your Existing Tools
            </p>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Easily integrate with your infrastructure to maximize data value.
            </p>
            <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-text-secondary lg:max-w-none">
              {features.map((feature) => (
                <div key={feature} className="relative pl-9">
                  <dt className="inline font-semibold text-text-primary">
                    <Check
                      className="absolute left-1 top-1 h-5 w-5 text-success-green"
                      aria-hidden="true"
                    />
                    <span className="text-text-primary font-normal">{feature}</span>
                  </dt>
                  <dd className="inline"></dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-lg border border-border bg-white px-6 py-2.5 text-sm font-semibold text-text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Schedule demo
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/seamless-integrations-11.svg?"
              alt="Seamless Integrations mockup"
              width={720}
              height={560}
              className="w-full max-w-xl rounded-xl shadow-lg ring-1 ring-black/5 lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
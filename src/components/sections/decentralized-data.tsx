import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Train department-specific AI models:",
  "Share insights across departments:",
  "Intuitive data management interfaces:",
  "Cross-department analytics:",
];

const FeatureItem = ({ text }: { text: string }) => (
  <div className="relative pl-7">
    <dt className="inline">
      <Check
        className="absolute left-0 top-1 h-4 w-4 text-green-600"
        aria-hidden="true"
      />
    </dt>
    <dd className="inline">
      <strong className="font-semibold text-gray-900">{text}</strong>
    </dd>
  </div>
);

const DecentralizedDataSection = () => {
  return (
    <section id="features" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 rounded-xl sm:gap-y-20 lg:grid-cols-5">
          <div className="px-6 lg:col-span-2 lg:ml-10 lg:px-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Decentralised Data Management
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Department-Specific Data Control
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enable departments to manage their data while maintaining seamless
              collaboration.
            </p>
            <dl className="mt-10 max-w-xl space-y-4 text-sm leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <FeatureItem key={feature} text={feature} />
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              Schedule demo
            </Link>
          </div>
          <div className="relative flex items-center justify-center lg:col-span-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/decenterlisedDataManagement-8.svg?"
              alt="Decentralised Data Management illustration"
              width={912}
              height={608}
              className="w-full max-w-none rounded-xl bg-gray-50 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedDataSection;
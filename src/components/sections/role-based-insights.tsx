import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Search information and past projects:",
  "Get role-specific key insights:",
  "Collaborate on shared knowledge:",
  "Self-service analytics with controls:",
];

const RoleBasedInsights = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Role Based Insights
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Personalized Insights
            </p>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Empower teams with role-specific insights while maintaining data
              governance.
            </p>
            <ul className="mt-10 max-w-xl space-y-4 text-base leading-7 text-text-secondary lg:max-w-none">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <Check
                    className="mt-1 h-5 w-5 flex-none text-success-green"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              Schedule demo
            </Link>
          </div>
          <div className="order-first lg:order-last lg:col-span-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/role-insights-9.svg?"
              alt="Role Based Insights Dashboard Mockup"
              width={768}
              height={432}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleBasedInsights;
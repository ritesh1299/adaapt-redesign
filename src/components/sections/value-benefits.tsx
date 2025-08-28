import React from "react";
import { TrendingUp, X, Rocket } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string, strokeWidth?: number }>;
  iconBgColor: string;
  iconColor: string;
};

const benefits: Benefit[] = [
  {
    title: "Improved Revenue",
    description:
      "Close deals faster and reduce churn with location-specific insights and analytics at your fingertips.",
    icon: TrendingUp,
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Reduces Training Costs",
    description:
      "Accelerate onboarding with role-based training and cross-departmental access to historical data.",
    icon: X,
    iconBgColor: "bg-pink-accent/10",
    iconColor: "text-pink-accent",
  },
  {
    title: "Gain Competitive Edge",
    description:
      "Empower leaders with centralized AI-powered insights across your organization.",
    icon: Rocket,
    iconBgColor: "bg-orange-accent/10",
    iconColor: "text-orange-accent",
  },
];

const ValueBenefits = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold leading-6 text-primary">
            VALUE BENEFITS
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Choose Adaapt for your business
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Our AI employees are meticulously crafted to provide an exceptional
            experience with every task of your application.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="relative flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <dt className="flex items-center gap-x-4">
                    <div
                      className={`flex h-14 w-14 flex-none items-center justify-center rounded-xl ${benefit.iconBgColor}`}
                    >
                      <Icon
                        className={`h-7 w-7 ${benefit.iconColor}`}
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-text-primary">
                      {benefit.title}
                    </h3>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text-secondary">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ValueBenefits;
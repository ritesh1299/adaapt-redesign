"use client";

import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Plan {
  name: string;
  priceLabel: string;
  color: 'purple' | 'blue' | 'dark';
  features: string[];
  buttonText: string;
  href: string;
  priceMonthly?: string;
  priceYearly?: string;
}

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      name: 'Basic',
      priceLabel: 'Free Trial',
      color: 'purple',
      features: [
        '100 credits/month',
        'Up to 5/day Real-time analytics',
        '100 Alerts integrations',
        'Mail support',
        '1 user login',
        '1 developer login',
      ],
      buttonText: 'Contact Sales',
      href: 'https://www.adaapt.ai/contact',
    },
    {
      name: 'Standard',
      priceLabel: '',
      color: 'blue',
      features: [
        '500+ credits on signup',
        'Real-time analytics',
        '500+ Alerts integrations',
        'Chat support',
        'Custom AI training & Support',
      ],
      buttonText: 'Contact Sales',
      href: 'https://www.adaapt.ai/contact',
    },
    {
      name: 'Premium',
      priceLabel: '',
      color: 'dark',
      features: [
        '750+ free credits on signup',
        'Real-time analytics',
        '1000+ Alerts integrations',
        'Dedicated customer manager',
        'Custom AI Training & Support',
        'Additional security features',
        'Predictive Analytics',
        'Real-time anomaly detection',
      ],
      buttonText: 'Contact Sales',
      href: 'https://www.adaapt.ai/contact',
    },
  ];

  const planStyles = {
    purple: {
      circle: 'bg-purple-accent',
      button: 'bg-purple-accent hover:bg-purple-accent/90 text-white',
    },
    blue: {
      circle: 'bg-primary',
      button: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    },
    dark: {
      circle: 'bg-text-primary',
      button: 'bg-text-primary hover:bg-text-primary/90 text-white',
    },
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Pricing plans for teams of all sizes
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text-secondary">Payment frequency</span>
            <div className="relative flex rounded-full p-1 bg-secondary border">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'relative w-full rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  billingCycle === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={cn(
                  'relative w-full rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  billingCycle === 'yearly'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted'
                )}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const styles = planStyles[plan.color];
            return (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl bg-secondary p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-4">
                    <div className={cn('w-8 h-8 rounded-full', styles.circle)}></div>
                    <h3 className="text-2xl font-semibold text-text-primary">{plan.name}</h3>
                  </div>
                  
                  {plan.priceLabel ? (
                    <p className="mt-4 text-4xl font-bold tracking-tight text-text-primary">{plan.priceLabel}</p>
                  ) : <div className="h-[52px] mt-4"></div> /* Placeholder to align cards */ }
                 
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 flex-shrink-0 text-success-green mr-3 mt-1" />
                        <span className="text-base text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href={plan.href}
                    className={cn(
                      'block w-full text-center rounded-lg py-3 text-sm font-semibold transition-colors',
                      styles.button
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
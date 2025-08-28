"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type Metric = {
  value: string;
  label: string;
  color: string;
};

type Testimonial = {
  logoUrl: string;
  logoAlt: string;
  title: string;
  metrics: Metric[];
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-562342-logo-7.png?",
    logoAlt: "Apollo Hospitals",
    title: "Apollo Hospitals leverages AI-driven analytics to optimize operations across 40+ branches",
    metrics: [
      { value: "95%", label: "Predictive Accuracy", color: "text-purple-600" },
      { value: "↓ 70%", label: "Decision Time", color: "text-blue-600" },
      { value: "10x", label: "Data Processing", color: "text-pink-500" },
      { value: "45%", label: "Cost Reduction", color: "text-green-500" },
    ],
    quote: "“Adaapt's AI-powered analytics platform has revolutionized our decision-making process. The intuitive dashboards provide real-time insights, allowing us to visualize complex data across 70+ branches instantly. The LLM-based assistant helps interpret trends and anomalies, enabling proactive problem-solving. With predictive modeling and automated reporting, we've significantly reduced operational costs and improved patient care efficiency. The ability to integrate multiple data sources into a single, coherent analytics ecosystem has been a game-changer for our strategic planning.”",
  },
  {
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-455466-driver-logistics.png?",
    logoAlt: "Driver Logistics",
    title: "Driver Logistics optimizes route planning with AI, reducing costs across 4+ regions",
    metrics: [
      { value: "↑ 31%", label: "Route Efficiency", color: "text-purple-600" },
      { value: "22%", label: "Fuel Savings", color: "text-blue-600" },
      { value: "89%", label: "Predictive Maintenance", color: "text-pink-500" },
      { value: "100%", label: "Real-time Tracking", color: "text-green-500" },
    ],
    quote: "“Adaapt's machine learning algorithms have transformed our logistics operations. The AI-driven route optimization has significantly cut fuel costs and delivery times. Our interactive dashboards provide real-time fleet analytics, enabling data-driven decisions on the fly. The natural language processing feature allows our team to query complex data sets conversationally, making insights accessible to all levels of our organization. The predictive maintenance model has dramatically reduced vehicle downtime. We're excited about the continuous improvements as the system learns from our growing dataset.”",
  },
  {
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-512013-universal-sompo.jpg?",
    logoAlt: "Universal Sompo General Insurance",
    title: "Universal Sompo leverages advanced AI to detect fraud and streamline claims processing",
    metrics: [
      { value: "↑ 87%", label: "Fraud Detection", color: "text-purple-600" },
      { value: "5x", label: "Claims Processing", color: "text-blue-600" },
      { value: "100%", label: "Risk Assessment", color: "text-pink-500" },
      { value: "↑ 42%", label: "Customer Satisfaction", color: "text-green-500" },
    ],
    quote: "“Adaapt's AI-powered analytics platform has revolutionized our fraud detection and claims processing. The advanced machine learning models analyze patterns across millions of data points, flagging potential fraud in real-time. Our interactive dashboards provide a comprehensive view of risk profiles and claims trends, enabling swift, data-driven decisions. The natural language AI assistant has made complex data analysis accessible to non-technical team members, democratizing insights across the organization. With predictive modeling, we've significantly improved our risk assessment accuracy and reduced false positives in fraud detection.”",
  },
];

const TestimonialCard = ({ logoUrl, logoAlt, title, metrics, quote }: Testimonial) => (
  <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg ring-1 ring-gray-900/5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
      <div>
        <div className="relative h-12 mb-6">
          <Image
            src={logoUrl}
            alt={logoAlt}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="h-10 w-auto"
          />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{title}</h3>
        <div className="mt-10 grid grid-cols-2 gap-8 text-center">
          {metrics.map((metric, i) => (
            <div key={i}>
              <div className={`text-4xl sm:text-5xl font-bold ${metric.color}`}>{metric.value}</div>
              <div className="mt-1 text-base text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <blockquote className="p-8 rounded-lg bg-indigo-50 border border-indigo-200">
          <p className="text-gray-700 leading-relaxed">&quot;{quote.substring(1, quote.length-1)}&quot;</p>
        </blockquote>
      </div>
    </div>
  </div>
);


export default function CustomerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="invisible">
            <TestimonialCard {...testimonials[activeIndex]} />
          </div>
          <div className="absolute inset-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
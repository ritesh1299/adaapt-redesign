import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  "No-code for data at scale, batch and streaming",
  "Gen AI help to search, understand, query, and build easily",
  "250+ connectors, 200+ operators, 50+ apps and solution blueprints",
  "Unified collaborative experience",
  "Best of open source and enterprise grade",
  "Production ready output from day 1",
];

const capabilities = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/database-3.svg?",
    title: "Data integration and engineering",
    bgColor: "bg-blue-50",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/images/next-000214-trend.png?",
    title: "Machine learning",
    bgColor: "bg-pink-50",
    iconBgColor: "bg-pink-100",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/ai-4.svg?",
    title: "Generative AI",
    bgColor: "bg-yellow-50",
    iconBgColor: "bg-yellow-100",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/real-time-5.svg?",
    title: "Action analytics",
    bgColor: "bg-green-50",
    iconBgColor: "bg-green-100",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/collaboration-6.svg?",
    title: "Workflow & business process automation",
    bgColor: "bg-purple-50",
    iconBgColor: "bg-purple-100",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/analytics-7.svg?",
    title: "Business apps",
    bgColor: "bg-sky-50",
    iconBgColor: "bg-sky-100",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl rounded-xl bg-secondary py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-4xl">
              Discover Our Key Features
            </h2>
            <p className="text-lg text-muted-foreground mb-16 text-center">
              Adaapt offers a suite of powerful features designed to enhance
              productivity and streamline decision-making. Our software connects
              multiple databases across departments, providing instant insights and
              trend analysis to help your business grow faster.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-success-green mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <h2 className="text-center text-base font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Capabilities
        </h2>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6 lg:gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className={`text-center p-4 rounded-lg shadow-sm ${capability.bgColor} transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div 
                className={`mx-auto h-16 w-16 flex items-center justify-center rounded-full mb-4 ${capability.iconBgColor}`}
              >
                <Image
                  src={capability.icon}
                  alt={capability.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground leading-snug">
                {capability.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
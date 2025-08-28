import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import CustomerLogos from '@/components/sections/customer-logos';
import MissionStatement from '@/components/sections/mission-statement';
import KeyFeatures from '@/components/sections/key-features';
import DecentralizedDataSection from '@/components/sections/decentralized-data';
import RoleBasedInsights from '@/components/sections/role-based-insights';
import CustomKpis from '@/components/sections/custom-kpis';
import SeamlessIntegrations from '@/components/sections/seamless-integrations';
import ValueBenefits from '@/components/sections/value-benefits';
import PlatformIntegrations from '@/components/sections/platform-integrations';
import CustomerTestimonials from '@/components/sections/customer-testimonials';
import PricingSection from '@/components/sections/pricing';
import Supporters from '@/components/sections/supporters';
import FinalCtaSection from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div className="bg-white">
          <CustomerLogos />
        </div>
        
        <MissionStatement />
        
        <KeyFeatures />
        
        <DecentralizedDataSection />
        
        <RoleBasedInsights />
        
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CustomKpis />
          </div>
        </div>
        
        <SeamlessIntegrations />
        
        <ValueBenefits />
        
        <PlatformIntegrations />
        
        <CustomerTestimonials />
        
        <PricingSection />
        
        <Supporters />
        
        <FinalCtaSection />
      </main>
      
      <Footer />
    </div>
  );
}
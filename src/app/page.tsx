"use client"

import BentoLayout from "@/components/BentoGrid";
import CTASection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import CompanyShowcase from "@/components/PartnersShowcase";
import PricingCards from "@/components/Pricings";
import PricingToggle from "@/components/PricingToggle";
import ProductDetails from "@/components/ProductDetails";
import { Hero } from "@/components/ui/animated-hero";
import WhyChooseSection from "@/components/WhyChooseUs";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scrollbar from "smooth-scrollbar";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && scrollRef.current) {
      if (!scrollRef.current.getAttribute('data-scrollbar-initialized')) {
        Scrollbar.init(scrollRef.current, { damping: 0.08, alwaysShowTracks: true });
        scrollRef.current.setAttribute('data-scrollbar-initialized', 'true');
      }
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ minHeight: '100vh' }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="block">
            <Hero />
            <BentoLayout />
            <WhyChooseSection />
            <CompanyShowcase />
            <ProductDetails />
            <FaqSection />
            <div className="w-full max-w-6xl mx-auto space-y-8 mt-8 pricing-section" id="pricing">
              <h2 className="text-4xl md:text-5xl font-medium text-center">Flexible and <span className="text-lime-400">Transparent Pricing</span> for  <br /> Teams of all sizes</h2>
              <div className="flex justify-center mb-12 mt-12">
                <PricingToggle value={billingCycle} onChange={setBillingCycle} />
              </div>
              <PricingCards billingCycle={billingCycle} />
            </div>
            <div className="px-12 max-sm:px-2 mt-40 max-sm:mt-20 mb-16">
              <CTASection />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import HeroSection from "@/components/sections/hero-section"
import ProblemSection from "@/components/sections/problem-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import FeaturesSection from "@/components/sections/features-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import DemoSection from "@/components/sections/demo-section"
import PricingSection from "@/components/sections/pricing-section"
import FinalCTASection from "@/components/sections/final-cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DemoSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

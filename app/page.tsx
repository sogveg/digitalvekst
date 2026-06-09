import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from "@/lib/structured-data"
import { HeroSection } from "@/components/home/hero-section"
import { ValuePillars } from "@/components/home/value-pillars"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServicesPreview } from "@/components/home/services-preview"
import { PricingPreview } from "@/components/home/pricing-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { MetricsSection } from "@/components/home/metrics-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTABand } from "@/components/home/cta-band"

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getOrganizationSchema(),
            getWebSiteSchema(),
            getLocalBusinessSchema(),
          ]),
        }}
      />
      <HeroSection />
      <ValuePillars />
      <HowItWorks />
      <ServicesPreview />
      <PricingPreview />
      <TestimonialsSection />
      <MetricsSection />
      <FAQSection />
      <CTABand />
    </>
  )
}

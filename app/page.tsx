import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema, getFAQSchema } from "@/lib/structured-data"
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
            getFAQSchema([
              { question: "Hvor lang tid tar det å lage en nettside?", answer: "De fleste prosjekter tar mellom 1-4 uker fra kartlegging til lansering. Større prosjekter kan ta lengre tid, avhengig av omfang og kompleksitet." },
              { question: "Hva er inkludert i prisen?", answer: "Prisen inkluderer design, utvikling, innholdsstøtte, og oppsett av Google Analytics og Google Business-profil. Se pakkeoversikten for detaljer om hva som er inkludert i hver pakke." },
              { question: "Må jeg betale alt på forhånd?", answer: "Vi fakturerer 50% ved oppstart og 50% ved lansering. Dette gir trygghet for begge parter og sikrer at vi leverer det vi har avtalt." },
              { question: "Hva skjer etter lansering?", answer: "Du kan velge vår driftsavtale som inkluderer hosting, backup, support og mindre endringer. Alternativt kan du drifte nettsiden selv." },
              { question: "Kan jeg gjøre endringer selv etterpå?", answer: "Ja, noen endringer kan gjøres, men da etter nærmere avtale." },
            ]),
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

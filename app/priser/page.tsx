import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Priser | Nettside fra kr 3 990,- eks mva",
  description: "Tydelige priser for nettside og digitale tjenester. Start fra kr 3 990,- eller Pro fra kr 5 990,- eks mva. Drift fra kr 990,- / mnd.",
  alternates: {
    canonical: "/priser",
  },
  openGraph: {
    title: "Priser | Digital Vekst",
    description: "Tydelige priser for nettside og digitale tjenester. Start fra kr 3 990,- eks mva.",
    url: "https://www.digitalvekst.no/priser",
  },
}

const packages = [
  {
    name: "Start",
    price: "kr 3 990,-",
    description: "For deg som trenger en enkel, profesjonell nettside raskt og effektivt.",
    features: [
      { text: "Opptil 4 sider", included: true },
      { text: "Mobiltilpasset design", included: true },
      { text: "Google Business-profil", included: true },
      { text: "Enkel SEO-struktur", included: true },
      { text: "1 revisjon", included: true },
      { text: "Google Analytics-oppsett", included: false },
      { text: "Konverteringsstruktur", included: false },
      { text: "Facebook-side", included: false },
      { text: "Hastighetsfokus", included: false },
    ],
  },
  {
    name: "Pro",
    price: "kr 5 990,-",
    description: "For deg som vil ha mer struktur, bedre konvertering og helhetlig digital tilstedeværelse.",
    highlighted: true,
    features: [
      { text: "5-8 sider", included: true },
      { text: "Mobiltilpasset design", included: true },
      { text: "Google Business-profil", included: true },
      { text: "SEO-grunnstruktur", included: true },
      { text: "3 revisjoner", included: true },
      { text: "Konverteringsstruktur", included: true },
      { text: "Facebook-side", included: true },
      { text: "Hastighetsfokus", included: true },
      { text: "Google Analytics-oppsett", included: false },
    ],
  },
  {
    name: "Drift",
    price: "kr 990,- / mnd",
    description: "Løpende vedlikehold og support etter lansering. Trygghet for deg, tid spart for oss begge.",
    features: [
      { text: "Hosting inkludert", included: true },
      { text: "SSL-sertifikat", included: true },
      { text: "Backup", included: true },
      { text: "Mindre endringer (30 min/mnd)", included: true },
      { text: "E-post support", included: true },
      { text: "Månedlig statusrapport", included: true },
      { text: "12 mnd binding", included: true },
    ],
  },
]

const addons = [
  {
    name: "Google Analytics",
    price: "kr 1 990,-",
    description: "Komplett oppsett av Google Analytics 4 med sporing av konverteringer og hendelser.",
  },
]

export default function PriserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getServiceSchema(),
            getBreadcrumbSchema([
              { name: "Hjem", url: "https://www.digitalvekst.no" },
              { name: "Priser", url: "https://www.digitalvekst.no/priser" },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Nettsidepakker – Digital Vekst",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Offer",
                    name: "Start",
                    description: "For deg som trenger en enkel, profesjonell nettside raskt og effektivt. Opptil 4 sider.",
                    price: "3990",
                    priceCurrency: "NOK",
                    seller: { "@type": "Organization", name: "Digital Vekst" },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Offer",
                    name: "Pro",
                    description: "Komplett nettløsning med 5-8 sider og konverteringsstruktur.",
                    price: "5990",
                    priceCurrency: "NOK",
                    seller: { "@type": "Organization", name: "Digital Vekst" },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Offer",
                    name: "Drift",
                    description: "Månedlig driftsavtale med hosting, backup og support.",
                    price: "990",
                    priceCurrency: "NOK",
                    seller: { "@type": "Organization", name: "Digital Vekst" },
                  },
                },
              ],
            },
          ]),
        }}
      />
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Priser
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tydelige priser, ingen skjulte kostnader. Du vet hva du får og hva det koster.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 border flex flex-col ${
                  pkg.highlighted
                    ? "border-accent bg-background shadow-sm ring-1 ring-accent"
                    : "border-border bg-background"
                }`}
              >
                {pkg.highlighted && (
                  <span className="text-xs font-medium text-accent mb-4">Mest populær</span>
                )}
                <h2 className="text-xl font-semibold text-foreground">{pkg.name}</h2>
                <p className="mt-4 text-3xl font-semibold text-foreground">{pkg.price}</p>
                <p className="text-sm text-muted-foreground">eks. mva</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
                
                <ul className="mt-8 space-y-3 flex-grow" role="list">
                  {pkg.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <>
                          <Check className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                          <span className="text-foreground">{feature.text}</span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" aria-hidden="true" />
                          <span className="text-muted-foreground/50">{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button 
                    asChild 
                    className={`w-full ${
                      pkg.highlighted 
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    <Link href="/kontakt">Kom i gang</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Addons */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-8 text-center">Tilleggstjenester</h2>
            <div className="grid grid-cols-1 gap-6">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="rounded-lg p-6 border border-border bg-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="font-medium text-foreground">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{addon.description}</p>
                  </div>
                  <p className="text-xl font-semibold text-foreground whitespace-nowrap">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-8 text-center">Betalingsbetingelser</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium text-foreground mb-2">Forskudd</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  50% faktureres ved oppstart. Resterende 50% faktureres ved lansering.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium text-foreground mb-2">Endringer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tydelige rammer for antall revisjoner. Større endringer faktureres separat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-8 text-center">Spørsmål om priser</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Hva hvis jeg trenger mer enn 8 sider?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vi gir deg gjerne et tilpasset tilbud. Kontakt oss for en uforpliktende prat om ditt prosjekt.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Må jeg ha driftsavtale?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nei, driftsavtalen er valgfri. Men vi anbefaler det for trygghet og løpende support.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Hva koster ekstra endringer?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mindre endringer utover inkludert tid faktureres med 1 200,- / time. Vi avtaler alltid på forhånd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            Klar for å komme i gang?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Book et møte, så går vi gjennom behovene dine og finner riktig pakke.
          </p>
          <div className="mt-8">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/kontakt">Bestill møte</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

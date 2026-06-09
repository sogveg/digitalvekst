import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, BarChart3, MapPin, Facebook, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Tjenester | Nettside, SEO, Google Business og mer",
  description: "Vi leverer nettside, Google Analytics, Google Business, Facebook-side og SEO. Alt du trenger for digital synlighet for din bedrift.",
  alternates: {
    canonical: "/tjenester",
  },
  openGraph: {
    title: "Tjenester | Digital Vekst",
    description: "Vi leverer nettside, Google Analytics, Google Business, Facebook-side og SEO. Alt du trenger for digital synlighet.",
    url: "https://www.digitalvekst.no/tjenester",
  },
}

const services = [
  {
    icon: Globe,
    title: "Nettside / webapp",
    description: "En moderne, rask og mobiltilpasset nettside som representerer din bedrift profesjonelt.",
    benefits: [
      "Skreddersydd design tilpasset din merkevare",
      "Responsivt og mobilvennlig",
      "Optimalisert for hastighet og ytelse",
      "Enkel å oppdatere selv",
    ],
  },
  {
    icon: BarChart3,
    title: "Oppsett: Google Analytics",
    description: "Få innsikt i hvordan besøkende bruker nettsiden din. Se hva som fungerer og hvor du kan forbedre deg.",
    benefits: [
      "Sporing av besøkende og trafikkilder",
      "Konverteringsmåling",
      "Brukeratferd og navigasjonsmønstre",
      "Månedlige rapporter (valgfritt)",
    ],
  },
  {
    icon: MapPin,
    title: "Oppsett: Google Business-profil",
    description: "Bli synlig i lokale søk. Når noen søker etter din type tjeneste i ditt område, vil du dukke opp.",
    benefits: [
      "Synlighet i Google Maps",
      "Lokale søkeresultater",
      "Kontaktinfo og åpningstider",
      "Kundeanmeldelser",
    ],
  },
  {
    icon: Facebook,
    title: "Oppsett: Facebook-side",
    description: "En profesjonell Facebook-side som er klar til bruk. Riktig oppsett fra start.",
    benefits: [
      "Profesjonell bedriftsprofil",
      "Riktig kategorisering",
      "Kontaktinfo og lenke til nettside",
      "Grunnlag for annonser",
    ],
  },
  {
    icon: Search,
    title: "Grunnleggende SEO-struktur",
    description: "Teknisk SEO-grunnlag som gir Google det den trenger for å indeksere og rangere nettsiden din.",
    benefits: [
      "Optimaliserte sidetitler og metabeskrivelser",
      "Riktig heading-struktur",
      "Sitemap og robots.txt",
      "Schema markup for bedre synlighet",
    ],
  },
]

export default function TjenesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Tjenester
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Alt du trenger for å etablere en profesjonell digital tilstedeværelse. 
              Vi leverer konkrete resultater, ikke bare pene bilder.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index !== services.length - 1 ? "pb-16 border-b border-border" : ""
                }`}
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-6">
                    <service.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-sm font-medium text-foreground mb-4">Dette får du:</h3>
                  <ul className="space-y-3" role="list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            Usikker på hva du trenger?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Book et kort møte, så hjelper vi deg med å finne riktig løsning for din bedrift.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/kontakt">Bestill møte</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-secondary"
            >
              <Link href="/priser">Se priser</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

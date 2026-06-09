import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Eye, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Om oss | Webbyrå med fokus på resultater",
  description: "Digital Vekst bygger strukturerte nettsider som skaper synlighet og konvertering for norske bedrifter. Vi fokuserer på resultater, ikke bare design.",
  alternates: {
    canonical: "/om-oss",
  },
  openGraph: {
    title: "Om oss | Digital Vekst",
    description: "Digital Vekst bygger strukturerte nettsider som skaper synlighet og konvertering.",
    url: "https://www.digitalvekst.no/om-oss",
  },
}

const values = [
  {
    icon: LayoutGrid,
    title: "Struktur",
    description: "Vi bygger nettsider med tydelig informasjonsarkitektur og konverteringslogikk. Ingenting er tilfeldig.",
  },
  {
    icon: Eye,
    title: "Tydelighet",
    description: "Klar kommunikasjon i alle ledd. Du vet alltid hva du får, hva det koster, og når det er levert.",
  },
  {
    icon: TrendingUp,
    title: "Effekt",
    description: "Vi måler suksess i resultater. Flere henvendelser, bedre synlighet, økt konvertering.",
  },
]

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Om oss
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vi selger ikke bare design. Vi bygger struktur for vekst.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Vår tilnærming</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Digital Vekst ble startet med en enkel observasjon: mange bedrifter bruker mye penger på nettsider 
                  som ser bra ut, men som ikke leverer resultater.
                </p>
                <p>
                  Vi gjør det annerledes. Hver nettside vi lager starter med et spørsmål: hva skal denne nettsiden 
                  oppnå for din bedrift? Svaret styrer alt fra struktur til design.
                </p>
                <p>
                  Vi tror på nordisk enkelhet. Rene linjer, tydelig kommunikasjon, og fokus på det som faktisk 
                  betyr noe for dine kunder.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Hva vi står for</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vi liker å holde ting enkelt. Ingen lange møter uten agenda. Ingen uklare prismodeller. 
                  Ingen prosjekter som aldri tar slutt.
                </p>
                <p>
                  Når du jobber med oss, får du en sparringpartner som forstår at din tid er verdifull. 
                  Vi er direkte, effektive, og leverer det vi lover.
                </p>
                <p>
                  Resultatet er nettsider som ikke bare ser profesjonelle ut, men som faktisk bidrar til 
                  å bygge din bedrift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-12 text-center">Våre verdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                  <value.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            La oss snakke om ditt prosjekt
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Vil du vite mer om hvordan vi kan hjelpe deg? Ta kontakt for en uforpliktende prat.
          </p>
          <div className="mt-8">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/kontakt">Kontakt oss</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

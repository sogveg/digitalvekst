import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Start",
    price: "kr 3 990,-",
    description: "For deg som trenger en enkel, profesjonell nettside.",
    features: [
      "Opptil 4 sider",
      "Mobiltilpasset",
      "Google Business",
      "Enkel SEO",
    ],
  },
  {
    name: "Pro",
    price: "kr 5 990,-",
    description: "For deg som vil ha mer struktur og bedre konvertering.",
    features: [
      "5-8 sider",
      "Konverteringsstruktur",
      "Hastighetsfokus",
      "SEO-grunnstruktur",
    ],
    highlighted: true,
  },
  {
    name: "Drift",
    price: "kr 990,- / mnd",
    description: "Løpende vedlikehold og support etter lansering.",
    features: [
      "Hosting inkludert",
      "Mindre endringer",
      "Backup",
      "Support",
    ],
  },
]

export function PricingPreview() {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            Tydelige priser, ingen overraskelser
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Velg pakken som passer din bedrift. Alle priser er eks. mva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg p-8 border ${
                pkg.highlighted
                  ? "border-accent bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="text-lg font-medium text-foreground">{pkg.name}</h3>
              <p className="mt-4 text-3xl font-semibold text-foreground">{pkg.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
              <ul className="mt-6 space-y-3" role="list">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-secondary"
          >
            <Link href="/priser">Se fullstendige pakker</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

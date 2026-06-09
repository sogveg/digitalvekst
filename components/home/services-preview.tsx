import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  "Nettside / webapp",
  "Google Analytics-oppsett",
  "Google Business-profil",
  "Facebook-side",
  "Grunnleggende SEO",
]

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
              Alt du trenger for å bli synlig på nett
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vi leverer mer enn bare design. Du får en komplett digital tilstedeværelse med nettside, 
              søkemotoroptimalisering og oppsett av viktige profiler.
            </p>
            <Button 
              asChild 
              variant="link" 
              className="mt-6 p-0 h-auto text-accent hover:text-accent/80"
            >
              <Link href="/tjenester" className="inline-flex items-center gap-2">
                Se alle tjenester
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border">
            <ul className="space-y-4" role="list">
              {services.map((service) => (
                <li 
                  key={service} 
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

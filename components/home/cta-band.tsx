import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTABand() {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
          Klar for å ta neste steg?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Book et uforpliktende møte, så finner vi ut om vi er rett match for ditt prosjekt.
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
  )
}

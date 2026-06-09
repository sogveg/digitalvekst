import { LayoutGrid, Search, Clock, BarChart3 } from "lucide-react"

const pillars = [
  {
    icon: LayoutGrid,
    title: "Struktur som konverterer",
    description: "Nettsider bygget med konverteringslogikk i bunn. Hver side har en tydelig hensikt.",
  },
  {
    icon: Search,
    title: "Synlighet på Google",
    description: "Grunnleggende SEO-struktur og teknisk oppsett som gir deg bedre synlighet over tid.",
  },
  {
    icon: Clock,
    title: "Rask levering",
    description: "Effektiv prosess fra kartlegging til lansering. Du får en ferdig nettside, ikke et uendelig prosjekt.",
  },
  {
    icon: BarChart3,
    title: "Målbar effekt",
    description: "Google Analytics-oppsett fra dag én. Se hva som fungerer og hva som kan forbedres.",
  },
]

export function ValuePillars() {
  return (
    <section className="pt-20 pb-20 sm:pt-24 sm:pb-24 bg-secondary relative">
      {/* Top gradient that matches the hero fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, var(--secondary), var(--secondary))`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            Hvorfor velge Digital Vekst?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center sm:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                <pillar.icon className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom fade from secondary to background */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, var(--secondary), var(--background))`,
        }}
      />
    </section>
  )
}

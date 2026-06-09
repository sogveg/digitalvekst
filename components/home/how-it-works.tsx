const steps = [
  {
    number: "01",
    title: "Kartlegging",
    description: "Vi starter med å forstå din bedrift, målgruppe og mål. Hva skal nettsiden oppnå? Hvem skal den snakke til?",
  },
  {
    number: "02",
    title: "Bygg & lansering",
    description: "Vi designer og utvikler nettsiden med fokus på struktur, hastighet og brukervennlighet. Klar for lansering.",
  },
  {
    number: "03",
    title: "Drift & vekst",
    description: "Etter lansering følger vi opp med hosting, vedlikehold og mindre justeringer. Du har støtte når du trenger det.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            Slik jobber vi
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            En strukturert prosess som tar deg fra ide til ferdig nettside.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-semibold text-border">{step.number}</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

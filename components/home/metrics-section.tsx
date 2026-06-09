const metrics = [
  { value: "10+", label: "Leverte prosjekter" },
  { value: "97%", label: "Kundetilfredshet" },
  { value: "1-3 uker", label: "Gjennomsnittlig leveringstid" },
  { value: "24t", label: "Responsiv support" },
]

export function MetricsSection() {
  return (
    <section className="py-20 sm:py-24 bg-primary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground text-balance">
            Resultater som teller
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold text-primary-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

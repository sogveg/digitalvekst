import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Calendar, Mail, Clock } from "lucide-react"
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Kontakt oss | Book et gratis møte",
  description: "Ta kontakt med Digital Vekst. Book et gratis møte eller send oss en melding. Vi svarer innen 24 timer. Tlf: 911 35 991.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt oss | Digital Vekst",
    description: "Ta kontakt med Digital Vekst. Book et gratis møte eller send oss en melding.",
    url: "https://www.digitalvekst.no/kontakt",
  },
}

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getLocalBusinessSchema(),
            getBreadcrumbSchema([
              { name: "Hjem", url: "https://www.digitalvekst.no" },
              { name: "Kontakt", url: "https://www.digitalvekst.no/kontakt" },
            ]),
          ]),
        }}
      />
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Kontakt oss
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Klar for å ta neste steg? Send oss en melding eller book et møte direkte.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Send oss en melding</h2>
              <ContactForm />
            </div>

            {/* Info & Booking */}
            <div className="space-y-12">
              {/* Booking Section */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Book et møte</h2>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Gratis 30 min konsultasjon</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Book et uforpliktende videomøte hvor vi går gjennom dine behov og muligheter.
                      </p>
                    </div>
                  </div>
                  {/* Calendar embed from CRM */}
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://v0-crm-dashboard-five-iota.vercel.app/book/embed"
                      title="Book et møte med Digital Vekst"
                      width="100%"
                      height="520"
                      style={{ border: "none", borderRadius: "8px", overflow: "hidden" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Hva skjer videre?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Svar innen 24 timer</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Vi leser alle henvendelser og svarer på hverdager innen ett døgn.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Forslag til neste steg</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Vi gir deg en ærlig vurdering og forslag til hvordan vi kan hjelpe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Direkte kontakt</h2>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>E-post: post@digitalvekst.no</p>
                  <p>Telefon: 911 35 991</p>
                  <p>Sted: Bergen, Norge</p>
                  <p>Org.nr: 920 241 255</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

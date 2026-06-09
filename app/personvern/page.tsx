import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personvernpolicy",
  description: "Personvernpolicy for Digital Vekst. Les om hvordan VP gruppen AS behandler personopplysninger og informasjonskapsler.",
  alternates: {
    canonical: "/personvern",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PersonvernPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Personvernpolicy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sist oppdatert: 5. mars 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-12">
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Digital Vekst er opptatt av å beskytte ditt personvern. Denne personvernpolicyen forklarer 
                hvilke opplysninger vi samler inn, hvorfor vi samler dem, og hvordan vi bruker dem.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Merk: Dette er en forenklet oversikt og utgjør ikke juridisk rådgivning. 
                Kontakt oss hvis du har spørsmål.
              </p>
            </div>

            {/* Behandlingsansvarlig */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Behandlingsansvarlig</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Vekst er en tjeneste levert av VP gruppen AS. VP gruppen AS er 
                behandlingsansvarlig for personopplysningene vi samler inn gjennom nettsiden 
                og tjenestene til Digital Vekst.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Tjeneste: Digital Vekst</p>
                <p>Selskap: VP gruppen AS</p>
                <p>Org.nr: 920 241 255</p>
                <p>E-post: post@digitalvekst.no</p>
              </div>
            </div>

            {/* Informasjonskapsler */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Informasjonskapsler (cookies)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vi bruker informasjonskapsler for å forbedre brukeropplevelsen på nettsiden vår. 
                Dette inkluderer:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  <strong className="text-foreground">Nødvendige cookies:</strong> For at nettsiden skal fungere teknisk
                </li>
                <li>
                  <strong className="text-foreground">Analyse-cookies:</strong> For å forstå hvordan besøkende bruker nettsiden (Google Analytics)
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Du kan administrere cookies i din nettleser. Vær oppmerksom på at noen funksjoner 
                på nettsiden kanskje ikke fungerer optimalt hvis du deaktiverer cookies.
              </p>
            </div>

            {/* Analytics */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Analyse og statistikk</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vi bruker Google Analytics for å samle anonymisert statistikk om besøkende på nettsiden. 
                Dette hjelper oss å forstå hvordan nettsiden brukes og hvordan vi kan forbedre den.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Informasjonen vi samler inn inkluderer:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
                <li>Hvilke sider som besøkes</li>
                <li>Hvor lenge besøkende er på siden</li>
                <li>Hvilken enhet og nettleser som brukes</li>
                <li>Geografisk område (land/region)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                IP-adresser anonymiseres før de lagres. Vi deler ikke denne informasjonen med tredjeparter 
                utover Google.
              </p>
            </div>

            {/* Kontaktskjema */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Kontaktskjema</h2>
              <p className="text-muted-foreground leading-relaxed">
                Når du sender oss en henvendelse gjennom kontaktskjemaet vårt, samler vi inn 
                følgende opplysninger:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
                <li>Navn</li>
                <li>E-postadresse</li>
                <li>Telefonnummer (valgfritt)</li>
                <li>Bedriftsnavn (valgfritt)</li>
                <li>Meldingsinnhold</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Disse opplysningene brukes kun til å svare på din henvendelse og eventuelt følge opp 
                med relevant informasjon om våre tjenester.
              </p>
            </div>

            {/* Lagring */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Lagring og sletting</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vi lagrer personopplysninger kun så lenge det er nødvendig for formålet de ble 
                samlet inn for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
                <li>Henvendelser fra kontaktskjema: Slettes etter 2 år med mindre det etableres et kundeforhold</li>
                <li>Kundeinformasjon: Oppbevares i henhold til regnskapsloven (5 år etter avsluttet kundeforhold)</li>
                <li>Analyse-data: Anonymisert og aggregert, ingen personidentifiserbar informasjon lagres</li>
              </ul>
            </div>

            {/* Dine rettigheter */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Dine rettigheter</h2>
              <p className="text-muted-foreground leading-relaxed">
                Du har rett til å:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
                <li>Be om innsyn i hvilke personopplysninger vi har om deg</li>
                <li>Be om at feilaktige opplysninger rettes</li>
                <li>Be om at opplysninger slettes</li>
                <li>Protestere mot behandling av dine opplysninger</li>
                <li>Klage til Datatilsynet hvis du mener vi bryter personvernreglene</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Kontakt oss på post@digitalvekst.no hvis du ønsker å utøve dine rettigheter.
              </p>
            </div>

            {/* Endringer */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Endringer i personvernpolicyen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vi kan oppdatere denne personvernpolicyen fra tid til annen. Vesentlige endringer 
                vil bli kommunisert på nettsiden. Vi oppfordrer deg til å sjekke denne siden 
                regelmessig for oppdateringer.
              </p>
            </div>

            {/* Kontakt */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Kontakt oss</h2>
              <p className="text-muted-foreground leading-relaxed">
                Har du spørsmål om vår behandling av personopplysninger? Ta kontakt:
              </p>
              <div className="text-sm text-muted-foreground">
                <p>E-post: post@digitalvekst.no</p>
                <p>Vi svarer innen 24 timer på hverdager.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

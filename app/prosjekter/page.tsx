import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Prosjekter | Nettsider vi har levert",
  description: "Se våre tidligere prosjekter og nettsider vi har laget for norske bedrifter. Webdesign, utvikling og SEO for bl.a. Motoro AS og Smart Dekk AS.",
  alternates: {
    canonical: "/prosjekter",
  },
  openGraph: {
    title: "Prosjekter | Digital Vekst",
    description: "Se våre tidligere prosjekter og nettsider vi har laget for norske bedrifter.",
    url: "https://www.digitalvekst.no/prosjekter",
  },
}

const projects = [
  {
    title: "Motoro AS",
    description: "Profesjonell nettside for bilforhandler med fokus på kjøretøyvisning og enkel kontakt.",
    category: "Webdesign",
    tags: ["Bil", "Galleri", "Lead-generering", "Annonsering", "Next.js", "Mobiloptimalisert", "Google My Business", "Meta Setup"],
    image: "/projects/motoro.png",
    results: "+120% flere henvendelser",
    url: "https://www.motoro.no",
  },
  {
    title: "Smart Dekk AS",
    description: "Komplett nettløsning for dekkforhandler med produktkatalog og online booking.",
    category: "Web + System",
    tags: ["E-handel", "Booking", "SEO", "Mobiloptimalisert", "Google My Business", "Meta Setup", "Artikkel-modul"],
    image: "/projects/smartdekk.png",
    results: "50+ bookinger per måned",
    url: "https://www.smartdekk.no",
  },
  {
    title: "IT-Konsulent",
    description: "Personlig nettside for senior IT-konsulent med 30 års erfaring innen forsikringsbransjens bakgrunnsystemer.",
    category: "Personlig side",
    tags: ["Enkeltpersonforetak", "Konsulent", "Minimalistisk", "Dark mode", "Next.js", "Mobiloptimalisert"],
    image: "/projects/konsulent.png",
    results: "Profesjonell digital profil",
  },
  {
    title: "Rørlegger Bergen AS",
    description: "Profesjonell nettside for rørleggerfirma med 24/7 vakttelefon, booking og prosjektgalleri.",
    category: "Web + System",
    tags: ["Rørlegger", "24/7 Vakttelefon", "Booking", "Prosjekter", "Lead-generering", "Mobiloptimalisert", "SEO"],
    image: "/projects/rorlegger-bergen.png",
    results: "70% økning i henvendelser",
  },
  {
    title: "TinyRent",
    description: "Utleie av premium baby- og barneutstyr i Bergen. Komplett plattform med produktkatalog, bestilling, brukerkontoer og hjemlevering.",
    category: "Web + System",
    tags: ["Utleie", "E-handel", "Booking", "Next.js", "Mobiloptimalisert", "Bergen", "Tospråklig"],
    image: "/projects/tinyrent.png",
    results: "Lansert i Bergen 2025",
    url: "https://www.tinyrent.no",
  },
  {
    title: "RenRute",
    description: "Abonnementsbasert vindusvasking i Bergen. Kunder bestiller én gang og får rene ruter hele året — uten kjemikalier, med el-varebil.",
    category: "Web + System",
    tags: ["Abonnement", "Booking", "Lokal tjeneste", "Bergen", "Lead-generering", "Mobiloptimalisert", "SEO"],
    image: "/projects/renrute.png",
    results: "Voksende abonnentbase",
    url: "https://www.renrute.no",
  },
  {
    title: "Fana Bilpleie",
    description: "Profesjonell nettside for Bergens beste bilpleie. Bilvask, keramisk coating og båtpleie — med online booking, gratis lånebil og henting/levering.",
    category: "Web + Booking",
    tags: ["Bilpleie", "Båt", "Booking", "Bergen", "Lead-generering", "Mobiloptimalisert", "Google My Business"],
    image: "/projects/fana-bilpleie.png",
    results: "4,6 ⭐ på Google",
    url: "https://fana-bilpleie.vercel.app",
  },
  {
    title: "Noen Ord",
    description: "Personlig taleskriving — hjelper folk å sette ord på det de føler. AI-assistert talegenerator med personlige spørsmål og skreddersydde utkast.",
    category: "Web + AI",
    tags: ["AI", "Taleskriving", "SaaS", "Next.js", "Mobiloptimalisert", "Abonnement"],
    image: "/projects/noenord.png",
    results: "Lansert 2025",
    url: "https://www.noenord.no",
  },
  {
    title: "Ella's Skatter",
    description: "Nettbutikk for håndlagde babyleker, scrunchies og kroner av gjenbrukte tekstiler. Hvert produkt er unikt — laget av Ella selv.",
    category: "E-handel",
    tags: ["Nettbutikk", "Håndlaget", "Bærekraft", "Mobiloptimalisert", "Artikler", "Bestilling"],
    image: "/projects/ellas-skatter.png",
    results: "Gratis frakt over 450 kr",
    url: "https://www.ellasskatter.no",
  },
  {
    title: "Ditt prosjekt?",
    description: "Vi hjelper bedrifter med å skape nettsider som konverterer. Ta kontakt for en uforpliktende prat.",
    category: "Ta kontakt",
    tags: ["Din bransje", "Dine behov", "Ditt budsjett"],
    image: "",
    results: "La oss snakke!",
    isCta: true,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
            Våre prosjekter
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Et utvalg nettsider og digitale løsninger vi har levert til fornøyde kunder over hele Norge.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              "isCta" in project && project.isCta ? (
                <Link href="/kontakt" key={index}>
                  <Card className="group bg-primary text-primary-foreground overflow-hidden hover:shadow-xl transition-all duration-300 h-full cursor-pointer border-primary">
                    <div className="aspect-video bg-accent/20 relative overflow-hidden flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/30 flex items-center justify-center">
                          <ArrowRight className="h-8 w-8 text-accent" />
                        </div>
                        <span className="text-xl font-semibold">{project.title}</span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent text-accent-foreground">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        Ta kontakt i dag
                      </h3>
                      <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-primary-foreground/10 text-primary-foreground/90 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-primary-foreground/20">
                        <p className="text-sm font-medium text-accent flex items-center gap-2">
                          {project.results}
                          <ArrowRight className="h-4 w-4" />
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
              <Card 
                key={index}
                className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  {project.image.startsWith("/projects/") ? (
                    <Image
                      src={project.image}
                      alt={`Skjermbilde av ${project.title} nettside`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Resultat: </span>
                      <span className="text-accent font-medium">{project.results}</span>
                    </p>
                    {"url" in project && project.url && (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        Besøk
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Klar for å starte ditt prosjekt?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt for en uforpliktende prat om hvordan vi kan hjelpe din bedrift med digital vekst.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/kontakt">
              Start samtalen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Digital Vekst</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strukturerte nettsider som skaper synlighet og konvertering.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Lenker</h4>
            <nav className="flex flex-col gap-2" aria-label="Bunntekstnavigasjon">
              <Link 
                href="/personvern" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Personvern
              </Link>
              <Link 
                href="/kontakt" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Organization Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Kontaktinfo</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Digital Vekst</p>
              <p>Org.nr: 920 241 255</p>
              <p>post@digitalvekst.no</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Digital Vekst. Alle rettigheter reservert.
          </p>
          <a
            href="https://v0-crm-dashboard-five-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  )
}

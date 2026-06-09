"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-svh overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Accent glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 65% 45%, rgba(14, 116, 144, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(14, 116, 144, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `linear-gradient(to top, var(--secondary) 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-svh">
        <div className="max-w-3xl pt-24 pb-32 sm:pt-32 sm:pb-40">
          
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent">Vi tar inn nye prosjekter</span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.08] transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nettsider som{" "}
            <br className="hidden sm:block" />
            <span className="text-accent">skaper vekst</span>{" "}
            for din bedrift.
          </h1>

          {/* Subheadline */}
          <p 
            className={`mt-6 text-base sm:text-lg lg:text-xl text-primary-foreground/60 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Fra strategi til ferdig nettside. Design, SEO og synlighet som konverterer besøkende til kunder.
          </p>

          {/* CTAs */}
          <div 
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[450ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-13 px-8 text-base font-semibold shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Bestill gratis møte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 h-13 px-8 text-base font-medium transition-colors"
            >
              <Link href="/priser">Se pakker og priser</Link>
            </Button>
          </div>

          {/* Trust bar */}
          <div 
            className={`mt-14 pt-8 border-t border-primary-foreground/10 transition-all duration-700 delay-[600ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">10+</p>
                <p className="text-xs sm:text-sm text-primary-foreground/50 mt-1">Leverte prosjekter</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">97%</p>
                <p className="text-xs sm:text-sm text-primary-foreground/50 mt-1">Kundetilfredshet</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">1-3</p>
                <p className="text-xs sm:text-sm text-primary-foreground/50 mt-1">Ukers leveringstid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/70 font-semibold">Scroll</span>
          <ChevronDown className="h-5 w-5 text-accent" />
        </div>
      </div>
    </section>
  )
}

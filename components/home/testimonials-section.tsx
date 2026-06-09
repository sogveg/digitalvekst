"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Digital Vekst leverte en nettside som overgikk alle forventninger. Profesjonelle, raske og enkle å samarbeide med.",
    author: "Vegard Sognefest",
    company: "Smart Dekk AS",
    role: "Daglig leder",
  },
  {
    quote: "Endelig en webbyrå som forstår hva små bedrifter trenger. Nettsiden vår genererer nå reelle henvendelser hver uke.",
    author: "Joar Dyrstad",
    company: "Rørlegger Bergen AS",
    role: "Daglig leder",
  },
  {
    quote: "Fra første møte til ferdig nettside tok det bare 3 uker. Resultatet er moderne, raskt og SEO-optimalisert.",
    author: "Kristine Haugen",
    company: "Haugen Fysioterapi",
    role: "Grunnlegger",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Hva kundene sier
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi er stolte av å hjelpe norske bedrifter med å vokse digitalt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-accent mb-4 opacity-60" />
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Hvor lang tid tar det å lage en nettside?",
    answer: "De fleste prosjekter tar mellom 1-4 uker fra kartlegging til lansering. Større prosjekter kan ta lengre tid, avhengig av omfang og kompleksitet.",
  },
  {
    question: "Hva er inkludert i prisen?",
    answer: "Prisen inkluderer design, utvikling, innholdsstøtte, og oppsett av Google Analytics og Google Business-profil. Se pakkeoversikten for detaljer om hva som er inkludert i hver pakke.",
  },
  {
    question: "Må jeg betale alt på forhånd?",
    answer: "Vi fakturerer 50% ved oppstart og 50% ved lansering. Dette gir trygghet for begge parter og sikrer at vi leverer det vi har avtalt.",
  },
  {
    question: "Hva skjer etter lansering?",
    answer: "Du kan velge vår driftsavtale som inkluderer hosting, backup, support og mindre endringer. Alternativt kan du drifte nettsiden selv.",
  },
  {
    question: "Kan jeg gjøre endringer selv etterpå?",
    answer: "Ja, noen endringer kan gjøres, men da etter nærmere avtale.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12 text-balance">
            Vanlige spørsmål
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-foreground/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { trackCTA } from "@/lib/tracking"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || "Noe gikk galt.")
      }

      trackCTA("contact_form_submit")
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kunne ikke sende meldingen. Prøv igjen senere.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-background rounded-lg p-8 border border-border text-center">
        <h3 className="text-lg font-medium text-foreground mb-2">Takk for din henvendelse</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Vi har mottatt meldingen din og svarer innen 24 timer på hverdager.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Navn *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ditt navn"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Bedrift</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Din bedrift"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-post *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="din@epost.no"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+47 XXX XX XXX"
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Melding *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Fortell oss kort om prosjektet ditt..."
          rows={5}
          className="bg-background resize-none"
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {isSubmitting ? "Sender..." : "Send melding"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Ved å sende dette skjemaet godtar du vår{" "}
        <a href="/personvern" className="underline hover:text-foreground">
          personvernpolicy
        </a>
        .
      </p>
    </form>
  )
}

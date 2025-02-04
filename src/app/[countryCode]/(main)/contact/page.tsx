    import { Suspense } from 'react'
import ContactTemplate from "@modules/contact/templates"

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactTemplate />
    </Suspense>
  )
}
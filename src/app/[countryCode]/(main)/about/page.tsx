import { Suspense } from 'react'
import AboutTemplate from "@modules/about/templates"

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutTemplate />
    </Suspense>
  )
}

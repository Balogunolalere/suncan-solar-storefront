'use client'

import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Sun, Shield, Headset, LightbulbFilament } from "@phosphor-icons/react"

const FEATURES = [
  {
    icon: <Shield size={32} weight="duotone" />,
    title: "Quality Assurance",
    description: "Rigorous testing and certification processes ensure the highest standards"
  },
  {
    icon: <Headset size={32} weight="duotone" />,
    title: "Expert Support",
    description: "Comprehensive technical support and consultation"
  },
  {
    icon: <LightbulbFilament size={32} weight="duotone" />,
    title: "Innovation",
    description: "Continuous updates with latest solar technology"
  },
  {
    icon: <Sun size={32} weight="duotone" />,
    title: "Sustainability",
    description: "Committed to environmental responsibility"
  }
] as const

const TIMELINE = [
  {
    year: "2013",
    description: "Founded with a vision to revolutionize solar energy access"
  },
  {
    year: "2017",
    description: "Expanded to international markets"
  },
  {
    year: "2023",
    description: "Leading wholesale provider with global presence"
  }
] as const

const AboutTemplate = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-primary-light/10 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="content-container mb-16 flex flex-col items-center relative z-10">
          <Heading level="h1" className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 text-center">
            About Suncan Solar Store
          </Heading>
          <Text className="text-gray-600 text-xl text-center max-w-3xl animate-fade-in-up">
            Leading the renewable energy revolution with cutting-edge solar solutions and unparalleled expertise.
          </Text>
        </div>
      </div>

      <div className="content-container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Journey Section */}
          <section className="mb-24 animate-fade-in-up">
            <Heading level="h2" className="text-3xl font-bold text-primary-dark mb-8">
              Our Journey
            </Heading>
            <div className="relative pl-8 border-l-2 border-primary/20">
              {TIMELINE.map((item) => (
                <div key={item.year} className="mb-12 last:mb-0">
                  <div className="absolute left-[-9px] w-4 h-4 rounded-full bg-primary" />
                  <Text className="text-xl font-semibold text-primary-dark mb-2">{item.year}</Text>
                  <Text className="text-gray-600">{item.description}</Text>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {FEATURES.map((feature, index) => (
              <div key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="text-primary mb-4 p-3 bg-primary-light/10 w-fit rounded-lg">
                  {feature.icon}
                </div>
                <Heading level="h3" className="text-xl font-semibold text-primary-dark mb-3">
                  {feature.title}
                </Heading>
                <Text className="text-gray-600">
                  {feature.description}
                </Text>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-light/20 via-secondary-light/10 to-accent-light/20 py-24">
        <div className="content-container text-center">
          <Heading level="h2" className="text-3xl font-bold text-primary-dark mb-6">
            Ready to Start Your Solar Journey?
          </Heading>
          <Text className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our team to explore our wholesale solar solutions and find the perfect fit for your business.
          </Text>
          <LocalizedClientLink href="/contact">
            <Button
              variant="primary"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-primary/30"
            >
              Contact Us Today
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default AboutTemplate

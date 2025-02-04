'use client'

import { Button, Heading, Text } from "@medusajs/ui"
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react"
import { FormEvent, useState } from "react"

const CONTACT_INFO = [
  {
    icon: <Phone size={32} weight="duotone" />,
    title: "Phone",
    info: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <EnvelopeSimple size={32} weight="duotone" />,
    title: "Email",
    info: "sales@suncan.com",
    link: "mailto:sales@suncan.com"
  },
  {
    icon: <MapPin size={32} weight="duotone" />,
    title: "Office",
    info: "123 Solar Street, CA 94105",
    link: "https://maps.google.com"
  }
] as const

const ContactTemplate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
  }

  return (
    <div className="relative py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heading level="h1" className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Contact Us
            </Heading>
            <Text className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with our team of solar experts. We're here to help you find the perfect solar solution for your business.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {CONTACT_INFO.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="flex flex-col items-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary mb-4 p-3 bg-primary-light/10 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <Heading level="h3" className="text-xl font-semibold text-primary-dark mb-2">
                  {item.title}
                </Heading>
                <Text className="text-gray-600 text-center">
                  {item.info}
                </Text>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-primary/30"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTemplate

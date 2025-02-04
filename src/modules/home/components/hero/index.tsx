import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] w-full bg-gradient-to-br from-primary-light/10 via-secondary-light/5 to-accent-light/10">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 small:px-32 gap-8">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary-dark font-bold mb-6">
            Powering Tomorrow with <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Solar Solutions
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-dark font-light max-w-3xl mx-auto">
            Your Trusted Wholesale Solar Partner for Over a Decade
          </p>
        </div>

        <p className="max-w-2xl text-lg text-gray-600 mb-4 animate-fade-in-up delay-200">
          Discover premium solar panels and renewable energy solutions for your wholesale needs. 
          Quality, reliability, and expert support - all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <LocalizedClientLink href="/store">
            <Button
              variant="primary"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-primary/30"
              size="large"
            >
              Explore Products
            </Button>
          </LocalizedClientLink>
          <LocalizedClientLink href="/contact">
            <Button
              variant="secondary"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary-light/10 px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-200"
              size="large"
            >
              Request Quote
            </Button>
          </LocalizedClientLink>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </div>
  )
}

export default Hero

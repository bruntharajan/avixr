import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Projects from '@/components/Projects'
import DigitalMarketing from '@/components/DigitalMarketing'
import Founder from '@/components/Founder'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avixr Technologies Pvt Ltd',
    url: 'https://avixr.com',
    logo: 'https://avixr.com/avixrlogo.png',
    description: 'Avixr Technologies Pvt Ltd is a research-driven software company specializing in transforming visionary ideas into top-tier mobile and web solutions.',
    foundingDate: '2022',
    founder: {
      '@type': 'Person',
      name: 'KV Avinash Sarma',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add your social media links here when available
      // 'https://linkedin.com/company/avixr',
      // 'https://twitter.com/avixr',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://avixr.com/#contact',
    },
    areaServed: 'Worldwide',
    serviceType: ['Software Development', 'Web Development', 'Mobile App Development', 'Digital Solutions'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Projects />
        <DigitalMarketing />
        <Founder />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


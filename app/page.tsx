import { Container } from './components/container'
import CTA from './components/cta'
// import FAQ from './components/faq'
import Footer from './components/footer'
import { Header } from './components/header'
import Hero from './components/hero'
import Pricing from './components/pricing'
import { renderSchemaTags } from './lib/seo'

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      {/* <LogoClouds /> */}
      {/* <BeforeAfter /> */}
      <Pricing />
      {/* <AccordionFeatures /> */}
      {/* <FAQ /> */}
      <CTA />
      <Footer />
      {renderSchemaTags()}
    </Container>
  )
}

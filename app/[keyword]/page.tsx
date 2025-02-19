import { Container } from '@/app/components/container'
import Hero from '@/app/components/hero'
import LogoClouds from '@/app/components/logo-clouds'
import { Header } from '@/app/components/header'
import BeforeAfter from '@/app/components/before-after'
import AccordionFeatures from '@/app/components/accordion-features'
import Pricing from '@/app/components/pricing'
import Footer from '@/app/components/footer'
import CTA from '@/app/components/cta'
import { getSEOTags } from '@/app/lib/seo'
import { keywords } from './keywords'
import { redirect } from 'next/navigation'

export const generateMetadata = ({
  params,
}: {
  params: { keyword: string }
}) => {
  return getSEOTags({
    title: `Bounty Game for ${params.keyword}`,
    description: `Bounty game is one of the most rewarding platform`,
    canonicalUrlRelative: `/${params.keyword}`,
  })
}

export async function generateStaticParams() {
  return keywords.map((keyword) => ({
    keyword: keyword.replace(/\s+/g, '-').toLowerCase(),
  }))
}
function isValidKeyword(keyword: string): boolean {
  return keywords
    .map((k) => k.replace(/\s+/g, '-').toLowerCase())
    .includes(keyword.toLowerCase())
}

export default function KeywordPage({
  params,
}: {
  params: { keyword: string }
}) {
  if (!isValidKeyword(params.keyword)) {
    return redirect('/')
  }
  //Use the decoded keyword when needed

  return (
    <Container>
      <Header />
      <Hero />
      <LogoClouds />
      <AccordionFeatures />
      <BeforeAfter />
      <Pricing />
      {/* <FAQ config={config.FAQ} /> */}
      <CTA />
      <Footer />
    </Container>
  )
}

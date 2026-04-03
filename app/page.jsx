import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import QuickBooking from '@/components/quick-booking'
import Fleet from '@/components/fleet'
import WhyChooseUs from '@/components/why-choose-us'
import Testimonials from '@/components/testimonials'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <QuickBooking />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

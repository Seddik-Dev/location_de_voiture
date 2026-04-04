import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FleetPageContent from '@/components/fleet-page-content'
import { getCars } from '@/lib/get-cars'

export const metadata = {
  title: 'Fleet | Atlas Drive | Location au Maroc (MAD)',
  description:
    'Découvrez nos véhicules premium et économiques à louer au Maroc. Tarifs en dirhams (MAD) par jour — Casablanca, Marrakech, Rabat et plus.',
}

export default async function FleetPage() {
  let cars = []
  let loadError = false
  try {
    cars = await getCars()
  } catch {
    loadError = true
    cars = []
  }

  return (
    <main className="w-full overflow-hidden min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar />
      <FleetPageContent initialCars={cars} loadError={loadError} />
      <Footer />
    </main>
  )
}

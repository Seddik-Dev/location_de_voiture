'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { fleetCars } from '@/lib/fleet-data'
import { FleetCarCard } from './fleet-car-card'

export default function FleetPageContent() {
  return (
    <>
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" asChild className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
              <Link href="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à l&apos;accueil
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notre flotte au Maroc
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Véhicules entretenus et assurés, avec retrait possible dans les principales villes du royaume.
              Tarifs affichés en <span className="font-semibold text-foreground">MAD</span> (dirham marocain), par jour.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fleetCars.map((car, index) => (
              <FleetCarCard key={car.id} car={car} layout="grid" index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

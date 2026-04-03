'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Fatima Bennani',
      location: 'Casablanca',
      rating: 5,
      text: 'Atlas Drive offre un service exceptionnel. Le chauffeur était très courtois et connaissait parfaitement les routes du Maroc. Je recommande vivement !',
      avatar: '👩‍🦰',
    },
    {
      name: 'Jean-Michel Dubois',
      location: 'Paris',
      rating: 5,
      text: 'Expérience merveilleuse ! Véhicule impeccable, support en français excellent. Parfait pour découvrir le Maroc en luxe.',
      avatar: '👨‍💼',
    },
    {
      name: 'Amira El Mansouri',
      location: 'Marrakech',
      rating: 5,
      text: 'Service impeccable du début à la fin. Les voitures sont magnifiques et très bien entretenues. Merci Atlas Drive !',
      avatar: '👩‍💻',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec Atlas Drive.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full" />

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Star className="fill-accent text-accent" size={18} />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-2">Prêt pour votre aventure marocaine ?</h3>
          <p className="text-lg opacity-90 mb-6">Rejoignez des milliers de clients satisfaits</p>
          <motion.button
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

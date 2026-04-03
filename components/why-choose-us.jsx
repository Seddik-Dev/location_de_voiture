'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Award } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Assurance complète',
      description: 'Tous les véhicules sont assurés tous risques avec franchise zéro. Voyagez en toute tranquillité.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Service rapide',
      description: 'Réservation en moins de 5 minutes. Véhicule prêt à la récupération dans les 30 minutes.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Support 24/7',
      description: 'Équipe en français disponible 24h/24. Assistance routière incluse partout au Maroc.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Award,
      title: 'Premium & Fiable',
      description: 'Véhicules récents entièrement maintenus. Chauffeurs professionnels et courtois.',
      color: 'from-emerald-500 to-emerald-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why" className="py-20 px-4 bg-background">
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
            Pourquoi choisir Atlas Drive ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous vous offrons une expérience de location premium sans compromis, avec des services exclusifs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 12 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`mt-6 h-1 w-12 bg-gradient-to-r ${feature.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '5000+', label: 'Clients satisfaits' },
            { number: '200+', label: 'Véhicules premium' },
            { number: '18', label: 'Années d\'expérience' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.p
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.p>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

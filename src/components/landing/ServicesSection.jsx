import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Express Refresh',
    price: 89,
    time: 'EST. 1.5 HRS',
    features: [
      'Exterior contact wash',
      'Wheels cleaned',
      'Interior vacuum',
      'Dash wipe down',
      'Windows cleaned',
    ],
    highlighted: false,
  },
  {
    title: 'Full Reset Detail',
    price: 149,
    time: 'EST. 2.5–3 HRS',
    features: [
      'Full interior deep clean',
      'Seats + carpets vacuumed',
      'Dash / plastics cleaned',
      'Exterior contact wash',
      'Wheels cleaned with iron remover',
      'Tire shine applied',
      'Spray wax protection',
    ],
    highlighted: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel label="Service Matrix" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
        >
          Choose Your <span className="italic text-primary">Restoration</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground font-body max-w-lg mb-16 leading-relaxed"
        >
          Two precision-engineered packages designed for every level of care your vehicle demands.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 font-mono text-[11px] tracking-wider text-muted-foreground/70 text-center"
        >
          * Final price depends on vehicle size, condition, and pet hair / excessive soil level.
        </motion.p>
      </div>
    </section>
  );
}
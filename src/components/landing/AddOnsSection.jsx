import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import AddOnCard from './AddOnCard';

const interiorAddOns = [
  { name: 'Pet Hair Removal', price: '$25+' },
  { name: 'Heavy Trash Removal', price: '$20' },
  { name: 'Odor Bomb Treatment', price: '$35' },
  { name: 'Seat Shampoo', price: '$40' },
  { name: 'Stain Spot Removal', price: '$20+' },
];

// { name: 'Clay Bar Treatment', price: '$60' },
// { name: 'Headlight Restore', price: '$50' },
const exteriorAddOns = [
  { name: 'Spray Wax Upgrade', price: '$20' },
  { name: 'Engine Bay Wipe Down', price: '$35' },
];

export default function AddOnsSection() {
  return (
    <section id="addons" className="py-24 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel label="Add-On Laboratory" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
        >
          Enhance Your <span className="italic text-primary">Detail</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground font-body max-w-lg mb-16 leading-relaxed"
        >
          Targeted treatments to address specific needs. Mix and match to build your custom restoration.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Interior Add-Ons */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary" />
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground">
                Interior Add-Ons
              </h3>
            </div>
            <div className="space-y-3">
              {interiorAddOns.map((addon, i) => (
                <AddOnCard key={addon.name} {...addon} index={i} />
              ))}
            </div>
          </div>

          {/* Exterior Add-Ons */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary" />
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground">
                Exterior Add-Ons
              </h3>
            </div>
            <div className="space-y-3">
              {exteriorAddOns.map((addon, i) => (
                <AddOnCard key={addon.name} {...addon} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
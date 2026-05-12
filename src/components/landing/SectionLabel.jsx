import React from 'react';
import { motion } from 'framer-motion';

export default function SectionLabel({ label, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 mb-4 ${align === 'right' ? 'justify-end' : ''}`}
    >
      <div className="h-px w-8 bg-primary/50" />
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
        {label}
      </span>
    </motion.div>
  );
}
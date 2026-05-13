import React from 'react';
import { motion } from 'framer-motion';

export default function AddOnCard({ name, price, index, link}) {
  return (
    <motion.div
      href ={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex items-center justify-between p-5 border border-border bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
    >
      <span className="text-sm font-body text-foreground/90 group-hover:text-foreground transition-colors">
        {name}
      </span>
      <span className="font-mono text-sm text-primary tracking-wider whitespace-nowrap ml-4">
        {price}
      </span>
    </motion.div>
  );
}
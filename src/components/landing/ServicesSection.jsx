// import React from 'react';
// import { motion } from 'framer-motion';
// import SectionLabel from './SectionLabel';
// import ServiceCard from './ServiceCard';

// const SQUARE_BOOKING_URL = "https://book.squareup.com/appointments/b25lvvabnjq20b/location/LA0R9X70JMSW0/services";


// const full_services = [
//   {
//     title: 'Express Refresh',
//     price: "99",
//     time: 'EST. 1.5 HRS',
//     features: [
//       'Exterior contact wash',
//       'Wheels cleaned',
//       'Interior vacuum',
//       'Dash wipe down',
//       'Windows cleaned',
//     ],
//     highlighted: false,
//   },
//   {
//     title: 'Full Reset Detail',
//     price: "149",
//     time: 'EST. 2.5–3 HRS',
//     features: [
//       'Full interior deep clean',
//       'Seats + carpets vacuumed',
//       'Dash / plastics cleaned',
//       'Exterior contact wash',
//       'Wheels cleaned',
//       'Tire shine applied',
//       'Spray wax protection',
//     ],
//     highlighted: true,
//   },
//   {
//     title: 'Premium Reset',
//     price: '229',
//     time: 'EST. 4+ HRS',
//     features: [
//       'Deep interior reset',
//       'Full vacuum + detail',
//       'Extractor Cleaning (seats or carpets as needed)',
//       'Dash / plastics cleaned + restoration + protection ',
//       'Stain Treatment',
//       'Odor Treatment',
//       'Exterior contact wash',
//       'Wheels cleaned with iron remover',
//       'Tire shine applied',
//       'Spray wax protection',
//       'Doorjambs',
//     ],
//     highlighted: false,
//   },
// ];




// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-24 lg:py-40">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <SectionLabel label="Full Service" />

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
//         >
//           Choose Your <span className="italic text-primary">Full Restoration</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-muted-foreground font-body max-w-lg mb-16 leading-relaxed"
//         >
//           Three precision-engineered packages designed for every level of care your vehicle demands.
//         </motion.p>

//         <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
//           {full_services.map((full_service, i) => (
//             <ServiceCard key={full_service.title} {...full_service} index={i} onClick={() => window.open(SQUARE_BOOKING_URL, "_blank")}/>
//           ))}
//         </div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-10 font-mono text-[11px] tracking-wider text-muted-foreground/70 text-center"
//         >
//           * Final price depends on vehicle size, condition, and pet hair / excessive soil level.
//         </motion.p>
//       </div>
      
//     </section>
//   );
// }

/* global gtag */
import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import ServiceCard from './ServiceCard';

const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/b25lvvabnjq20b/location/LA0R9X70JMSW0/services";

const full_services = [
  {
    title: 'Express Refresh',
    price: "99",
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
    price: "149",
    time: 'EST. 2.5–3 HRS',
    features: [
      'Full interior deep clean',
      'Seats + carpets vacuumed',
      'Dash / plastics cleaned',
      'Exterior contact wash',
      'Wheels cleaned',
      'Tire shine applied',
      'Spray wax protection',
    ],
    highlighted: true,
  },
  {
    title: 'Premium Reset',
    price: '229',
    time: 'EST. 4+ HRS',
    features: [
      'Deep interior reset',
      'Full vacuum + detail',
      'Extractor Cleaning (seats or carpets as needed)',
      'Dash / plastics cleaned + restoration + protection',
      'Stain Treatment',
      'Odor Treatment',
      'Exterior contact wash',
      'Wheels cleaned with iron remover',
      'Tire shine applied',
      'Spray wax protection',
      'Doorjambs',
    ],
    highlighted: false,
  },
];

export default function ServicesSection() {

  const handleBookingClick = (serviceTitle) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18182677284/7jXrCPaB57EcEKTGlt5D',
      });
    }
  
    setTimeout(() => {
      window.open(SQUARE_BOOKING_URL, "_blank");
    }, 120);
  };

  return (
    <section id="services" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel label="Full Service" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
        >
          Choose Your <span className="italic text-primary">Full Restoration</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground font-body max-w-lg mb-16 leading-relaxed"
        >
          Three precision-engineered packages designed for every level of care your vehicle demands.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {full_services.map((full_service, i) => (
            <ServiceCard
              key={full_service.title}
              {...full_service}
              index={i}
              onClick={() => handleBookingClick(full_service.title)}
            />
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
import React from 'react';
import { STATS } from '../constants';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="bg-brand-dark py-10 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-1">
                {stat.value}
              </div>
              <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
'use client';

import { motion } from 'framer-motion';
import { Brain, Cog, LineChart } from 'lucide-react';

const services = [
  {
    title: 'AI Consulting',
    icon: Brain,
    description:
      'Strategic AI implementation and optimization for business growth',
    features: [
      'AI Strategy Development',
      'Technology Assessment',
      'ROI Analysis',
    ],
  },
  {
    title: 'Process Automation',
    icon: Cog,
    description: 'End-to-end automation solutions for improved efficiency',
    features: [
      'Workflow Optimization',
      'RPA Implementation',
      'Integration Services',
    ],
  },
  {
    title: 'Data Analytics',
    icon: LineChart,
    description: 'Transform raw data into actionable insights',
    features: ['Data Mining', 'Predictive Analytics', 'Business Intelligence'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-section">
      <div className="scroll-content">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and automation solutions tailored to transform your
              business
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative bg-background/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-shadow duration-700 ease-in-out"
                >
                  {/* Top Border Indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left rounded-t-lg" />

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="p-2 bg-red-500/10 rounded-md text-red-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </motion.div>
                    <h3 className="font-semibold text-foreground transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.2,
                          ease: 'easeInOut',
                        }}
                        className="text-sm flex items-center gap-2"
                      >
                        <div className="h-1 w-1 bg-red-500 rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

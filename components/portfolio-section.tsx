'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollContext } from './scroll/scroll-context';
import { colors, animations } from '@/lib/design-system';

const categories = ['All', 'AI', 'Automation', 'Data Science'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Customer Service',
    category: 'AI',
    description: 'Intelligent chatbot system with natural language processing',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 2,
    title: 'Process Automation Suite',
    category: 'Automation',
    description: 'End-to-end automation platform for business workflows',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Node.js', 'RPA', 'API'],
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    category: 'Data Science',
    description: 'Real-time analytics and visualization platform',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'React', 'D3.js'],
  },
  // Add more projects as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased stagger for smoother sequence
      ease: 'easeInOut', // Changed easing to easeInOut
      duration: 1, // Increased duration for a gentler effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1, // Increased duration for smoother animation
      ease: 'easeInOut', // Changed easing to easeInOut
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.6, // Increased duration for smoother exit
      ease: 'easeInOut',
    },
  },
};

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { activeSection } = useScrollContext();

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeInOut' }} // Increased duration and changed easing
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my latest projects and implementations in AI, automation,
            and data science.
          </p>

          {/* Categories */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }} // Increased duration and smoother easing
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-500 ease-in-out ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-background/50 hover:bg-red-500/10 text-muted-foreground hover:text-red-500'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group relative bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-700 ease-in-out" // Specified transition-shadow with longer duration and smoother easing
              >
                {/* Top Border Indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left rounded-t-lg" />

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }} // Slightly reduced scale for subtlety
                    transition={{ duration: 0.8, ease: 'easeInOut' }} // Increased duration and smoother easing
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />{' '}
                  {/* Increased duration */}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-red-500 bg-red-500/10 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-red-500 transition-colors duration-500 ease-in-out">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 transition-colors duration-500 ease-in-out">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-background/50 text-muted-foreground rounded-full transition-colors duration-500 ease-in-out"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

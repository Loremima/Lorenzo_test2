'use client';

import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import profileImage from '@/components/photo/profile.jpg';

const skills = [
  {
    name: 'Artificial Intelligence',
    level: 95,
    description: 'Specializing in machine learning, NLP, and computer vision',
  },
  {
    name: 'Machine Learning',
    level: 90,
    description: 'Deep learning, neural networks, and predictive modeling',
  },
  {
    name: 'Process Automation',
    level: 88,
    description: 'RPA, workflow optimization, and system integration',
  },
  {
    name: 'Data Science',
    level: 85,
    description: 'Data analysis, visualization, and statistical modeling',
  },
  {
    name: 'Cloud Computing',
    level: 82,
    description: 'AWS, Azure, and cloud-native architectures',
  },
  {
    name: 'System Architecture',
    level: 80,
    description: 'Scalable and distributed system design',
  },
];

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-10 transform -translate-x-7">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Outer glow effect */}
              <motion.div
                className="absolute -inset-6 rounded-2xl opacity-50"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(239, 68, 68, 0.15), transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Image container with subtle border gradient */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* Gradient border */}
                <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10">
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-sm" />
                </div>

                {/* Main image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    className="object-cover"
                    fill
                    sizes="400px"
                    priority
                    quality={95}
                    style={{
                      objectPosition: '50% 35%',
                    }}
                  />

                  {/* Subtle overlay to blend with background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a Master's in Data Science and over 8 years of experience,
                I specialize in developing cutting-edge AI solutions and
                automation systems. My expertise spans across machine learning,
                process automation, and data analytics, helping businesses
                transform their operations through technology.
              </p>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="group"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeSkill === index ? 'rotate-90 text-red-500' : ''
                        }`}
                      />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-1.5 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + index * 0.1,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeSkill === index ? 'auto' : 0,
                      opacity: activeSkill === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground mt-2 pl-6">
                      {skill.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              <Download className="h-4 w-4" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

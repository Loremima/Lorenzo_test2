'use client';

import { motion } from 'framer-motion';
import { Download, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "miramateolorenzo@gmail.com",
    href: "mailto:miramateolorenzo@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 6 42 40 33 00",
    href: "tel:+33642403300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote",
    href: "https://www.google.fr/maps/place/Silicon+Valley",
    target: "_blank",
  },
];

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<number|null>(null);

  return (
    <section id="about" className="scroll-section">
      <div className="scroll-content">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold tracking-tight">About me</h2>
              <div className="h-1" />
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 flex flex-col items-center"
              >
                <div className="w-full max-w-[240px] mx-auto space-y-6">
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
                    <motion.div
                      className="absolute -inset-4 rounded-2xl opacity-50"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.15), transparent 70%)',
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
                    <div className="relative h-full rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10">
                        <div className="absolute inset-0 rounded-2xl backdrop-blur-sm" />
                      </div>
                      <Image
                        src={profileImage}
                        alt="Profile"
                        className="object-cover"
                        fill
                        sizes="240px"
                        priority
                        quality={95}
                        style={{
                          objectPosition: '50% 35%',
                        }}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/5 transition-colors cursor-pointer"
                        onClick={() => info.href && window.open(info.href, info.target || '_self')}
                      >
                        <div className="p-1.5 rounded-lg bg-red-500/10">
                          <info.icon className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{info.label}</div>
                          <div className="text-sm font-medium">{info.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Download CV Button */}
                  <motion.a
                    href="/Lorenzo_Mira_Mateo_Business_Analyst.pdf"
                    download="Lorenzo_Mira_Mateo_CV.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Armed with a Master's in Data Science and 8+ years of expertise, I turn complex data challenges into business advantages. I build cutting-edge AI solutions and automation systems that help companies reduce costs, increase efficiency, and unlock hidden opportunities in their data.
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
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted-foreground mt-2 pl-6">
                          {skill.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

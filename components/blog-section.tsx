'use client';

import { motion } from 'framer-motion';
// Remove AnimatePresence to maintain consistency with other sections

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt:
      'Exploring how artificial intelligence is transforming modern business operations...',
    date: 'Mar 15, 2024',
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Automation Best Practices',
    excerpt:
      'Key strategies for implementing successful automation solutions in your organization...',
    date: 'Mar 10, 2024',
    category: 'Automation',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Data Science Trends 2024',
    excerpt:
      'Latest trends and innovations in the field of data science and analytics...',
    date: 'Mar 5, 2024',
    category: 'Data Science',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  // Add more posts as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Consistent with other sections
      ease: 'easeInOut', // Smooth easing
      duration: 1, // Gentle duration
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Subtle movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Consistent duration
      ease: 'easeInOut', // Smooth easing
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.6, // Consistent exit duration
      ease: 'easeInOut',
    },
  },
};

export function BlogSection() {
  return (
    <section id="blog" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeInOut' }} // Consistent with other sections
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI, automation,
            and data science.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group relative bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-700 ease-in-out" // Specified transition-shadow
            >
              {/* Top Border Indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left rounded-t-lg" />

              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }} // Subtle scaling
                  transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth scaling
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />{' '}
                {/* Smooth overlay */}
              </div>

              {/* Post Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-red-500">{post.category}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-red-500 transition-colors duration-500 ease-in-out">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 transition-colors duration-500 ease-in-out">
                  {post.excerpt}
                </p>
                <motion.a
                  href="#"
                  className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors inline-flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }} // Smooth link movement
                >
                  Read More →
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

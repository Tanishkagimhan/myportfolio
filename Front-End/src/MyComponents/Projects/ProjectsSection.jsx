import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../components/ui/animated-text'
import AceternityProjectShowcase from './AceternityProjectShowcase'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

export default function ProjectsSection() {
  const projectCards = [
    { 
      title: 'Happy Mobile ', 
      description: 'Online Mobile Store Management System – IT Project',
      image: 'https://github.com/Tanishkagimhan/myportfolio/blob/main/Front-End/src/assets/online-mobile-store-management-system.png?raw=true', 
      link: '#',
      category: 'web',
      tags: ['React','Node.js','MongoDB'],
      featured: true
    },
    { 
      title: 'Job Jet', 
      description: 'Job Management System–Mobile Application Development Project',
      image: 'https://github.com/Tanishkagimhan/myportfolio/blob/main/Front-End/src/assets/job-management-sys.png?raw=true', 
      link: '#',
      category: 'web',
      tags: ['Kotlin', 'Firebase', 'Android Studio'],
      featured: true
    },
    { 
      title: 'Movie Hub', 
      description: 'Online Movie and TV Series Download System – Web Application', 
      image: 'https://github.com/Tanishkagimhan/myportfolio/blob/main/Front-End/src/assets/Movie-and-TV-Series.png?raw=true', 
      link: '#',
      category: 'web',
      tags: ['JavaScript', 'MySQL', 'Servlet'],
      featured: false
    }
    
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - left-aligned */}
        <div className="mb-16 md:mb-12 text-left">
          <motion.span 
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            PROJECTS
          </motion.span>
          <AnimatedText 
            text="Selected work"
            className="text-3xl md:text-5xl font-bold"
            once={true}
            delay={0.1}
          />
        </div>

        {/* Website Showcase Section - Only keeping this part */}
        <AceternityProjectShowcase projects={projectCards} />
        
        {/* Enhanced Products CTA Section */}
        <motion.div 
          className="mt-20 py-12 px-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/*<motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover My Digital Products
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore my collection of premium digital resources, tools, and templates designed to help you elevate your projects.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/products" className="inline-block">
                <motion.button
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full shadow-xl font-medium text-lg group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Browse Digital Products</span>
                  <motion.div
                    className="bg-white/20 p-2 rounded-full"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
            */}
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-6 right-8 h-16 w-16 rounded-full bg-purple-400/20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-6 left-8 h-20 w-20 rounded-full bg-blue-400/20 blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
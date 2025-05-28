"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const stats = [
  { label: "Successful Projects", value: 150, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Revenue Generated", value: 2.5, suffix: "M+", prefix: "$" },
  { label: "Years Experience", value: 8, suffix: "+" },
]

function AnimatedNumber({ value, duration = 2000, prefix = "", suffix = "" }: {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const startValue = 0
      const endValue = value

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (endValue - startValue) * easeOutQuart
        
        setDisplayValue(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{displayValue.toFixed(value < 10 ? 1 : 0)}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Proven Results That Speak for Themselves
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our track record demonstrates our commitment to delivering exceptional results for our clients.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedNumber 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
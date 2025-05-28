"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Bot, Zap, Users, Calendar, Settings } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Sales Funnels", href: "/sales-funnels", icon: Zap },
    { name: "AI Agents", href: "/ai-agents", icon: Bot },
    { name: "Lead Generation", href: "/lead-generation", icon: Users },
    { name: "Appointment Setting", href: "/appointment-setting", icon: Calendar },
    { name: "Back-end Automation", href: "/backend-automation", icon: Settings },
  ]

  const contactInfo = [
    { icon: Mail, text: "support@pearsonops.com", href: "mailto:support@pearsonops.com" },
    { icon: Phone, text: "+44 7736505293", href: "tel:+447736505293" },
    { icon: MapPin, text: "Remote Operations Worldwide", href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/Screenshot 2025-05-27 at 23.52.34.png"
                  alt="Pearson Operations Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pearson Operations
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming businesses through AI-powered automation, complete sales funnels, 
              and intelligent operational systems that drive sustainable growth.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://vercel.com/pearson-operations-projects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Our Projects
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Pearson Operations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
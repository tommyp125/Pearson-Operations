"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Scale, AlertTriangle, Users } from "lucide-react"

const sections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      "By accessing and using our website and services, you accept and agree to be bound by these Terms of Service",
      "If you do not agree to these terms, please do not use our services",
      "We reserve the right to modify these terms at any time with notice",
      "Continued use of our services after changes constitutes acceptance of new terms"
    ]
  },
  {
    title: "Use of Services",
    icon: Users,
    content: [
      "You must be at least 18 years old to use our services",
      "You agree to provide accurate and complete information when requested",
      "You are responsible for maintaining the confidentiality of your account information",
      "You agree not to use our services for any unlawful or prohibited activities"
    ]
  },
  {
    title: "Intellectual Property",
    icon: Scale,
    content: [
      "All content on our website is owned by Pearson Operations or our licensors",
      "You may not reproduce, distribute, or create derivative works without permission",
      "Our trademarks, logos, and service marks are protected intellectual property",
      "You retain ownership of any content you provide to us with appropriate licenses"
    ]
  },
  {
    title: "Limitations and Disclaimers",
    icon: AlertTriangle,
    content: [
      "Our services are provided 'as is' without warranties of any kind",
      "We do not guarantee uninterrupted or error-free service",
      "We are not liable for indirect, incidental, or consequential damages",
      "Our total liability is limited to the amount paid for our services"
    ]
  }
]

export default function TermsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [sectionsRef, sectionsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              These terms govern your use of our website and services. 
              Please read them carefully before using our platform.
            </p>
            <p className="text-lg opacity-75">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introduction</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to Pearson Operations. These Terms of Service ("Terms") govern your 
                use of our website, services, and any related applications or platforms 
                (collectively, the "Services") operated by Pearson Operations ("we," "us," or "our").
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These Terms constitute a legally binding agreement between you and Pearson Operations. 
                By accessing or using our Services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section ref={sectionsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={sectionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Additional Terms</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Service Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain high availability of our services, but we do not guarantee 
                  uninterrupted access. We may temporarily suspend or restrict access for maintenance, 
                  updates, or other operational reasons. We will provide reasonable notice when possible.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Payment Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms for our services will be specified in separate service agreements. 
                  All fees are non-refundable unless otherwise stated. We reserve the right to 
                  modify our pricing with appropriate notice to existing clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We respect the confidentiality of your business information and will not disclose 
                  confidential information to third parties without your consent, except as required 
                  by law or as necessary to provide our services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service relationship with appropriate notice as 
                  specified in individual service agreements. Upon termination, certain provisions 
                  of these Terms will survive, including intellectual property rights and limitation of liability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with applicable laws. 
                  Any disputes arising from these Terms or our services will be resolved through 
                  binding arbitration or in courts of competent jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@pearsonoperations.com" className="text-blue-600 hover:text-blue-800">
                    legal@pearsonoperations.com
                  </a>{" "}
                  or through our contact form.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
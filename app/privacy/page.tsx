"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Lock, Eye, FileText } from "lucide-react"

const sections = [
  {
    title: "Information We Collect",
    icon: FileText,
    content: [
      "Personal information you provide when contacting us (name, email, phone, company)",
      "Technical information about your device and browser when visiting our website",
      "Usage data about how you interact with our website and services",
      "Communication records when you contact us for support or inquiries"
    ]
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      "To respond to your inquiries and provide requested services",
      "To improve our website functionality and user experience",
      "To send you relevant information about our services (with your consent)",
      "To comply with legal obligations and protect our legitimate interests"
    ]
  },
  {
    title: "Data Protection",
    icon: Lock,
    content: [
      "We implement industry-standard security measures to protect your data",
      "Your personal information is encrypted during transmission and storage",
      "Access to your data is restricted to authorized personnel only",
      "We regularly review and update our security practices"
    ]
  },
  {
    title: "Your Rights",
    icon: Shield,
    content: [
      "Right to access your personal data we hold about you",
      "Right to correct any inaccurate or incomplete information",
      "Right to request deletion of your personal data",
      "Right to withdraw consent for marketing communications"
    ]
  }
]

export default function PrivacyPage() {
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
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
                At Pearson Operations, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy describes how we 
                collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By using our website or services, you agree to the collection and use of 
                information in accordance with this policy. If you do not agree with our 
                policies and practices, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Additional Information */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Additional Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cookies and Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your 
                  browsing experience. You can control cookie settings through your browser 
                  preferences. Some features of our website may not function properly if cookies 
                  are disabled.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for analytics, hosting, and other business 
                  purposes. These services may have their own privacy policies, and we encourage 
                  you to review them. We do not sell or rent your personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Retention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill 
                  the purposes outlined in this privacy policy, unless a longer retention period 
                  is required or permitted by law.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at{" "}
                  <a href="mailto:privacy@pearsonoperations.com" className="text-blue-600 hover:text-blue-800">
                    privacy@pearsonoperations.com
                  </a>{" "}
                  or through our contact form.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Policy Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
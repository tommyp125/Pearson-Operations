"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Settings, Workflow, Database, Zap, ArrowRight, CheckCircle, Cpu, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const automationTypes = [
  {
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and business processes with intelligent automation",
    icon: Workflow,
  },
  {
    title: "Data Integration",
    description: "Connect and synchronize data across all your business systems seamlessly",
    icon: Database,
  },
  {
    title: "Process Optimization",
    description: "Analyze and optimize your business processes for maximum efficiency",
    icon: Cpu,
  },
  {
    title: "Cloud Integration",
    description: "Integrate cloud services and APIs to create powerful automated workflows",
    icon: Cloud,
  },
]

const benefits = [
  "Reduce manual work by up to 90%",
  "Eliminate human errors in processes",
  "Increase operational efficiency by 300%",
  "Scale operations without adding staff",
  "Improve data accuracy and consistency",
  "24/7 automated operations",
]

const solutions = [
  {
    title: "CRM Automation",
    description: "Automate lead management, follow-ups, and customer communications to never miss an opportunity.",
    icon: Database,
  },
  {
    title: "Financial Processes",
    description: "Streamline invoicing, payments, and financial reporting with automated workflows.",
    icon: Zap,
  },
  {
    title: "Inventory Management",
    description: "Automate stock tracking, reordering, and supplier communications for optimal inventory levels.",
    icon: Settings,
  },
]

export default function BackendAutomationPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [automationRef, automationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionsRef, solutionsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden"
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
                <Settings className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Back-end Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your business operations with intelligent automation systems 
              that eliminate manual processes and scale your business efficiently.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Automate Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section ref={automationRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={automationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple task automation to complex system integrations, we handle it all
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={automationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {type.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Automate Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Automation isn't just about efficiency—it's about transforming your business 
                to operate at scale while maintaining quality and consistency.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Settings className="w-24 h-24 text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      90% Less Manual Work
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      average reduction in manual processes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Popular Automation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common business processes that benefit significantly from automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {solution.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Transform your operations with intelligent automation that scales with your business growth.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
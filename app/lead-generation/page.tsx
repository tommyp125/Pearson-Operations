"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Target, TrendingUp, Search, Mail, ArrowRight, CheckCircle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const strategies = [
  {
    title: "Target Audience Research",
    description: "Deep analysis to identify and understand your ideal customer profiles",
    icon: Target,
  },
  {
    title: "Multi-channel Campaigns",
    description: "Coordinated campaigns across email, social media, and digital platforms",
    icon: Mail,
  },
  {
    title: "SEO & Content Marketing",
    description: "Organic lead generation through optimized content and search visibility",
    icon: Search,
  },
  {
    title: "Lead Scoring & Analytics",
    description: "Advanced scoring systems to prioritize and track lead quality",
    icon: BarChart3,
  },
]

const benefits = [
  "Increase qualified leads by 250%",
  "Reduce cost per lead by 40%",
  "Improve lead quality and conversion rates",
  "Scale lead generation efforts efficiently",
  "Track ROI with detailed analytics",
  "Integrate with your existing CRM",
]

const process = [
  {
    step: "01",
    title: "Audience Analysis",
    description: "We research and define your ideal customer profiles and buying behaviors.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a comprehensive lead generation strategy across multiple channels.",
  },
  {
    step: "03",
    title: "Campaign Execution",
    description: "Launch targeted campaigns designed to attract and capture quality leads.",
  },
  {
    step: "04",
    title: "Optimization & Scale",
    description: "Continuously optimize campaigns and scale successful strategies.",
  },
]

export default function LeadGenerationPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [strategiesRef, strategiesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 overflow-hidden"
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
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lead Generation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Attract and capture high-quality leads with targeted strategies that 
              identify prospects ready to buy and convert them into customers.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Generating Leads
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Strategies Section */}
      <section ref={strategiesRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={strategiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Lead Generation Strategies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive approaches to identify, attract, and convert your ideal prospects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={strategiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {strategy.description}
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
                Results You Can Expect
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our proven lead generation strategies deliver measurable results 
                that directly impact your bottom line.
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
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      250% More Leads
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      average increase in qualified leads
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Lead Generation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building and scaling your lead generation efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 transform translate-x-10" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Generate More Quality Leads?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's build a lead generation system that consistently delivers qualified prospects to your business.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
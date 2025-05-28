"use client"

import { Bot, Zap, Users, Calendar, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Complete Sales Funnels",
    description: "End-to-end sales funnel design and implementation that converts prospects into loyal customers with optimized conversion rates.",
    icon: Zap,
    href: "/sales-funnels",
    features: ["Landing Page Design", "Email Sequences", "Conversion Optimization", "A/B Testing"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Agents",
    description: "Intelligent AI-powered agents that handle customer interactions, qualify leads, and provide 24/7 support to your business.",
    icon: Bot,
    href: "/ai-agents",
    features: ["24/7 Customer Support", "Lead Qualification", "Intelligent Responses", "Multi-platform Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Lead Generation",
    description: "Targeted lead generation strategies that identify and attract high-quality prospects for your business.",
    icon: Users,
    href: "/lead-generation",
    features: ["Target Audience Research", "Multi-channel Campaigns", "Lead Scoring", "CRM Integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Appointment Setting",
    description: "Automated appointment scheduling and management system that streamlines your booking process.",
    icon: Calendar,
    href: "/appointment-setting",
    features: ["Automated Scheduling", "Calendar Integration", "Reminder Systems", "No-show Reduction"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Back-end Automation",
    description: "Comprehensive automation solutions that streamline your operations and eliminate manual processes.",
    icon: Settings,
    href: "/backend-automation",
    features: ["Workflow Automation", "Data Integration", "Process Optimization", "System Integration"],
    color: "from-indigo-500 to-purple-500",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business operations and drive sustainable growth through automation and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.title}>
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
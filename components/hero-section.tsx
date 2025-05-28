"use client"

import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Transform Your Business with Pearson Operations
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Streamline your sales process with complete sales funnels, intelligent AI agents, 
          and automated back-end systems that drive results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/sales-funnels">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              View Our Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Sales Funnels</h3>
            <p className="text-gray-200">Complete end-to-end sales funnel solutions that convert prospects into customers.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Bot className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Agents</h3>
            <p className="text-gray-200">Intelligent AI agents that handle customer interactions and automate processes.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
            <p className="text-gray-200">Back-end automation systems that streamline your operations and boost efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lock, ChevronDown, Sparkles } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

const phrases = [
  "Discover the leader you already are",
  "Your sensitivity is your superpower",
  "Transform emotion into insight",
  "Lead with authenticity, not authority",
]

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <ParticleBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Leadership Foundry</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in leading-tight">
            Leadership Is an Adventure
            <span className="block mt-1 bg-gradient-to-r from-orange-600 via-purple-400 to-cyan-500 bg-clip-text text-transparent py-2">
              That Began
            </span>
            <span className="block mt-1 bg-gradient-to-r from-orange-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent py-2">With the Journey of Becoming </span>
            <span className="block bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">You</span>
          </h1>

          {/* Dynamic Subheadline */}
          <div className="h-8 relative">
            {phrases.map((phrase, index) => (
              <p
                key={index}
                className={`absolute inset-0 text-xl md:text-2xl text-white/70 transition-all duration-700 ${
                  index === currentPhrase ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {phrase}
              </p>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Free Discovery
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-slate-900 bg-white hover:bg-white/90 hover:text-slate-900 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            <p className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Lock className="w-4 h-4" />
              No credit card required • 5-minute assessment
            </p>
          </div>

          {/* Trust badges */}

           {/* 
           <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10,000+</div>
              <div className="text-sm text-white/60">Leaders Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-white/60">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">92%</div>
              <div className="text-sm text-white/60">Report Growth</div>
            </div>
          </div>
          */}
          
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 text-white/60 text-sm text-white/60 animate-bounce py-4 mt-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium">Explore Your Journey</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

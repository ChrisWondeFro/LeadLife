"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const steps = [
  {
    id: "discover",
    number: "01",
    icon: "🔍",
    title: "Discover Your Unique Blueprint",
    description: "AI-powered assessments reveal your leadership DNA",
    duration: "5 min",
  },
  {
    id: "understand",
    number: "02",
    icon: "💡",
    title: "Understand Your Superpowers",
    description: "Learn how your sensitivity patterns create strength",
    duration: "Instant",
  },
  {
    id: "evolve",
    number: "03",
    icon: "🌱",
    title: "Evolve With Intelligent Guidance",
    description: "Daily micro-practices tailored to your growth edge",
    duration: "Ongoing",
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Your Journey to{" "}
          <span className="bg-gradient-to-r from-[#7B61FF] to-[#00D4AA] bg-clip-text text-transparent">
            Authentic Leadership
          </span>
        </h2>

        <div className="max-w-4xl mx-auto mt-16">
          {/* Progress Line */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#7B61FF] to-[#00D4AA] -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activeStep + 1) * 33.33}%` }}
            />

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${
                    index <= activeStep
                      ? "bg-gradient-to-r from-[#7B61FF] to-[#00D4AA] text-white scale-110"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={step.id}
                className={`p-6 cursor-pointer transition-all ${
                  index === activeStep ? "ring-2 ring-[#7B61FF] shadow-lg" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>

          {/* Demo CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={() => {
                const demoSection = document.getElementById("demo-section")
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Try Interactive Demo
              <Play className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingDown, TrendingUp } from "lucide-react"

const painPoints = [
  { icon: "😔", text: "One-size-fits-all success metrics" },
  { icon: "🎭", text: "Pretending sensitivity is weakness" },
  { icon: "🏃", text: "Hustle culture burnout cycle" },
  { icon: "📊", text: "External validation addiction" },
]

const solutions = [
  { icon: "✨", text: "Personalized growth pathways" },
  { icon: "💪", text: "Sensitivity as evolutionary advantage" },
  { icon: "🌊", text: "Sustainable flow-state living" },
  { icon: "🧭", text: "Internal compass calibration" },
]

const stats = [
  { target: 92, label: "Feel unseen in traditional systems", suffix: "%" },
  { target: 76, label: "Hide their true sensitivity", suffix: "%" },
  { target: 84, label: "Crave authentic leadership models", suffix: "%" },
]

export default function ProblemSection() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.target) {
                current = stat.target
                clearInterval(timer)
              }
              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, 30)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Why 87% of People Feel Like They're{" "}
            <span className="relative">
              <span className="relative z-10">Failing at Life</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 250 2 298 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Traditional success metrics weren't designed for sensitive, thoughtful leaders like you
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-red-50 to-orange-50 border-0 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Old Paradigm</h3>
              </div>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/50 rounded-lg p-4"
                  >
                    <span className="text-3xl flex-shrink-0">{point.icon}</span>
                    <div>
                      <p className="text-slate-700 font-medium">{point.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* LeadLife Way */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full filter blur-3xl opacity-20" />
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The LeadLife Revolution</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/50 rounded-lg p-4"
                  >
                    <span className="text-3xl flex-shrink-0">{solution.icon}</span>
                    <div>
                      <p className="text-slate-700 font-medium">{solution.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl transform rotate-1" />
          <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {counts[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-white/80 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

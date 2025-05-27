"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, Users, BarChart3, Waves, Target, Bot, Sparkles, Shield } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Tri-Vector Leadership Profile",
    description: "Discover your unique blend of Necessity, Generosity, and Personality-driven leadership",
    size: "large",
    icon: BarChart3,
    gradient: "from-violet-500 to-purple-500",
    href: "/features/tri-vector-leadership",
  },
  {
    title: "Safe 360° Feedback",
    description: "Get honest insights from people who know you best - anonymously and kindly",
    size: "medium",
    icon: Users,
    gradient: "from-pink-500 to-rose-500",
    href: "/features/360-feedback",
  },
  {
    title: "Big 5 Personality",
    description: "Scientific assessment meets human insight",
    size: "small",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Flow State Optimizer",
    description: "Find your peak performance zone",
    size: "small",
    icon: Waves,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "Sensitivity Profiler",
    description: "Map your unique sensitivity patterns",
    size: "small",
    icon: Target,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "AI Leadership Coach",
    description: "24/7 personalized guidance and support",
    size: "medium",
    icon: Bot,
    gradient: "from-indigo-500 to-purple-500",
    href: "/features/ai-coach",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Comprehensive Suite</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Everything You Need to <span className="gradient-text">Lead Your Life</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A complete toolkit designed for sensitive leaders who want to thrive authentically
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const colSpan =
              feature.size === "large" ? "md:col-span-2" : feature.size === "medium" ? "md:col-span-2" : "md:col-span-1"
            const rowSpan = feature.size === "large" ? "md:row-span-2" : "md:row-span-1"
            const Icon = feature.icon

            const CardContent = (
              <Card className="h-full p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 flex-grow">{feature.description}</p>

                  {feature.size !== "small" && (
                    <Button variant="ghost" className="mt-6 self-start group-hover:text-purple-600">
                      Learn more →
                    </Button>
                  )}
                </div>
              </Card>
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${colSpan} ${rowSpan}`}
              >
                {feature.href ? (
                  <Link href={feature.href} className="block h-full">
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-2 text-slate-600">
            <Shield className="w-5 h-5" />
            <span>Bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Shield className="w-5 h-5" />
            <span>GDPR compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Shield className="w-5 h-5" />
            <span>Your data stays yours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

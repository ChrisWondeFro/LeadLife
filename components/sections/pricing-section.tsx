"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Explorer",
    price: 0,
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Basic Tri-Vector Assessment",
      "Personal Leadership Profile",
      "Weekly Growth Insights",
      "Community Access",
    ],
    cta: "Start Free",
    popular: false,
    gradient: "from-slate-600 to-slate-700",
  },
  {
    name: "Growth",
    price: 29,
    period: "/month",
    description: "Most popular for serious growth",
    features: [
      "Everything in Explorer",
      "Full Sensitivity Profile (SAEF+)",
      "Anonymous 360° Feedback",
      "AI Leadership Coach 24/7",
      "Personalized Daily Practices",
      "Flow State Optimizer",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
    gradient: "from-violet-600 to-purple-600",
  },
  {
    name: "Evolution",
    price: 79,
    period: "/month",
    description: "For transformational leaders",
    features: [
      "Everything in Growth",
      "1-on-1 Coaching Sessions",
      "Custom Growth Roadmap",
      "Priority Support",
      "Advanced Analytics",
      "Team Features",
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-purple-600 to-pink-600",
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Start Leading Your Life <span className="gradient-text">Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Choose the path that fits your journey. Upgrade or downgrade anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "relative z-10" : ""}
            >
              <Card className={`relative h-full p-8 border-0 shadow-xl ${plan.popular ? "scale-105 shadow-2xl" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-600 text-lg">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {plan.popular && (
                  <p className="text-center text-sm text-slate-600 mt-4">✨ 30-day money-back guarantee</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mt-16">
          <p className="text-slate-600">
            Questions about pricing?{" "}
            <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
              Check our FAQ
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

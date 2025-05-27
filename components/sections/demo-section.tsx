"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, TrendingUp, Heart, Lightbulb } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "When facing a challenge, I tend to:",
    options: [
      { value: "N", text: "Jump in and solve it immediately", emoji: "⚡", color: "from-orange-500 to-red-500" },
      { value: "G", text: "Consider how it affects others first", emoji: "💭", color: "from-pink-500 to-purple-500" },
      { value: "P", text: "See it as an opportunity to innovate", emoji: "✨", color: "from-blue-500 to-cyan-500" },
    ],
  },
  {
    id: 2,
    text: "I feel most energized when:",
    options: [
      { value: "N", text: "Achieving concrete results", emoji: "🎯", color: "from-green-500 to-emerald-500" },
      { value: "G", text: "Helping others succeed", emoji: "🤝", color: "from-purple-500 to-pink-500" },
      { value: "P", text: "Exploring new possibilities", emoji: "🚀", color: "from-indigo-500 to-purple-500" },
    ],
  },
  {
    id: 3,
    text: "My ideal work environment is:",
    options: [
      { value: "N", text: "Fast-paced and goal-oriented", emoji: "🏃", color: "from-red-500 to-orange-500" },
      { value: "G", text: "Collaborative and supportive", emoji: "👥", color: "from-teal-500 to-green-500" },
      { value: "P", text: "Creative and flexible", emoji: "🎨", color: "from-purple-500 to-indigo-500" },
    ],
  },
]

const results = {
  N: {
    name: "Necessity",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    description:
      "You lead with urgency and drive. Your ability to cut through complexity and deliver results is your superpower.",
    strengths: ["Decisive action", "Results-focused", "Problem-solving"],
  },
  G: {
    name: "Generosity",
    icon: Heart,
    color: "from-pink-500 to-purple-500",
    description:
      "You lead with heart and consideration. Your sensitivity to others' needs is a powerful leadership asset.",
    strengths: ["Empathy", "Team building", "Emotional intelligence"],
  },
  P: {
    name: "Personality",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500",
    description:
      "You lead with creativity and vision. Your unique perspective transforms challenges into opportunities.",
    strengths: ["Innovation", "Vision", "Adaptability"],
  },
}

export default function DemoSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setShowResult(true)
      }, 300)
    }
  }

  const getResult = () => {
    const counts = answers.reduce(
      (acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const primary = Object.entries(counts).sort(([, a], [, b]) => b - a)[0][0]
    return results[primary as keyof typeof results]
  }

  const reset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const result = showResult ? getResult() : null
  const ResultIcon = result?.icon

  return (
    <section
      id="demo-section"
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Demo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">
            Experience LeadLife in <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12">Get a taste of your leadership style right now</p>

          <Card className="p-8 md:p-12 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-slate-500 mb-3">
                      <span className="font-medium">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="font-medium">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-8 text-slate-900">{questions[currentQuestion].text}</h3>

                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`w-full text-left p-6 rounded-2xl border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 group hover:shadow-lg bg-gradient-to-r ${option.color} bg-opacity-0 hover:bg-opacity-5`}
                        onClick={() => handleAnswer(option.value)}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform">{option.emoji}</span>
                          <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900">
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-8"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 shadow-glow-lg">
                    {ResultIcon && <ResultIcon className="w-12 h-12 text-white" />}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900">Your Primary Leadership Vector:</h3>
                    <div
                      className={`text-5xl font-bold bg-gradient-to-r ${result?.color} bg-clip-text text-transparent mb-6`}
                    >
                      {result?.name}
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 max-w-lg mx-auto">{result?.description}</p>

                  <div className="flex flex-wrap justify-center gap-3">
                    {result?.strengths.map((strength, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-purple-700 font-medium"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 space-y-4">
                    <Button size="lg" className="btn-primary w-full sm:w-auto">
                      Unlock Your Complete Profile
                      <span className="ml-2">→</span>
                    </Button>

                    <div>
                      <Button variant="ghost" onClick={reset} className="text-slate-600 hover:text-slate-900">
                        Take Assessment Again
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  )
}

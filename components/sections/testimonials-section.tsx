"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Maya Chen",
    age: 28,
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100&text=MC",
    quote: "I always thought my sensitivity made me weak. LeadLife showed me it's actually my strategic advantage.",
    before: "Burned out, impostor syndrome",
    after: "Leading with authentic confidence",
    rating: 5,
  },
  {
    id: 2,
    name: "James Martinez",
    age: 24,
    role: "Graduate Student",
    image: "/placeholder.svg?height=100&width=100&text=JM",
    quote: "Finally understood why traditional success paths felt so wrong. Now I'm creating my own.",
    before: "Lost and directionless",
    after: "Clear on my unique path",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    age: 31,
    role: "Product Manager",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
    quote: "The 360 feedback was life-changing. I discovered strengths I never knew I had.",
    before: "Constantly second-guessing",
    after: "Trusting my intuition",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Leaders Like You Are <span className="gradient-text">Already Transforming</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Join thousands who've discovered their authentic leadership style
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 md:p-12 shadow-2xl border-0 bg-white relative overflow-hidden">
                  <Quote className="absolute top-8 right-8 w-24 h-24 text-purple-100" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-900">
                          {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                        </h4>
                        <p className="text-slate-600 mb-2">{testimonials[currentIndex].role}</p>
                        <div className="flex gap-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Before LeadLife
                          </span>
                          <p className="text-lg font-medium text-slate-700 mt-1">{testimonials[currentIndex].before}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                            After LeadLife
                          </span>
                          <p className="text-lg font-medium text-slate-900 mt-1">{testimonials[currentIndex].after}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all ${
                      index === currentIndex
                        ? "w-8 h-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                        : "w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: "10K+", label: "Active Leaders" },
              { number: "4.9", label: "Average Rating" },
              { number: "92%", label: "Report Growth" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

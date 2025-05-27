"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage > 70 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <>
      {/* Page Section CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#1a1f71] via-[#7B61FF] to-[#00D4AA]">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Authentic Leadership Journey Starts Now</h2>
            <p className="text-xl mb-8 text-white/90">
              Join 10,000+ people discovering their true leadership potential
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1a1f71] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold"
            >
              Begin Your Free Assessment
            </Button>
            {/* <p className="text-sm text-gray-600">🔥 437 people started their journey today</p> */}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-slide-up">
          <Card className="max-w-2xl mx-auto p-6 shadow-2xl bg-white/95 backdrop-blur">
            <button onClick={handleDismiss} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-lg">Ready to discover your leadership style?</h3>
                {/* <p className="text-sm text-gray-600">🔥 437 people started their journey today</p> */}
              </div>
              <Button className="bg-gradient-to-r from-[#7B61FF] to-[#00D4AA] text-white">
                Begin Your Free Assessment
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

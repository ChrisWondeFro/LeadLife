"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Play, CheckCircle, MessageCircle, Star } from "lucide-react"
import { useState } from "react"

export default function AICoachPage() {
  const [demoMessage, setDemoMessage] = useState("")
  const [demoConversation, setDemoConversation] = useState([
    {
      role: "ai",
      content: "Hi! I'm your LeadLife coach. I'm here to support your leadership journey. What's on your mind today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!demoMessage.trim()) return

    // Add user message
    setDemoConversation([...demoConversation, { role: "user", content: demoMessage }])
    setDemoMessage("")

    // Simulate AI typing
    setIsTyping(true)

    // Sample responses based on common questions
    let aiResponse =
      "I understand how that might be challenging. Based on what you've shared, I'd suggest focusing on your strengths first. What aspects of this situation do you feel confident about?"

    if (demoMessage.toLowerCase().includes("imposter syndrome")) {
      aiResponse =
        "Imposter syndrome is common among thoughtful leaders. Your awareness of it is actually a sign of self-reflection. Let's explore what triggers these feelings for you, and how your unique leadership style can turn this sensitivity into a strength."
    } else if (demoMessage.toLowerCase().includes("burnout") || demoMessage.toLowerCase().includes("burning out")) {
      aiResponse =
        "I'm hearing that you're experiencing burnout, which is a serious concern. Your well-being matters. Let's identify what's draining your energy and create boundaries that honor your needs while still allowing you to lead effectively."
    } else if (demoMessage.toLowerCase().includes("assertive")) {
      aiResponse =
        "Being assertive doesn't mean changing who you are. Based on your leadership profile, you can leverage your natural empathy while clearly expressing your needs. Let's practice some communication approaches that feel authentic to you."
    }

    // Add AI response after a delay
    setTimeout(() => {
      setIsTyping(false)
      setDemoConversation((prev) => [...prev, { role: "ai", content: aiResponse }])
    }, 1500)
  }

  const handlePromptClick = (prompt: string) => {
    setDemoMessage(prompt)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium">
                Always There For You
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Personal Leadership Coach, Available 24/7
              </h1>
              <p className="text-xl text-white/80">
                Imagine having a wise, patient coach who knows your unique leadership style, remembers your journey, and
                is always ready to help—without judgment, agenda, or hourly fees.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xl flex-shrink-0">
                    🧠
                  </div>
                  <div>
                    <strong className="block text-white">Knows You Deeply</strong>
                    <span className="text-white/70">Trained on your profile & growth journey</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xl flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <strong className="block text-white">Instant Support</strong>
                    <span className="text-white/70">Get guidance the moment you need it</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <strong className="block text-white">Practical & Personal</strong>
                    <span className="text-white/70">Advice tailored to your exact situation</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary">
                  Talk to Your Coach Now
                  <span className="ml-2 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-xs">Online</span>
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-slate-900 hover:bg-white/10">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Coach in Action
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-slate-200 p-3 rounded-2xl rounded-tl-none">
                      <p className="text-slate-800">
                        I'm struggling with a difficult conversation with my co-founder...
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    {isTyping ? (
                      <div className="bg-rose-100 p-4 rounded-2xl rounded-tr-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-rose-100 p-3 rounded-2xl rounded-tr-none">
                        <p className="text-slate-800">
                          I understand how challenging co-founder dynamics can be. Based on your Tri-Vector profile, you
                          tend to avoid conflict (high Generosity). Let's practice framing this conversation in a way
                          that honors both your needs...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our AI Coach Different */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Not Your Average Chatbot</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with advanced psychology, trained on real leadership scenarios, and personalized to your unique
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-3xl mb-6">
                🎓
              </div>
              <h3 className="text-2xl font-bold mb-4">Psychologically Grounded</h3>
              <p className="text-slate-600 mb-6">
                Trained on evidence-based coaching methodologies, CBT, positive psychology, and leadership research
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Socratic questioning techniques</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Growth mindset reinforcement</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Emotional validation skills</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-3xl mb-6">
                🔍
              </div>
              <h3 className="text-2xl font-bold mb-4">Deeply Contextual</h3>
              <p className="text-slate-600 mb-6">
                Remembers your history, goals, and patterns to provide increasingly personalized guidance
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Tracks your growth over time</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>References past conversations</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Adapts to your communication style</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-3xl mb-6">
                💡
              </div>
              <h3 className="text-2xl font-bold mb-4">Action-Oriented</h3>
              <p className="text-slate-600 mb-6">
                Doesn't just listen—helps you create concrete plans and holds you accountable with gentle check-ins
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Breaks down big goals</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Suggests micro-practices</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span>Celebrates your progress</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Your Coach Can Help With Everything</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">☀️</span>
                <h3 className="text-2xl font-bold">Daily Leadership Challenges</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I need to give difficult feedback"</p>
                  <p className="text-slate-600">→ Practice scripts based on your communication style</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I'm feeling overwhelmed"</p>
                  <p className="text-slate-600">→ Personalized stress management techniques</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"Team meeting didn't go well"</p>
                  <p className="text-slate-600">→ Debrief and plan for next time</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📈</span>
                <h3 className="text-2xl font-bold">Career & Life Transitions</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"Should I take this job offer?"</p>
                  <p className="text-slate-600">→ Decision framework aligned with your values</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I want to start my own thing"</p>
                  <p className="text-slate-600">→ Explore your entrepreneurial readiness</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I feel stuck in my career"</p>
                  <p className="text-slate-600">→ Uncover hidden growth opportunities</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌱</span>
                <h3 className="text-2xl font-bold">Personal Development</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I want more confidence"</p>
                  <p className="text-slate-600">→ Build on your unique strengths</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"My sensitivity feels overwhelming"</p>
                  <p className="text-slate-600">→ Transform sensitivity into superpower</p>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">"I need better boundaries"</p>
                  <p className="text-slate-600">→ Design boundaries that fit your style</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Try Your AI Coach Right Now</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ask a real leadership question and see how personalized coaching feels
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-6 border-0 shadow-2xl">
              <div className="mb-6">
                <h4 className="font-bold mb-3">Try asking about:</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePromptClick("How do I deal with imposter syndrome?")}
                    className="text-left"
                  >
                    "How do I deal with imposter syndrome?"
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handlePromptClick("I'm burning out, what should I do?")}
                    className="text-left"
                  >
                    "I'm burning out, what should I do?"
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handlePromptClick("How can I be more assertive?")}
                    className="text-left"
                  >
                    "How can I be more assertive?"
                  </Button>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 h-80 overflow-y-auto mb-4">
                {demoConversation.map((message, index) => (
                  <div key={index} className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === "user" ? "bg-slate-200 rounded-tr-none" : "bg-rose-100 rounded-tl-none"
                      }`}
                    >
                      <p className="text-slate-800">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex mb-4 justify-start">
                    <div className="bg-rose-100 p-3 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Input
                  value={demoMessage}
                  onChange={(e) => setDemoMessage(e.target.value)}
                  placeholder="Type your question..."
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-rose-600 hover:bg-rose-700 text-white">
                  Send
                </Button>
              </div>

              <p className="text-center text-sm text-slate-500 mt-4">
                This is a limited demo. Sign up for full personalized coaching.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Coaching Philosophy</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Strengths-First</h3>
              <p className="text-slate-600">
                We believe in building on what's already working, not fixing what's "broken"
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-bold mb-2">Self-Directed</h3>
              <p className="text-slate-600">
                You have the answers within—we help you find them through powerful questions
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-2">Compassionate</h3>
              <p className="text-slate-600">
                Growth happens in safety—our AI coach provides unconditional positive regard
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Practical</h3>
              <p className="text-slate-600">Every conversation leads to concrete next steps you can actually take</p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Built on Proven Methodologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-full shadow-md text-slate-700">
                Cognitive Behavioral Coaching
              </span>
              <span className="px-4 py-2 bg-white rounded-full shadow-md text-slate-700">Positive Psychology</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-md text-slate-700">Solution-Focused Therapy</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-md text-slate-700">
                Mindfulness-Based Leadership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Ethics */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Your Conversations Are Sacred</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-slate-600">Your coaching conversations are encrypted and private</p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold mb-2">No Human Review</h3>
              <p className="text-slate-600">No human ever reads your conversations with your AI coach</p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-xl font-bold mb-2">Delete Anytime</h3>
              <p className="text-slate-600">Full control to delete any or all conversations permanently</p>
            </Card>

            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-2">Ethical AI</h3>
              <p className="text-slate-600">Designed to empower, never manipulate or create dependency</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Life-Changing Conversations</h2>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-2xl">
              <div className="space-y-4 mb-8">
                <div className="flex justify-end">
                  <div className="max-w-[80%] p-3 bg-slate-200 rounded-2xl rounded-tr-none">
                    <p className="text-slate-800">"I don't know if I should stay at my job or pursue my passion"</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 bg-rose-100 rounded-2xl rounded-tl-none">
                    <p className="text-slate-800">
                      "Let's explore what 'passion' means to you. Based on your high Personality vector, authentic
                      expression is crucial for your fulfillment..."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-slate-50 p-6 rounded-xl">
                <p className="text-lg text-slate-700 italic mb-4">
                  "That conversation changed my life. My coach helped me see I could integrate my passion INTO my
                  current role. I'm now leading our company's innovation lab."
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=SJ"
                    alt="Sarah"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Sarah, 31</div>
                    <div className="text-slate-600">Product Manager</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-900 via-red-900 to-rose-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Coaching That Actually Gets You?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands who've found clarity, confidence, and direction through personalized AI coaching
              </p>

              <div className="space-y-6">
                <Button size="lg" className="btn-primary">
                  Start Free Trial
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">14 days, no card required</span>
                </Button>

                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-white/90 mb-2">Then just $29/month for unlimited coaching</p>
                  <Link href="/pricing" className="text-white underline hover:text-white/80">
                    See all pricing options →
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span>Your coach is ready to chat</span>
              </div>

              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-2xl">
                <MessageCircle className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

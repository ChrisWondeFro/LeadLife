import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Play, CheckCircle, ArrowRight } from "lucide-react"

export default function TriVectorLeadershipPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-12 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container relative z-10 px-8 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium">
                Revolutionary Framework
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">The Tri-Vector Leadership Profile</h1>
              <p className="text-xl text-white/80">
                Stop trying to fit into someone else's leadership box. Discover the unique blend of motivations that
                drive <span className="text-yellow-400 font-semibold">your</span> authentic leadership style.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">94%</div>
                  <div className="text-sm text-white/70">Report breakthrough self-understanding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3.2x</div>
                  <div className="text-sm text-white/70">More accurate than traditional assessments</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary">
                  Take the Assessment
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">⏱ 5 minutes</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-slate-500 hover:bg-white/10">
                  <Play className="mr-2 w-4 h-4" />
                  Watch 2-min Overview
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* This would be a Three.js component in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 relative">
                    {/* Triangle visualization placeholder */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon
                        points="50,10 10,90 90,90"
                        fill="none"
                        stroke="url(#triangleGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2E4FFF" />
                          <stop offset="50%" stopColor="#7B61FF" />
                          <stop offset="100%" stopColor="#FFB800" />
                        </linearGradient>
                      </defs>

                      {/* Vertices */}
                      <circle cx="50" cy="10" r="5" fill="#7B61FF" className="animate-pulse" />
                      <circle
                        cx="10"
                        cy="90"
                        r="5"
                        fill="#2E4FFF"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="5"
                        fill="#FFB800"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />

                      {/* Labels */}
                      <text x="50" y="5" textAnchor="middle" fill="white" fontSize="4">
                        Personality
                      </text>
                      <text x="5" y="95" textAnchor="start" fill="white" fontSize="4">
                        Necessity
                      </text>
                      <text x="95" y="95" textAnchor="end" fill="white" fontSize="4">
                        Generosity
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="absolute bottom-0 text-white/60 text-sm">✨ Move your cursor to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Why Most Traditional Leadership Models Fail
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-red-50 border-red-100">
              <h3 className="text-2xl font-bold mb-6 text-red-800 flex items-center">
                <span className="mr-2">🚫</span> The Old Way
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-2xl">📊</span>
                  <div>
                    <strong className="block text-lg">Binary Classifications</strong>
                    <p className="text-slate-600">You're either a "leader" or "follower"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <strong className="block text-lg">Fixed Personality Types</strong>
                    <p className="text-slate-600">Puts you in a box that never changes</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">📈</span>
                  <div>
                    <strong className="block text-lg">Corporate-Centric</strong>
                    <p className="text-slate-600">Only measures workplace leadership</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-green-50 border-green-100">
              <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                <span className="mr-2">✨</span> The Tri-Vector Way
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-2xl">🌊</span>
                  <div>
                    <strong className="block text-lg">Dynamic Spectrum</strong>
                    <p className="text-slate-600">Your leadership flows between three core synergies</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <strong className="block text-lg">Context-Aware</strong>
                    <p className="text-slate-600">Shows how you adapt to different situations</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">💫</span>
                  <div>
                    <strong className="block text-lg">Life-Holistic</strong>
                    <p className="text-slate-600">Applies to relationships, creativity, and self-leadership</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* The Three Vectors Explained */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Understanding Your Three Leadership Energies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We all carry these three forces within us—it's the unique blend that makes you, you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Necessity Vector */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h3 className="text-2xl font-bold">Necessity</h3>
                    <span className="text-blue-600 font-medium">The Responder</span>
                  </div>
                </div>

                <p className="text-slate-700 mb-6">
                  You rise when called. Crisis clarifies your purpose. Obligation transforms into opportunity.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">You might be Necessity-driven if:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>You're the one everyone turns to in emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>You find clarity under pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Duty and responsibility motivate you deeply</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>You lead best when stakes are high</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">Real-world examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Emergency room doctor
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Single parent</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Startup founder in crisis
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Community organizer
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <h4 className="font-bold mb-1">Watch out for:</h4>
                  <p className="text-slate-600 text-sm">
                    Burnout from constant crisis mode • Difficulty delegating • Waiting for problems before acting
                  </p>
                </div>
              </div>
            </Card>

            {/* Generosity Vector */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full filter blur-3xl opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💝</span>
                  <div>
                    <h3 className="text-2xl font-bold">Generosity</h3>
                    <span className="text-yellow-600 font-medium">The Nurturer</span>
                  </div>
                </div>

                <p className="text-slate-700 mb-6">
                  You lead by lifting others. Their growth is your reward. Service is your superpower.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">You might be Generosity-driven if:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>You naturally mentor and coach others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Team success feels better than personal wins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>You create safe spaces for people to grow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Empathy guides your decisions</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">Real-world examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Teacher or coach
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Therapist</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Non-profit leader
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Team lead</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <h4 className="font-bold mb-1">Watch out for:</h4>
                  <p className="text-slate-600 text-sm">
                    Self-neglect • Avoiding necessary conflict • Being taken advantage of • Martyr complex
                  </p>
                </div>
              </div>
            </Card>

            {/* Personality Vector */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">✨</span>
                  <div>
                    <h3 className="text-2xl font-bold">Personality</h3>
                    <span className="text-purple-600 font-medium">The Visionary</span>
                  </div>
                </div>

                <p className="text-slate-700 mb-6">
                  You lead through magnetic presence. Vision pulls you forward. Authenticity is your authority.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">You might be Personality-driven if:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>People follow your energy and ideas naturally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>You see possibilities others miss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Authentic expression is non-negotiable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>You inspire through who you are, not what you do</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">Real-world examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Artist or creative
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Thought leader</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Entrepreneur</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Influencer</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <h4 className="font-bold mb-1">Watch out for:</h4>
                  <p className="text-slate-600 text-sm">
                    Ego inflation • Disconnection from practical needs • Instability • Creating cults of personality
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Balance Callout */}
          <div className="mt-16 max-w-3xl mx-auto text-center bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">The Magic is in Your Mix</h3>
            <p className="text-lg text-slate-700 mb-6">
              No one is 100% one vector. Your power comes from understanding your unique blend and when each energy
              serves you best.
            </p>
            <Button size="lg" className="btn-primary">
              Discover Your Unique Blend
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How Assessment Works */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Your 5-Minute Journey to Self-Discovery</h2>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  01
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">Scenario-Based Questions</h3>
                <p className="text-slate-600 mb-6">
                  No right or wrong answers—just real situations that reveal your natural leadership instincts
                </p>
                <Card className="p-6 bg-slate-50 border-0">
                  <p className="font-medium mb-4">
                    "Your friend is struggling with a major life decision. What's your first instinct?"
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      Help them make a practical plan
                    </div>
                    <div className="p-3 bg-white rounded-lg hover:bg-yellow-50 cursor-pointer transition-colors">
                      Listen and provide emotional support
                    </div>
                    <div className="p-3 bg-white rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                      Share your vision for their potential
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  02
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">AI-Powered Analysis</h3>
                <p className="text-slate-600 mb-6">
                  Our advanced algorithms detect patterns in your responses, considering context and nuance—not just
                  surface answers
                </p>
                <div className="h-48 bg-slate-50 rounded-xl flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                          className="w-32 h-32 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"
                          style={{ animationDuration: "3s" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-24 h-24 rounded-full border-4 border-purple-200 border-b-purple-600 animate-spin"
                          style={{ animationDirection: "reverse", animationDuration: "1s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  03
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">Your Personal Leadership Map</h3>
                <p className="text-slate-600 mb-6">
                  Receive a detailed breakdown of your tri-vector balance, contextual variations, and growth
                  opportunities
                </p>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Sample+Leadership+Report"
                      alt="Sample leadership report"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Real People, Real Transformations</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Necessity-driven testimonial */}
            <Card className="p-8 border-0 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
              <div className="mb-6 flex items-center gap-2">
                <span className="text-blue-500 bg-blue-100 p-1 rounded-full">⚡</span>
                <span className="text-sm font-semibold text-blue-700">Necessity-Primary</span>
              </div>

              <blockquote className="text-slate-700 mb-6 italic">
                "I always felt guilty about only performing well in crisis. LeadLife showed me this is actually my
                superpower. Now I intentionally create 'positive pressure' to channel my energy."
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=AR"
                  alt="Alex Rivera"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <strong className="block">Alex Rivera</strong>
                  <span className="text-slate-600 text-sm">Startup Founder</span>
                </div>
              </div>
            </Card>

            {/* Generosity-driven testimonial */}
            <Card className="p-8 border-0 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />
              <div className="mb-6 flex items-center gap-2">
                <span className="text-yellow-500 bg-yellow-100 p-1 rounded-full">💝</span>
                <span className="text-sm font-semibold text-yellow-700">Generosity-Primary</span>
              </div>

              <blockquote className="text-slate-700 mb-6 italic">
                "I was burning out trying to help everyone. The Tri-Vector profile showed me how to set boundaries while
                still honoring my natural generosity. Game-changer!"
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=ML"
                  alt="Maria Lopez"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <strong className="block">Maria Lopez</strong>
                  <span className="text-slate-600 text-sm">Non-profit Director</span>
                </div>
              </div>
            </Card>

            {/* Personality-driven testimonial */}
            <Card className="p-8 border-0 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />
              <div className="mb-6 flex items-center gap-2">
                <span className="text-purple-500 bg-purple-100 p-1 rounded-full">✨</span>
                <span className="text-sm font-semibold text-purple-700">Personality-Primary</span>
              </div>

              <blockquote className="text-slate-700 mb-6 italic">
                "I always felt like I was 'too much' for traditional leadership roles. LeadLife helped me see my
                creative energy as a strength, not something to suppress."
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=JT"
                  alt="Jordan Taylor"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <strong className="block">Jordan Taylor</strong>
                  <span className="text-slate-600 text-sm">Creative Director</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">
                How is this different from Myers-Briggs or other personality tests?
              </h3>
              <p className="text-slate-600">
                While traditional tests put you in fixed categories, Tri-Vector recognizes that leadership is fluid and
                contextual. You're not a 'type'—you're a dynamic blend that shifts based on situation, growth, and
                intention.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Can my tri-vector balance change over time?</h3>
              <p className="text-slate-600">
                As you grow and face new experiences, your leadership blend evolves. We recommend retaking the
                assessment quarterly to track your growth.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What if I score equally on all three vectors?</h3>
              <p className="text-slate-600">
                That's actually powerful! Balanced leaders can adapt to any situation. Your report will show you how to
                leverage this flexibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Discover Your Leadership DNA?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join 50,000+ people who've discovered their authentic leadership style with the Tri-Vector Profile
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="btn-primary">
                Start Your Free Assessment
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Results in 5 minutes</span>
              </Button>
              <Button variant="outline" className="border-white/20 text-slate-900 hover:bg-white/10">
                View Sample Report
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Private & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧪</span>
                <span>Science-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

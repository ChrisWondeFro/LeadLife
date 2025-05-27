import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, Lock, Heart, Target, Play, CheckCircle, ArrowRight } from "lucide-react"

export default function FeedbackPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium">
                Revolutionary Honesty
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Finally, Feedback That Helps Instead of Hurts
              </h1>
              <p className="text-xl text-white/80">
                Discover how others truly experience your leadership—through anonymous, structured, and psychologically
                safe feedback that celebrates growth over judgment.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-teal-400" />
                  <span>100% Anonymous & Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 text-teal-400" />
                  <span>Strengths-Based Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Target className="w-5 h-5 text-teal-400" />
                  <span>Actionable Insights</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary">
                  Set Up Your First 360°
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Free with account</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-slate-900 hover:bg-white/10">
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Avatar constellation visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Center avatar */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-bold border-4 border-white">
                        You
                      </div>
                    </div>

                    {/* Orbiting avatars */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * Math.PI * 2) / 8
                      const radius = 120
                      const x = Math.cos(angle) * radius
                      const y = Math.sin(angle) * radius
                      const delay = i * 0.5

                      return (
                        <div
                          key={i}
                          className="absolute w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center animate-pulse"
                          style={{
                            top: `calc(50% + ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                            transform: "translate(-50%, -50%)",
                            animationDelay: `${delay}s`,
                          }}
                        >
                          <Image
                            src={`/placeholder.svg?height=48&width=48&text=👤`}
                            alt=""
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                      )
                    })}

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * Math.PI * 2) / 8
                        const radius = 120
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius

                        return (
                          <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${x}px)`}
                            y2={`calc(50% + ${y}px)`}
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                          />
                        )
                      })}
                    </svg>
                  </div>
                </div>
              </div>
              <p className="absolute bottom-0 text-white/60 text-sm">
                Your feedback circle: Safe, anonymous, transformative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Traditional Feedback */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Most Feedback Systems Fail</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-2">Fear-Based</h3>
              <p className="text-slate-600">People hold back truth to avoid conflict or protect relationships</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Vague & Unhelpful</h3>
              <p className="text-slate-600">"Be more confident" or "communicate better"—but HOW?</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-xl font-bold mb-2">Emotionally Damaging</h3>
              <p className="text-slate-600">Harsh criticism without context crushes confidence</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Too Late</h3>
              <p className="text-slate-600">Annual reviews catch problems after they're entrenched</p>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">LeadLife's 360° Feedback is Different</h3>
            <p className="text-lg text-slate-700">
              We've reimagined feedback from the ground up—making it safe, specific, and actually helpful for growth
            </p>
          </div>
        </div>
      </section>

      {/* How Our 360° Works */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            A Feedback Process That Actually Feels Good
          </h2>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-4xl">
                  👥
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">1. Choose Your Circle</h3>
                <p className="text-slate-600 mb-4">
                  Select 3-10 people who know different sides of you—colleagues, friends, family, mentors
                </p>
                <div className="flex items-center gap-2 bg-teal-50 text-teal-800 p-3 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    ✨
                  </div>
                  <span>AI suggests optimal mix for balanced perspective</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-4xl">
                  💌
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">2. Send Secure Invites</h3>
                <p className="text-slate-600 mb-4">
                  Share temporary links that expire after use. No accounts needed. Complete anonymity guaranteed.
                </p>
                <Card className="p-4 border border-slate-200">
                  <div className="space-y-2">
                    <p className="font-medium">Subject: Help [Your Name] grow - 5 min anonymous feedback</p>
                    <p className="text-slate-600">
                      Hi! [Your Name] values your perspective and invited you to share anonymous feedback through
                      LeadLife's secure platform...
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-4xl">
                  📝
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">3. Guided Feedback</h3>
                <p className="text-slate-600 mb-4">
                  Respondents answer structured questions designed by psychologists to elicit helpful, specific insights
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    "What's one thing [Name] does that positively impacts others?"
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    "If [Name] could develop one skill, what would help them most?"
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    "Describe a time when [Name] showed exceptional leadership..."
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-4xl">
                  🤖
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">4. Intelligent Synthesis</h3>
                <p className="text-slate-600 mb-4">
                  Our AI identifies patterns, themes, and insights—filtering out outliers and presenting balanced
                  perspective
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-teal-50 text-teal-800 rounded-lg text-center text-sm">
                    • Sentiment balancing
                  </div>
                  <div className="p-2 bg-teal-50 text-teal-800 rounded-lg text-center text-sm">• Theme extraction</div>
                  <div className="p-2 bg-teal-50 text-teal-800 rounded-lg text-center text-sm">
                    • Actionable recommendations
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-4xl">
                  📊
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold mb-3">5. Your Growth Report</h3>
                <p className="text-slate-600 mb-4">
                  Receive a beautiful, actionable report that celebrates strengths and frames growth opportunities
                  positively
                </p>
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">View Sample Report →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust Features */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Designed for Psychological Safety</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                🔐
              </div>
              <h3 className="text-xl font-bold mb-2">Bank-Level Encryption</h3>
              <p className="text-slate-600">All feedback is encrypted end-to-end. Even we can't see who said what.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                👤
              </div>
              <h3 className="text-xl font-bold mb-2">True Anonymity</h3>
              <p className="text-slate-600">No tracking, no IP logging, no way to identify respondents. Ever.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                🎭
              </div>
              <h3 className="text-xl font-bold mb-2">Response Mixing</h3>
              <p className="text-slate-600">Feedback is shuffled and synthesized so you can't guess who said what.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                ⚖️
              </div>
              <h3 className="text-xl font-bold mb-2">Balanced Presentation</h3>
              <p className="text-slate-600">
                AI ensures feedback is constructive and balanced, filtering out pure negativity.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-2">Your Control</h3>
              <p className="text-slate-600">
                You decide when to run feedback rounds and who to include. Delete anytime.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-4">
                📋
              </div>
              <h3 className="text-xl font-bold mb-2">No Surprises</h3>
              <p className="text-slate-600">See exact questions before sending. Know what your circle will be asked.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">360° Feedback for Every Life Leader</h2>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="professional" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="creative">Creative</TabsTrigger>
                <TabsTrigger value="transition">Life Transitions</TabsTrigger>
              </TabsList>

              <TabsContent value="professional" className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Level Up Your Career</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">New Manager</h4>
                    <p className="text-slate-600">Get early feedback on your leadership style from your team</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Job Seeker</h4>
                    <p className="text-slate-600">Understand how others see your strengths for better positioning</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Entrepreneur</h4>
                    <p className="text-slate-600">Learn how cofounders and advisors experience your leadership</p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="personal" className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Deepen Relationships</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Life Partner</h4>
                    <p className="text-slate-600">Understand how you show up in your closest relationships</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Parent</h4>
                    <p className="text-slate-600">Get honest feedback from family on your parenting approach</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Friend</h4>
                    <p className="text-slate-600">Learn how to be a better friend and support system</p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="creative" className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Enhance Your Creative Process</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Artist</h4>
                    <p className="text-slate-600">Get feedback on your work from your audience and peers</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Writer</h4>
                    <p className="text-slate-600">Understand how your content resonates with different readers</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Designer</h4>
                    <p className="text-slate-600">Gather insights on your design approach and user experience</p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="transition" className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Navigate Major Changes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Career Pivot</h4>
                    <p className="text-slate-600">Understand your transferable skills from those who know you best</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">Relocation</h4>
                    <p className="text-slate-600">Get insights on how you adapt to new environments and cultures</p>
                  </Card>
                  <Card className="p-4 border-0 bg-slate-50">
                    <h4 className="font-bold mb-2">New Chapter</h4>
                    <p className="text-slate-600">Gather wisdom as you enter a new phase of life or relationship</p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Choose Your Feedback Frequency</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Explorer</h3>
              <div className="text-4xl font-bold mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>1 feedback round per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Up to 5 respondents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Basic report</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <div className="text-4xl font-bold mb-6">
                $29<span className="text-lg text-slate-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Unlimited feedback rounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Up to 15 respondents per round</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Advanced AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Custom questions</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                Start 14-Day Trial
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Teams</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Everything in Growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Team-wide feedback loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Organizational insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full">Contact Us</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Feedback That Actually Helps?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands who've transformed their leadership through honest, safe feedback
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="btn-primary">
                Set Up Your First 360°
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Free to start</span>
              </Button>
              <Button variant="outline" className="border-white/20 text-slate-900 hover:bg-white/10">
                View Sample Report
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>Bank-Level Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

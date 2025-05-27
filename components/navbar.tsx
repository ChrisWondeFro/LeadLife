"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Features",
    href: "#",
    children: [
      { name: "Tri-Vector Leadership", href: "/features/tri-vector-leadership" },
      { name: "360° Feedback", href: "/features/360-feedback" },
      { name: "AI Coach", href: "/features/ai-coach" },
    ],
  },
  //{ name: "Pricing", href: "/pricing" },
  //{ name: "About", href: "/about" },
  //{ name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm text-slate-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              LeadLife
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname.startsWith("/features")
                          ? "text-violet-600 bg-violet-50"
                          : isScrolled
                            ? "text-slate-700 hover:text-violet-600 hover:bg-slate-50"
                            : "text-slate-500 hover:text-slate-500 hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {featuresOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200/50 overflow-hidden"
                        >
                          {item.children.map((child, index) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-4 py-3 text-sm transition-colors hover:bg-slate-50 text-slate-900 ${
                                isActive(child.href) ? "text-violet-600 bg-violet-50" : "text-slate-700"
                              } ${index !== item.children!.length - 1 ? "border-b border-slate-100" : "text-slate-900"}`}
                            >
                              <div className="font-medium">{child.name}</div>
                              <div className="text-xs text-slate-500 mt-1">
                                {child.name === "Tri-Vector Leadership" && "Discover your leadership DNA"}
                                {child.name === "360° Feedback" && "Safe, anonymous insights"}
                                {child.name === "AI Coach" && "24/7 personalized guidance"}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? isScrolled
                          ? "text-violet-600 bg-violet-50"
                          : "text-slate-900 bg-violet-600/20"
                        : isScrolled
                          ? "text-slate-900 hover:text-violet-600 hover:bg-slate-50"
                          : "text-slate-900 hover:text-violet-600 hover:bg-violet-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className={
                  isScrolled
                    ? "text-slate-700 hover:text-violet-600"
                    : "text-violet-600  bg-violet-50  hover:text-violet-600 hover:bg-violet-200"
                }
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-500 hover:bg-slate-900" : "text-slate-500 hover:bg-slate-900"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <div className="text-sm font-medium text-slate-900 mb-2 hover:bg-violet-600">{item.name}</div>
                        <div className="space-y-2 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 text-sm transition-colors hover:bg-violet-600 ${
                                isActive(child.href) ? "text-violet-600 font-medium hover:text-violet-600 bg-violet-600" : "text-slate-600 hover:text-violet-600 hover:bg-violet-600"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-sm font-medium transition-colors ${
                          isActive(item.href) ? "text-violet-600" : "text-slate-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-slate-700">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

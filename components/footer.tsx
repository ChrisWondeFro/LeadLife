import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LeadLife</h3>
            <p className="text-gray-400">Empowering authentic leadership through intelligent understanding</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#00D4AA] transition-colors">
                𝕏
              </Link>
              <Link href="#" className="hover:text-[#00D4AA] transition-colors">
                in
              </Link>
              <Link href="#" className="hover:text-[#00D4AA] transition-colors">
                📷
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/science" className="text-gray-400 hover:text-white transition-colors">
                  The Science
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Leadership Blog
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sensitivity-test" className="text-gray-400 hover:text-white transition-colors">
                  Free Sensitivity Test
                </Link>
              </li>
              <li>
                <Link href="/leadership-quiz" className="text-gray-400 hover:text-white transition-colors">
                  Leadership Style Quiz
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Growth Guides
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Weekly Wisdom</h4>
            <p className="text-gray-400 mb-4">Leadership insights for sensitive souls</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-gradient-to-r from-[#7B61FF] to-[#00D4AA] text-white">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 LeadLife. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

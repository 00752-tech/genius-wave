import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">TryGeniusWave.online</h3>
            <p className="text-sm">
              Unlock your cognitive potential with scientifically-backed brainwave entrainment technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#features" className="text-sm hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#benefits" className="text-sm hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="#testimonials" className="text-sm hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:passiveincomestreaming@gmail.com" className="hover:text-white transition-colors">
                passiveincomestreaming@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} TryGeniusWave.online. All rights reserved.
            </p>
            <div className="text-xs text-gray-400 space-y-2 text-center md:text-right">
              <p>
                {`Video content is shared under YouTube's Terms of Service. All trademarks, service marks, trade names, product names and logos appearing on the site are the property of their respective owners.`}
              </p>
              <p>
                {`Expert testimonials and user success stories are fictional and used for illustrative purposes only. Any resemblance to real persons is purely coincidental.`}
              </p>
              <p>
                Individual results may vary. The Genius Wave is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p>
                This site may contain affiliate links. We may receive a commission for purchases made through these links at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.
          See our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> for more information.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Accept
          </Button>
          <Button
            onClick={declineCookies}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}


import { Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react'

export function SocialShare() {
  const shareUrl = 'https://trygeniuswave.online' // Replace with your actual URL
  const shareText = 'Activate Your Genius Wave - Achieve mental clarity and focus!'

  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: 'LinkedIn', icon: Linkedin, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}` },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-6">
          <span className="text-white text-lg font-semibold">Share</span>
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
              aria-label={`Share on ${platform.name}`}
            >
              <platform.icon size={24} />
            </a>
          ))}
          <div className="animate-pulse">
            <ArrowRight size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}


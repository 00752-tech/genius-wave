import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
}

export function CTAButton({ children, className = '' }: CTAButtonProps) {
  return (
    <Button
      asChild
      className={`text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-2 border-transparent transition-all duration-300 rounded-full transform hover:scale-105 ${className}`}
    >
      <a href="/api/sale">
        {children}
      </a>
    </Button>
  )
}


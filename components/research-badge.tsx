import { Award } from 'lucide-react'

export function ResearchBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
      <Award className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-medium text-white">Clinically Validated Research</span>
    </div>
  )
}


import { Book, GraduationCap, Rocket, Brain, Building } from 'lucide-react'

export function ScientificReferences() {
  const references = [
    {
      name: "Nature Neuroscience",
      icon: Book,
      description: "Published groundbreaking research on brainwave entrainment"
    },
    {
      name: "Stanford University",
      icon: GraduationCap,
      description: "Conducted extensive studies on cognitive enhancement techniques"
    },
    {
      name: "NASA",
      icon: Rocket,
      description: "Utilized brainwave technology for astronaut mental acuity"
    },
    {
      name: "Journal of Neuroscience",
      icon: Brain,
      description: "Featured multiple papers on audio-induced neural plasticity"
    },
    {
      name: "Columbia University",
      icon: Building,
      description: "Researched long-term effects of regular brainwave training"
    }
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          Scientific References and Clinical Studies Supporting The Genius Wave:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref) => (
            <div key={ref.name} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
              <ref.icon className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{ref.name}</h3>
              <p className="text-blue-100 text-sm">{ref.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


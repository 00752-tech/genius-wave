import Image from 'next/image'
import { Brain, Headphones, Package, Smartphone, Zap, Focus, Lightbulb, Activity, Award, Clock, Shield, Users } from 'lucide-react'
import { VideoReview } from '@/components/video-review'
import { ScientificReferences } from '@/components/scientific-references'
import { FloatingNav } from '@/components/floating-nav'
import { SocialShare } from '@/components/social-share'
import { CTAButton } from '@/components/cta-button'
import { ResearchBadge } from '@/components/research-badge'
import TimelineSection from '@/components/timeline-section'

function TrustIndicators() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {[
        { icon: Users, text: "100,000+ Active Users" },
        { icon: Award, text: "97% Success Rate" },
        { icon: Clock, text: "90-Day Guarantee" },
        { icon: Shield, text: "100% Secure Payment" }
      ].map((indicator, index) => (
        <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <indicator.icon className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-white">{indicator.text}</span>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingNav />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: "url('/large-neural-network-bg.svg')",
              backgroundSize: "cover",
              animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }} 
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center text-white z-10">
          <div className="mb-6 flex justify-center">
            <ResearchBadge />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
           {` Unlock Your Brain's`}
            <span className="block text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
              Hidden Potential
            </span>
          </h1>

          <div className="space-y-4 mb-8 text-xl md:text-2xl animate-fade-in-delay">
            <p className="flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-blue-400" /> Boost Cognitive Performance by 257%
            </p>
            <p className="flex items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-blue-400" /> Unlock Photographic Memory in Just 7 Days
            </p>
            <p className="flex items-center justify-center gap-2">
              <Focus className="w-6 h-6 text-blue-400" /> Achieve Zen-Like Focus in Minutes
            </p>
          </div>

          <div className="relative group">
            <CTAButton>
              Unlock Your Brain&apos;s Full Potential
              <span className="block text-sm">(90-Day Money Back Guarantee)</span>
            </CTAButton>
          </div>

          <TrustIndicators />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-80">
          <div className="relative w-full h-full animate-float">
            <Image
              src="https://gogeniuswave.com/images/s16img.png"
              alt="Brainwave optimization visualization"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Text-heavy section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold text-blue-900 mb-8 leading-tight">
            {` Unlock Your Mind's`}
            <span className="block text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
              Full Potential
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700">
            Experience cognitive enhancement like never before with Genius Wave&apos;s revolutionary brainwave technology.
          </p>
        </div>
      </section>

      {/* Expert Endorsement Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Expert Endorsements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Nova Blackwood, Ph.D.",
                title: "Quantum Neuroscience Researcher",
                quote: "The frequency patterns used in Genius Wave are backed by decades of research in cognitive enhancement.",
                image: "/placeholder.svg?height=100&width=100&text=NB"
              },
              {
                name: "Prof. Kai Zhang-Sterling",
                title: "Advanced Cognitive Systems Expert",
                quote: "I've seen remarkable improvements in cognitive function among users of this technology.",
                image: "/placeholder.svg?height=100&width=100&text=KZ"
              },
              {
                name: "Dr. Aurora Thorne",
                title: "Neural Integration Specialist",
                quote: "The safety and efficacy of these specific brainwave patterns are well-documented.",
                image: "/placeholder.svg?height=100&width=100&text=AT"
              }
            ].map((expert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{expert.name}</h3>
                    <p className="text-sm text-gray-600">{expert.title}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">{`"${expert.quote}"`}</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Studies Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Research & Clinical Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cognitive Enhancement Study",
                institution: "Stanford Neuroscience Department",
                year: "2024",
                findings: "257% improvement in cognitive performance using specific brainwave frequencies",
                participants: "1,000+ participants"
              },
              {
                title: "Long-term Effects Analysis",
                institution: "Harvard Brain Science Initiative",
                year: "2024",
                findings: "Sustained improvements in memory and focus over 6-month period",
                participants: "500+ participants"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{study.institution}</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Year:</strong> {study.year}</p>
                  <p><strong>Key Findings:</strong> {study.findings}</p>
                  <p><strong>Sample Size:</strong> {study.participants}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Snippet Optimized Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What is Brainwave Entrainment?</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              <strong>Brainwave entrainment</strong> is a method to stimulate the brain into entering a specific state by using pulsing sound, light, or electromagnetic fields. This technique:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Synchronizes brain waves with external stimuli</li>
              <li>Enhances focus, relaxation, and cognitive performance</li>
              <li>Utilizes frequencies like delta, theta, alpha, and beta waves</li>
              <li>Can improve memory, creativity, and problem-solving abilities</li>
            </ul>
            <p>
              The Genius Wave leverages advanced brainwave entrainment techniques to unlock your brain&apos;s hidden potential and boost cognitive performance.
            </p>
          </div>
        </div>
      </section>

      {/* Video Review Section */}
      <section id="testimonials" className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
            Discover How The Genius Wave Audio Improves Focus and Memory
          </h2>
          <VideoReview />
        </div>
      </section>

      {/* Scientific References Section */}
      <ScientificReferences />

      {/* Product Features */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://gogeniuswave.com/images/s16img.png"
                alt="The Genius Wave Brainwave Synchronization Bundle"
                fill
                className="object-contain animate-pulse"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 animate-slide-up">
                Transform Your Mind with Neuroscience-Backed Audio
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Package, text: "Complete Digital Brainwave Therapy Program" },
                  { icon: Headphones, text: "Premium Brainwave Entrainment Experience" },
                  { icon: Smartphone, text: "Mobile App for On-the-Go Mental Performance Boost" },
                  { icon: Brain, text: "Scientifically-Backed Cognitive Enhancement Technology" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 animate-fade-in bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-lg text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 animate-slide-up">
            Experience the Benefits of Brainwave Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Increase Creativity", description: "Unlock your creative potential and generate innovative ideas." },
              { icon: Focus, title: "Improve Focus", description: "Enhance your concentration and stay focused on important tasks." },
              { icon: Brain, title: "Boost Memory", description: "Strengthen your memory and recall information more easily." },
              { icon: Zap, title: "Enhance Mental Clarity", description: "Experience clearer thinking and improved decision-making." },
              { icon: Activity, title: "Reduce Stress", description: "Achieve a state of calm and relaxation through brainwave synchronization." },
              { icon: Package, title: "Optimize Brain Function", description: "Improve overall cognitive performance and mental acuity." },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in border border-gray-200" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            How The Genius Wave Transforms Your Mind
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Theta Wave Activation",
                description: "Unlock deep relaxation and creativity by stimulating theta brainwaves, typically only achieved in deep meditation or just before sleep."
              },
              {
                icon: Brain,
                title: "Neural Pathway Optimization",
                description: "Strengthen neural connections, enhancing memory recall, learning capacity, and overall cognitive function."
              },
              {
                icon: Activity,
                title: "Stress Reduction Protocol",
                description: "Activate your parasympathetic nervous system, reducing cortisol levels and promoting a state of calm focus."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton>
              Experience The Genius Wave Now
              <span className="block text-sm">(Limited Time Offer)</span>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How does Genius Wave improve cognitive performance?",
                answer: "Genius Wave uses advanced brainwave entrainment techniques to synchronize your brain waves with specific frequencies. This process enhances neural connectivity, improves focus, and boosts overall cognitive function. By regularly using Genius Wave, users can experience increased mental clarity, improved memory retention, and enhanced problem-solving abilities."
              },
              {
                question: "Is Genius Wave safe to use?",
                answer: "Yes, Genius Wave is completely safe for most users. It utilizes non-invasive audio technology that has been extensively researched and tested. However, individuals with a history of seizures or epilepsy should consult with their healthcare provider before use."
              },
              {
                question: "How long does it take to see results with Genius Wave?",
                answer: "Many users report feeling immediate effects, such as increased focus and relaxation, after their first session. However, for long-term cognitive improvements, consistent use over 4-6 weeks is recommended. Individual results may vary based on factors such as frequency of use and personal neuroplasticity."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Success Stories */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real User Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Phoenix R.",
                profession: "Software Engineer",
                story: "After 3 weeks of using Genius Wave, my problem-solving speed increased dramatically. I'm now able to tackle complex coding challenges with greater clarity.",
                improvement: "45% faster problem-solving"
              },
              {
                name: "Luna S.",
                profession: "Medical Student",
                story: "The memory enhancement features helped me retain complex medical terminology much more effectively. My exam scores improved significantly.",
                improvement: "32% better retention"
              },
              {
                name: "Atlas K.",
                profession: "Business Analyst",
                story: "The focus-enhancing sessions have been a game-changer for my analytical work. I can maintain peak concentration for much longer periods.",
                improvement: "3x longer focus periods"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.profession}</p>
                </div>
                <p className="text-gray-700 mb-4">{`"${story.story}"`}</p>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Result: {story.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neural-network-bg.svg')] opacity-10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Join Over 100,000 Satisfied Users
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in max-w-2xl mx-auto">
            Experience the scientifically-proven benefits of The Genius Wave brainwave entrainment technology. Start your journey to enhanced cognitive performance today.
          </p>
          <CTAButton className="bg-white text-blue-900 hover:bg-blue-50">
            Start Your Brain Training Now
            <span className="block text-sm">(90-Day Money Back Guarantee)</span>
          </CTAButton>

          {/* Money-back guarantee details */}
          <div className="mt-8 text-sm text-blue-100">
            <p>✓ 90-Day Money-Back Guarantee</p>
            <p>✓ Secure Payment Processing</p>
            <p>✓ Instant Digital Access</p>
          </div>
        </div>
      </section>

      {/* Social Share Buttons */}
      <SocialShare />
    </main>
  )
}


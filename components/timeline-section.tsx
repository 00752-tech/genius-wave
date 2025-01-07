'use client'

import { useRef } from 'react'
import { Brain, Zap, Focus, Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

interface TimelineItemProps {
  week: number
  title: string
  description: string
  icon: React.ElementType
  isLast?: boolean
}

const TimelineItem = ({ week, title, description, icon: Icon, isLast }: TimelineItemProps) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={itemRef}
      className="relative flex items-start gap-8 md:gap-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: week * 0.1 }}
    >
      {!isLast && (
        <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent" />
      )}
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div className="text-center">
            <div className="text-sm font-semibold">WEEK</div>
            <div className="text-2xl font-bold">{week}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 group">
        <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1, delay: week * 0.2 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const timelineItems = [
  {
    week: 1,
    title: "Enhanced Focus",
    description: "Experience sharper concentration and mental clarity within the first week. Many users report improved ability to maintain focus for extended periods.",
    icon: Focus
  },
  {
    week: 2,
    title: "Improved Memory",
    description: "Notice significant improvements in short-term memory and information retention. Perfect for students and professionals dealing with complex information.",
    icon: Brain
  },
  {
    week: 4,
    title: "Cognitive Clarity",
    description: "Enjoy clearer thinking and faster problem-solving abilities. Users report enhanced decision-making capabilities and creative insights.",
    icon: Zap
  },
  {
    week: 8,
    title: "Peak Performance",
    description: "Reach new heights of mental acuity and creativity. Experience the full potential of your cognitive capabilities.",
    icon: Star
  }
]

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Genius Wave Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track your progression to enhanced cognitive performance with our scientifically-designed program
          </motion.p>
        </div>
        <div className="space-y-12 relative">
          <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5" />
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={item.week}
              {...item}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


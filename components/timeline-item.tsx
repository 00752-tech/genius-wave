import { FC } from 'react'

interface TimelineItemProps {
  week: number
  title: string
  description: string
}

export const TimelineItem: FC<TimelineItemProps> = ({ week, title, description }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        W{week}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}


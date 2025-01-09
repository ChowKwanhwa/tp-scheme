"use client"

import * as React from "react"
import { cn } from "../../../lib/utils"

interface ProgressProps {
  value?: number
  className?: string
}

const Progress: React.FC<ProgressProps> = ({ value = 0, className }) => {
  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-100", className)}>
      <div
        className="h-full bg-green-500 transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

export { Progress }

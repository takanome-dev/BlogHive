import React from 'react'
import { VariantProps, cva } from "class-variance-authority"
import { cn } from '@/lib/utils'

const labelVariants = cva()

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof labelVariants> {
  name: string
}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(({className, name}, ref) => {
  return (
    <span className={cn("rounded-lg border border-blue-600 px-2 py-1 text-blue-600", className)} ref={ref}>
              {name}
            </span>
  )
})

export {Label}
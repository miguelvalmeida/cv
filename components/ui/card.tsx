import type * as React from 'react'

import { cn } from '@/lib/utils'

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="card"
    className={cn('rounded-lg bg-card text-card-foreground', className)}
    {...props}
  />
)

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="card-header"
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
)

const CardTitle = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3
    data-slot="card-title"
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
)

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p
    data-slot="card-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
)

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="card-content"
    className={cn(
      'text-pretty font-mono text-sm text-muted-foreground',
      className
    )}
    {...props}
  />
)

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="card-footer"
    className={cn('flex items-center', className)}
    {...props}
  />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

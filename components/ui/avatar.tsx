'use client'

import * as React from 'react'
import { Avatar as AvatarPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

const Avatar = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
)

const AvatarImage = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
)

const AvatarFallback = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
)

export { Avatar, AvatarImage, AvatarFallback }

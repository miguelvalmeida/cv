'use client'

import { PrinterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Print() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="size-8"
      onClick={() => window.print()}
    >
      <PrinterIcon className="size-4" />
      <span className="sr-only">Print CV</span>
    </Button>
  )
}

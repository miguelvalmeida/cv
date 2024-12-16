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
      aria-label="Print CV"
    >
      <PrinterIcon className="size-4" />
    </Button>
  )
}

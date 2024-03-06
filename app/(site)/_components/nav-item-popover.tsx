'use client'

import { ReactNode } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { AiOutlineClose } from 'react-icons/ai'
import NavbarButton from './navbar-button'
import Link from 'next/link'

interface NavItemPopoverProps {
  children: ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}
export const NavItemPopover = ({
  children,
  side,
  align,
  sideOffset,
}: NavItemPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="flex flex-col space-y-4 md:hidden bg-transparent w-screen border-none rounded-none shadow-none "
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        <div className="w-full py-4 bg-gray-100">
          <Button
            className="group hover:bg-transparent text-gray-600 text-2xl"
            size="sm"
            variant="ghost"
          >
            <Link href={'/features'}>Features</Link>
            <div className="h-1 group-hover:bg-blue-600 rounded-md" />
          </Button>
        </div>
        <div className="w-full py-4 bg-gray-100">
          <Button
            className="group hover:bg-transparent "
            size="sm"
            variant="ghost"
          >
            <Link href={'/privacy'}>Privacy & safety</Link>
            <div className="h-1 group-hover:bg-blue-600 rounded-md" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

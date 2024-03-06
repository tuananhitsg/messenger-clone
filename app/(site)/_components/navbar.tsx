'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  useEventListener,
  useDebounceCallback,
  useOnClickOutside,
} from 'usehooks-ts'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { Popover } from '@/components/ui/popover'
import { LuEqual } from 'react-icons/lu'

import NavbarButton from './navbar-button'
import { NavItemPopover } from '@/app/(site)/_components/nav-item-popover'
import { AiOutlineClose } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
export const Navbar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isPopoverActive, setIsPopoverActive] = useState(false)
  const navPopoverRef = useRef(null)
  const pathName = usePathname()

  useEffect(() => {
    setIsPopoverActive(false)
    window.scrollTo(0, 0)
    console.log('moi vao')
  }, [])
  const handleScroll = useDebounceCallback(() => {
    const scrollTop = window.scrollY
    setIsTop(scrollTop === 0)
    console.log('roll ne')
  }, 100)
  const handleClickOutside = () => {
    setIsPopoverActive(false)
  }
  //dùng throttle() xử lí số lần gọi hàm scroll top cũng được. Debounce khi quan tâm kq cuối cùng
  useEventListener('scroll', handleScroll)
  useOnClickOutside(navPopoverRef, handleClickOutside)

  return (
    <div className="fixed z-50 flex top-0 w-full h-[100px] bg-white items-center ">
      <div
        className={cn(
          'fixed top-0 w-full border-b h-[100px]',
          isTop ? 'opacity-0' : ''
        )}
      ></div>
      <div className="px-8 max-w-7xl relative md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between">
          <NavbarButton text="Features" href="/features" />
          <NavbarButton text="Privacy & safety" href="/privacy" />
          <NavItemPopover side="bottom" sideOffset={40}>
            <Button
              ref={navPopoverRef}
              variant="ghost"
              size="sm"
              className="block md:hidden hover:bg-transparent"
              onClick={() => setIsPopoverActive(!isPopoverActive)}
            >
              {isPopoverActive ? (
                <AiOutlineClose className="h-full w-full" />
              ) : (
                <LuEqual className="h-full w-full" />
              )}
            </Button>
          </NavItemPopover>
        </div>
      </div>
    </div>
  )
}

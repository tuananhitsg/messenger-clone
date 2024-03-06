import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavbarButtonProps {
  isActive?: boolean
  className?: string
  href: string
  text: string
  asChild?: boolean
}
const NavbarButton: FC<NavbarButtonProps> = ({
  text,
  href,
  isActive,
  className,
}) => {
  const pathName = usePathname()
  return (
    <Button
      className={cn(
        'h-fit w-fit tracking-wider group hover:bg-transparent hidden md:inline-flex text-sm font-semibold',
        className
      )}
      size="sm"
      variant="ghost"
    >
      <Link href={href}>
        {text}
        <div
          className={cn(
            'h-1 group-hover:bg-blue-600 rounded-md',
            pathName === href && 'h-1 bg-blue-600 rounded-md'
          )}
        />
      </Link>
    </Button>
  )
}

export default NavbarButton

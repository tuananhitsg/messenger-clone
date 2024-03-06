'use client'

import { forwardRef, useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, InputProps } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        className="h-9 px-4 py-1 bg-gray-200/50 border-none rounded-xl placeholder:text-md text-md focus-visible:outline-offset-0 focus-visible:ring-offset-blue-600"
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomInput.displayName = 'CustomInput'
const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="relative">
        <CustomInput
          type={showPassword ? 'text' : 'password'}
          className={className}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { CustomInput, PasswordInput }

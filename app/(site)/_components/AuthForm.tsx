'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { useCallback, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { RiTwitterXFill } from 'react-icons/ri'

import AuthSocialButton from './AuthSocialButton'
import Link from 'next/link'
import { PasswordInput, CustomInput } from '@/components/inputs/input'

type Variant = 'LOGIN' | 'REGISTER'

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters',
  }),
})
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })
  const toggleVariant = useCallback(() => {
    form.reset()
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant, form])
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    if (variant === 'REGISTER') {
      //axios register
    }
    if (variant === 'LOGIN') {
      //nextauth login
    }
    console.log(values)
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6 lg:w-3/4 md:w-full">
            {variant === 'REGISTER' && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <CustomInput
                        className=" placeholder:text-xl text-xl"
                        disabled={isLoading}
                        placeholder="Name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="pl-2" />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      className="bg-gray-200/50 border-none rounded-xl placeholder:text-xl text-xl"
                      disabled={isLoading}
                      placeholder="Email address"
                      type="email"
                      autoComplete="username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <PasswordInput
                      className="text-xl"
                      disabled={isLoading}
                      placeholder="Password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full justify-start">
            <Button
              size="lg"
              disabled={isLoading}
              type="submit"
              className="mt-8 px-5 text-base rounded-3xl font-semibold bg-blue-500  hover:bg-blue-600 focus-visible:outline-sky-600"
            >
              {variant === 'LOGIN' ? 'Log in' : 'Register'}
            </Button>
            <Button
              size="sm"
              variant="link"
              asChild
              className=" pl-5 text-blue-500 hover:underline text-base font-semibold"
            >
              <Link href="/auth/reset">Forgotten your password?</Link>
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-6 lg:w-3/4 md:w-full">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex  justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-3 flex gap-3 justify-center">
          <AuthSocialButton
            icon={FcGoogle}
            onClick={() => socialAction('google')}
          />
          <AuthSocialButton
            icon={RiTwitterXFill}
            onClick={() => socialAction('x')}
          />
        </div>
      </div>
      <div className="flex lg:w-3/4 md:w-full gap-2 justify-center text-sm mt-6 text-gray-500">
        <div>
          {variant === 'LOGIN'
            ? 'Do not have an account?'
            : 'Already have an account?'}
        </div>
        <div
          onClick={toggleVariant}
          className="underline cursor-pointer text-blue-500"
        >
          {variant === 'LOGIN' ? 'Create new account' : 'Login'}
        </div>
      </div>
    </div>
  )
}

export default AuthForm

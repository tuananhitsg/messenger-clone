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
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              {variant === 'REGISTER' && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="Name"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              className=" w-full bg-blue-500  hover:bg-blue-600 focus-visible:outline-sky-600 mt-8"
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
            <Button size="sm" variant="link" asChild className="px-0 w-full pt-4">
              <Link href="/auth/reset">
                <div className="text-blue-500 hover:underline">
                  Forgotten password ?
                </div>
              </Link>
            </Button>
          </form>
        </Form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className=" w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2 justify-center">
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
        <div className="flex gap-2 justify-center text-sm mt-6 text-gray-500">
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
    </div>
  )
}

export default AuthForm

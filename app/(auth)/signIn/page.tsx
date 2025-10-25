'use client'
import React from 'react'
import InputField from '@/components/form/InputField'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import FooterLink from '@/components/form/FooterLink'
import { signInWithEmail } from '@/lib/actions/auth.action'


type SignInFormData = {
  email: string
  password: string
}

// temporary placeholder for signInWithEmail - replace with your real implementation


const signIn = () => {
  const route = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>(
    { defaultValues: { email: '', password: '' }, 
    mode: 'onBlur' })

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data)
      if (result.success) {
        route.push('/')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to sign in.')
    }
  }

  return (
    <>
    <h1 className='form-title'>Welcome Back,  Start Your Journey</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="email"
        label="Email Address"
        placeholder="contact@gmail.com"
        type="text"
        register={register}
        error={errors.email?.message}
        validation={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
      />
      {errors.email && <p className="form-error">{errors.email?.message}</p>}

      <InputField
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        register={register}
        error={errors.password?.message}
        validation={{ required: 'password is required', minLength: 8, maxLength: 20 }}
      />
      {errors.password && <p className="form-error">{errors.password?.message}</p>}

      <button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </button>
      <FooterLink
        text="Don't have an account?"
        linkText="Sign Up"  
        href="/signUp"
      />  
    </form>
     </>
  )
 
}

export default signIn;

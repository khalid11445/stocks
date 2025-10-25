'use client'

import FooterLink from "@/components/form/FooterLink";
import InputField from "@/components/form/InputField";
import { SelectCountryField } from "@/components/form/SelectCountryField";

import SelectedField from "@/components/form/SelectedField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/Nav_Items";
import { Select } from "@radix-ui/react-select";
import { SubmitHandler, useForm } from "react-hook-form";

const signUp = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors , isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'GROWTH',
      riskTolerance: 'MEDIUM',
      preferredIndustry: 'TECHNOLOGY',
      
    },
    mode: 'onBlur',
  });
    const onsubmited= async (data:SignUpFormData) => {
      try{
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
  return (
    <>
      <h1 className='form-title'> Sign up && Personalize</h1>

      <form onSubmit={handleSubmit(onsubmited)} className="space-y-5">
    {/* Inputs */}

  <InputField
    name="fullName"
    label="Full Name"
    placeholder="John Doe"
    type="text"
    register={register}
    error={errors.fullName?.message}
    validation={{ required: 'Full name is required', minlength:2}}
  />
  {errors.fullName && <p className="form-error">{errors.fullName?.message}</p>}

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
    validation={{ required: 'password is required', minlength:8,maxlength:20 }}
  />
  {errors.password && <p className="form-error">{errors.password?.message}</p>}


      {/* Country */}

          <SelectCountryField 
          name="country"
          label="Country"
          placeholder="Select your country"
          control={control}
          required
          error={errors.country}/>



         <SelectedField
          name="investmentGoals"
          label="Investment Goals"
          control={control}
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          required
          error={errors.investmentGoals?.message}/>

           <SelectedField
          name="riskTolerance"
          label="Risk Tolerance"
          control={control}
          placeholder="Select your Risk Tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          required
          error={errors.riskTolerance?.message}/>

           <SelectedField
          name="preferredIndustry"
          label="Preferred Industry"
          control={control}
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          required
          error={errors.preferredIndustry?.message}/>


  <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
    {isSubmitting ? 'Creating Account' : 'Start your journey investing'}
  </button>
  <FooterLink
  text="Already have an account?"
  linkText="Sign In"
  href="/signIn"
  />



      

</form>
    </>
  )
}

export default signUp

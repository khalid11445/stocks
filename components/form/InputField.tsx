import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"

import React from "react"


const   InputField = ({name, label, value='text', register, validation, disabled, placeholder, error}: FormInputProps & { error?: React.ReactNode }) => {
  return (
    <div className="space-y-8">
      <Label htmlFor={name} className="form-label mb-2 block">
        {label}
      </Label>
      <input
        id={name}
        type={value}
        placeholder={placeholder}
        {...register(name, validation)}
        disabled={disabled}
        className={cn('form-input w-full', { 'opacity-50 cursor-not-allowed': disabled })}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default InputField

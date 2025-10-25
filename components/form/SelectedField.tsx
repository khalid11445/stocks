import { Label } from '@radix-ui/react-label'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Controller } from 'react-hook-form'

const SelectedField = ({name, label, required=false, placeholder, control, error, options}:SelectFieldProps) => {
  return (
    <><div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>{label}</Label>
          <Controller
              name={name}
              control={control}
              rules={{ required: required ? `Please Select ${label} ` : false }}
              render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="select-trigger">
                          <SelectValue placeholder={placeholder} />
                      </SelectTrigger>
                      <SelectContent className='bg-gray-800 border-gray-600 text-white'>
                          {options?.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value} className='focus:bg-gray-700 focus:text-white'>
                                  {opt.label}
                              </SelectItem>
                          ))}
                      </SelectContent>
                       {error && <p className="form-error">{error.message}</p> }
                  </Select>
                 
              )} />


      </div></>
  )
}

export default SelectedField

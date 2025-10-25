'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useState } from "react";
import { Controller, type Control, type FieldError } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import countryList from 'react-select-country-list';
import { cn } from "@/lib/utils";

type CountrySelectProps = {
  name: string;
  label: string;
  control: Control<any>;
  error?: FieldError;
  required?: boolean;
  placeholder?: string;
};

const SelectCountry = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const countries = countryList().getData();

  const getFlagImogie = (countryCode: string = '') => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            role="combobox"
            aria-expanded={open}
            className="country-select-trigger flex items-center justify-between w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white"
          >
            {value ? (
              <>
                <span>{getFlagImogie(value)}</span>
                <span>
                  {countries.find(
                    (c: { value: string; label: string }) => c.value === value
                  )?.label}
                </span>
              </>
            ) : (
              'Select Country'
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0 bg-gray-800 border-gray-600" align="start">
          <Command className="bg-gray-800 border-gray-600">
            <CommandInput placeholder="Search countries..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandList className="max-h-60 overflow-y-auto">
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={`${country.label} ${country.value}`}
                    onSelect={() => {
                      onChange(country.value);
                      setOpen(false);
                    }}
                    className="country-select-item text-white"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 text-yellow-500",
                        value === country.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="flex items-center gap-2">
                      <span>{getFlagImogie(country.value)}</span>
                      <span>{country.label}</span>
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const SelectCountryField = ({
  name,
  label,
  required = false,
  control,
  error,
  placeholder,
}: CountrySelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label text-white">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <SelectCountry value={field.value} onChange={field.onChange} />
        )}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
      <p className="text-xs text-gray-400">
        Helps us show market data and news relevant to you.
      </p>
    </div>
  );
};

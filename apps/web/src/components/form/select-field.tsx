import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@org/design-system/components/ui/select'
import type { ComponentProps } from 'react'

interface SelectFieldProps extends Omit<ComponentProps<typeof Select>, 'form'> {
  name: string
  label?: string
  placeholder?: string
  description?: string
  form: any
  className?: string
  options: Array<{ label: string; value: string }>
}

export function SelectField({
  form,
  name,
  label,
  placeholder,
  description,
  options,
  className,
  ...inputProps
}: SelectFieldProps) {
  return (
    <form.AppField name={name}>
      {(field: any) => (
        <form.Item>
          {label && <field.Label>{label}</field.Label>}
          <div className="flex flex-row gap-2 items-center w-full">
            <field.Control>
              <Select
                name={field.name}
                value={field.state.value}
                onValueChange={field.handleChange}
                {...inputProps}
              >
                <SelectTrigger className={className}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectPositioner alignItemWithTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectPositioner>
              </Select>
            </field.Control>
            {description && (
              <field.Description>{description}</field.Description>
            )}
          </div>
          <field.Message />
        </form.Item>
      )}
    </form.AppField>
  )
}

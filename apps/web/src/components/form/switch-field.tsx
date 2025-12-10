import { Switch } from '@org/design-system/components/ui/switch'
import type { ComponentProps } from 'react'

interface SwitchFieldProps extends Omit<ComponentProps<typeof Switch>, 'form'> {
  name: string
  label?: string
  placeholder?: string
  description?: string
  form: any
}

export function SwitchField({
  form,
  name,
  label,
  placeholder,
  description,
  ...inputProps
}: SwitchFieldProps) {
  return (
    <form.AppField name={name}>
      {(field: any) => (
        <form.Item>
          {label && <field.Label>{label}</field.Label>}
          <div className="flex flex-row gap-2 items-center">
            <field.Control>
              <Switch
                checked={field.state.value as boolean}
                onCheckedChange={field.handleChange}
                onBlur={field.handleBlur}
                name={field.name}
              />
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

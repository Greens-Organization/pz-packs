import { Input, type InputProps } from '@org/design-system/components/ui/input'

interface TextFieldProps extends Omit<InputProps, 'form'> {
  name: string
  label?: string
  placeholder?: string
  description?: string
  form: any
}

export function TextField({
  form,
  name,
  label,
  placeholder,
  description,
  ...inputProps
}: TextFieldProps) {
  return (
    <form.AppField name={name}>
      {(field: any) => (
        <form.Item>
          {label && <field.Label>{label}</field.Label>}
          <field.Control>
            <Input
              placeholder={placeholder}
              name={field.name}
              value={field.state.value as string}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              {...inputProps}
            />
          </field.Control>
          {description && <field.Description>{description}</field.Description>}
          <field.Message />
        </form.Item>
      )}
    </form.AppField>
  )
}

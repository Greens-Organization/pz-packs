import { Input as InputPrimitive } from '@base-ui-components/react/input'

function Input({
  className,
  type,
  ...props
}: InputPrimitive.Props & React.RefAttributes<HTMLInputElement>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={`px-4 py-2 w-full rounded border-2 shadow-md transition focus:outline-hidden focus:shadow-xs ${
        props['aria-invalid']
          ? 'border-destructive text-destructive shadow-xs shadow-destructive'
          : ''
      } ${className}`}
      {...props}
    />
  )
}

export { Input }

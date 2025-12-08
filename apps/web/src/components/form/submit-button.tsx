import { Button } from '@org/design-system/components/ui/button'

interface SubmitButtonProps {
  isLoading?: boolean
  label: string | React.ReactNode
  loadingLabel?: React.ReactNode
}
export function SubmitButton({
  isLoading = false,
  label,
  loadingLabel,
}: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? loadingLabel || 'Saving...' : label}
    </Button>
  )
}

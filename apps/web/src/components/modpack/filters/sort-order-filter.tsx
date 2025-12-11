import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@org/design-system/components/ui/select'

const sortOrderOptions = [
  { label: 'Descending', value: 'desc' },
  { label: 'Ascending', value: 'asc' },
]

export function SortOrderFilter({
  onSortOrderChange,
  value = 'desc',
}: {
  onSortOrderChange: (sortOrder: string) => void
  value?: string
}) {
  return (
    <Select
      value={value}
      onValueChange={(val) => val && onSortOrderChange(val)}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Order">
          {sortOrderOptions.find((option) => option.value === value)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectPositioner>
        <SelectContent>
          {sortOrderOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPositioner>
    </Select>
  )
}

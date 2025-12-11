import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@org/design-system/components/ui/select'

const sortOptions = [
  { label: 'Created Date', value: 'createdAt' },
  { label: 'Updated Date', value: 'updatedAt' },
  { label: 'Name', value: 'name' },
]

export function SortByFilter({
  onSortByChange,
  value = 'createdAt',
}: {
  onSortByChange: (sortBy: string) => void
  value?: string
}) {
  return (
    <Select value={value} onValueChange={(val) => val && onSortByChange(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by">
          {sortOptions.find((option) => option.value === value)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectPositioner>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPositioner>
    </Select>
  )
}

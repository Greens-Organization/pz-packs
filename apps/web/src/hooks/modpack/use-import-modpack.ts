import { toast } from '@org/design-system/components/ui/sonner'
import { useMutation } from '@tanstack/react-query'
import { ModpackService } from '@/services/modpack'

interface ImportModpackParams {
  modpackId: string
  steamUrl: string
}

export function useImportModpack() {
  return useMutation({
    mutationFn: ({ modpackId, steamUrl }: ImportModpackParams) =>
      ModpackService.import({ id: modpackId, data: { steamUrl } }),
    onSuccess: (data: any) => {
      toast.success(data.message || 'Import started in background')
    },
    onError: (error) => {
      toast.error(
        (error as Error).message ||
          'Failed to start import. Please try again later.',
      )
    },
  })
}

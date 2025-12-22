import { toast } from '@org/design-system/components/ui/sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ModpackService } from '@/services/modpack'
import type { VersionPZ } from '@/types'
import { modpackKeys } from './modpack-keys'

interface ExportModpackParams {
  modpackId: string
  version: VersionPZ
}

export function useExportModpack() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ modpackId, version }: ExportModpackParams) =>
      ModpackService.export(modpackId, version),
    onSuccess: (_, variables) => {
      toast.success(
        'Modpack are exported successfully. Waiting for download...',
      )

      queryClient.invalidateQueries({
        queryKey: modpackKeys.get(variables.modpackId),
      })
      queryClient.invalidateQueries({ queryKey: modpackKeys.all })
    },
    onError: (error) => {
      toast.error(
        (error as Error).message ||
          'Failed to exported modpack. Please try again later.',
      )
    },
  })
}

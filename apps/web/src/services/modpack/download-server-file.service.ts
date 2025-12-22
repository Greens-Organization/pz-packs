import { env } from '@/env'

export function downloadServerFile(exportId: string) {
  const url = `${env.VITE_API_URL}/modpacks/export/${exportId}/download`
  window.open(url, '_blank')
}

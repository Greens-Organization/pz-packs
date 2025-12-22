import type { ModpackExportRepository } from '@org/database'

export class GetServerFileUseCase {
  constructor(private modpackExportRepository: ModpackExportRepository) {}

  async execute(
    exportId: string,
  ): Promise<{ content: string; filename: string }> {
    const exportRequest = await this.modpackExportRepository.findById(exportId)

    if (!exportRequest) {
      throw new Error('Export request not found')
    }

    if (exportRequest.status !== 'completed') {
      throw new Error('File generation is not completed yet')
    }

    if (!exportRequest.fileContent) {
      throw new Error('File content is empty')
    }

    const filename = `server-settings-${exportRequest.version}.ini`

    return {
      content: exportRequest.fileContent,
      filename,
    }
  }
}

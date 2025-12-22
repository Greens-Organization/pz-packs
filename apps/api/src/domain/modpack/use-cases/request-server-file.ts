import type { ModpackExportRepository } from '@org/database/repository'
import { serverFileGenerationQueue } from '@/infra/queue/server-file-generation/queue'

export class RequestServerFileUseCase {
  constructor(private modpackExportRepository: ModpackExportRepository) {}

  async execute(
    modpackId: string,
    userId: string,
    version: string,
  ): Promise<{ exportId: string }> {
    const exportRequest = await this.modpackExportRepository.create({
      modpackId,
      userId,
      version,
    })

    await serverFileGenerationQueue.add('generate-server-file', {
      exportId: exportRequest.id,
      userId,
      modpackId,
    })

    return { exportId: exportRequest.id }
  }
}

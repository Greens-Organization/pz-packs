import { eq } from 'drizzle-orm'
import { database } from '../index'
import { type DModpackExport, modpackExports } from '../schemas/modpacks'

export class ModpackExportRepository {
  async create(data: {
    modpackId: string
    userId: string
    version: string
  }): Promise<DModpackExport> {
    const [result] = await database
      .insert(modpackExports)
      .values(data)
      .returning()
    return result
  }

  async update(
    id: string,
    data: Partial<Omit<DModpackExport, 'id' | 'createdAt'>>,
  ): Promise<DModpackExport | undefined> {
    const [result] = await database
      .update(modpackExports)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(modpackExports.id, id))
      .returning()
    return result
  }

  async findById(id: string): Promise<DModpackExport | undefined> {
    const result = await database.query.modpackExports.findFirst({
      where: eq(modpackExports.id, id),
    })
    return result
  }
}

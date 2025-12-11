export const memberKeys = {
  all: ['members'] as const,
  lists: (modpackId: string) => [...memberKeys.all, modpackId] as const,
  get: (id: string, modpackId: string) =>
    [...memberKeys.all, id, modpackId] as const,
}

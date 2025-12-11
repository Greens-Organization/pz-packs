import type {
  DModpack,
  DModpackMember,
  DModpackMod,
  DUser,
} from '@org/database/schemas'

export type IRelationModpackMemberDTO = DModpackMember
export type IRelationModModpackDTO = DModpackMod

export interface IModpackDTO extends DModpack {
  members?: IRelationModpackMemberDTO[]
  mods?: IRelationModModpackDTO[]
}

export type IModpackMemberDTO = DModpackMember

export interface IMemberDTO extends DModpackMember {
  user: Pick<DUser, 'id' | 'name' | 'email' | 'image'>
}

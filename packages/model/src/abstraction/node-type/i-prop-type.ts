export type PropValueType = 'string' | 'number' | 'boolean' | 'array' | 'object'

export interface IPropType {
  name: string
  type: PropValueType
  children: Array<IPropType>
  required?: boolean
  default?: unknown
}

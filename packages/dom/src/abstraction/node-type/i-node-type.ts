import type { IPropType } from './i-prop-type'
import type { ISlotType } from './i-slot-type'

export interface INodeType {
  name: string
  icon: string
  props: Array<IPropType>
  slots: Array<ISlotType>
  createProps(): Record<string, unknown>
}

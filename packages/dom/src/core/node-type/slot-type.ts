import type { ISlotType } from '../../abstraction'

export class SlotType implements ISlotType {
  public name: string

  public scope?: Record<string, unknown>

  public constructor(name: string, scope?: Record<string, unknown>) {
    this.name = name
    this.scope = scope
  }
}

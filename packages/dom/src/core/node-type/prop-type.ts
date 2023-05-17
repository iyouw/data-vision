import type { IPropType, PropValueType } from '../../abstraction'

export class PropType implements IPropType {
  public name: string

  public type: PropValueType

  public children: Array<IPropType>

  public required?: boolean

  public defaultValue?: unknown

  public constructor(
    name: string,
    type: PropValueType,
    children: Array<IPropType> = [],
    required?: boolean,
    defaultValue?: unknown
  ) {
    this.name = name
    this.type = type
    this.children = children
    this.required = required
    this.defaultValue = defaultValue
  }

  public createProp(): Record<string, unknown> {
    return {
      [this.name]: this.resolveValue()
    }
  }

  protected resolveValue(): unknown {
    return this.defaultValue
      ? this.defaultValue
      : this.type === 'string'
      ? ''
      : this.type === 'number'
      ? 0
      : this.type === 'boolean'
      ? false
      : this.type === 'array'
      ? []
      : Object.assign({}, ...this.children.map((x) => x.createProp()))
  }
}

import type { INodeType, IPropType, ISlotType } from '../../abstraction'

export class NodeType implements INodeType {
  public name: string

  public icon: string

  public props: Array<IPropType>

  public slots: Array<ISlotType>

  public constructor(
    name: string,
    icon: string,
    props: Array<IPropType> = [],
    slots: Array<ISlotType> = []
  ) {
    this.name = name
    this.icon = icon
    this.props = props
    this.slots = slots
  }

  public createProps(): Record<string, unknown> {
    return Object.assign({}, ...this.props.map((x) => x.createProp()))
  }
}

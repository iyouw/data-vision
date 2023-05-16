import type { INodeType } from '../node-type/i-node-type'

export interface INode {
  type: INodeType
  props: Record<string, unknown>
  style: Record<string, unknown>
  slot?: string
  parent?: INode
  children: Array<INode>
  prependChild(node: INode): void
  appendChild(node: INode): void
  insertAfter(node: INode, after?: INode): void
  insertBefore(node: INode, before?: INode): void
  remove(): void
}

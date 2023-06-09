import type { INodeType } from '../node-type/i-node-type';

export interface INode {
  readonly type: INodeType;
  style: Partial<CSSStyleDeclaration>;
  props?: Record<string, unknown>;
  slot?: string;
  parent?: INode;
  children: Array<INode>;
  isAllowDrop(): boolean;
  prependChild(node: INode): void;
  appendChild(node: INode): void;
  removeChild(node: INode): void;
  insertBefore(node: INode, before: INode): void;
  insertAfter(node: INode, after: INode): void;
  remove(): void;
  // position
  left: number | undefined;
  top: number | undefined;
  // box
  width: number | undefined;
  height: number | undefined;
  // typography
  // visual
}

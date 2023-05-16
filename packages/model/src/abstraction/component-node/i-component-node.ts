import { IComponentType } from "src/abstraction/component-type";

export interface IComponentNode {
  type: IComponentType;
  props: Record<string, unknown>;
  style: Record<string, unknown>;
  slot?: string;
  parent?: IComponentNode;
  children: Array<IComponentNode>;
  prependChild(node: IComponentNode): void;
  appendChild(node: IComponentNode): void;
  insertAfter(node: IComponentNode, after?: IComponentNode): void;
  remove(): void;
  toJSON(): string;
}

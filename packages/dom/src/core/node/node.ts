import type { INode, INodeType } from '../../abstraction';

export class Node implements INode {
  public readonly type: INodeType;

  public props?: Record<string, unknown>;

  public style: Partial<CSSStyleDeclaration>;

  public slot?: string | undefined;

  public parent?: INode | undefined;

  public children: Array<INode>;

  public constructor(
    type: INodeType,
    style: Partial<CSSStyleDeclaration> = {},
    children: Array<INode> = [],
    props?: Record<string, unknown>,
    parent?: INode
  ) {
    this.type = type;
    this.style = style;
    this.children = children;
    this.parent = parent;
    this.props = props ?? type.createProps();
  }

  public get left(): number | undefined {
    return this.style.left ? parseFloat(this.style.left) : undefined;
  }

  public set left(left: number | undefined) {
    this.style.left = left === undefined ? '' : this.withUint(left);
  }

  public get top(): number | undefined {
    return this.style.top ? parseFloat(this.style.top) : undefined;
  }

  public set top(top: number | undefined) {
    this.style.top = top === undefined ? '' : this.withUint(top);
  }

  public get width(): number | undefined {
    return this.style.width ? parseFloat(this.style.width) : undefined;
  }

  public set width(width: number | undefined) {
    this.style.width = width === undefined ? '' : this.withUint(width);
  }

  public get height(): number | undefined {
    return this.style.height ? parseFloat(this.style.height) : undefined;
  }

  public set height(height: number | undefined) {
    this.style.height = height === undefined ? '' : this.withUint(height);
  }

  public isAllowDrop(): boolean {
    return this.type.slots.length > 0;
  }

  public prependChild(node: INode): void {
    this.children.splice(0, 0, node);
  }

  public appendChild(node: INode): void {
    this.children.push(node);
  }

  public removeChild(node: INode): void {
    const index = this.children.findIndex((x) => x === node);
    if (index === -1) return;
    this.children.splice(index, 1);
  }

  public insertBefore(node: INode, before: INode | undefined): void {
    const index = this.children.findIndex((x) => x === before);
    if (index === -1) return;
    this.children.splice(index, 0, node);
  }

  public insertAfter(node: INode, after: INode | undefined): void {
    const index = this.children.findIndex((x) => x === after);
    if (index === -1) return;
    this.children.splice(index + 1, 0, node);
  }

  public remove(): void {
    if (!this.parent) return;
    this.parent.removeChild(this);
  }

  protected withUint(num: number, unit = 'px'): string {
    return `${num}${unit}`;
  }
}

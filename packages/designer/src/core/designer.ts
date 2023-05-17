import type { INode, INodeType } from '@data-vision/dom';
import type { IDesigner } from '../abstraction';

export class Designer implements IDesigner {
  public page: INode;

  public nodeTypes: Array<INodeType>;

  public selectedNode?: INode;

  public constructor(page: INode, nodeTypes: Array<INodeType> = [], selectedNode?: INode) {
    this.page = page;
    this.nodeTypes = nodeTypes;
    this.selectedNode = selectedNode;
  }

  public registerNodeType(type: INodeType): void {
    this.nodeTypes.push(type);
  }

  public registerNodeTypes(types: Array<INodeType>): void {
    this.nodeTypes.push(...types);
  }
}

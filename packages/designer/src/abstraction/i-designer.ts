import type { INode, INodeType } from '@data-vision/dom';

export interface IDesigner {
  nodeTypes: Array<INodeType>;
  page: INode;
  selectedNode?: INode;
  registerNodeType(type: INodeType): void;
  registerNodeTypes(types: Array<INodeType>): void;
}

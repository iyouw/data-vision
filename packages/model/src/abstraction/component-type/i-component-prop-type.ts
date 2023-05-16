export type ComponentPropValueType =
  | "string"
  | "boolean"
  | "number"
  | "array"
  | "object";

export interface IComponentPropType {
  name: string;
  type: ComponentPropValueType;
  required?: boolean;
  default: unknown;
  children: Array<IComponentPropType>;
}

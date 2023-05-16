import type { IComponentPropType } from "./i-component-prop-type";
import type { IComponentSlotType } from "./i-component-slot-type";

export interface IComponentType {
  name: string;
  props: Array<IComponentPropType>;
  slots: Array<IComponentSlotType>;
}

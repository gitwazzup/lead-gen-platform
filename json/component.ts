/**
 * The Component interface is used for pre-set combinations of fields
 */

type ComponentType =
  | "dealer-selector"
  | "charging-selector"
  | "model-selector"
  | "people-selector";

export interface Component {
  id: number;
  name: string;
  type: ComponentType;
  label: string;
  placeholder: string;
  required: boolean;
  colspan: number;
  className: string;
}

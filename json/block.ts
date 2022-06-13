type BlockType =
  | "personal-info"
  | "model-selector"
  | "dealer-selector"
  | "dealer-dropdown"
  | "date-picker"
  | "charging-selector"
  | "hybrid-selector";

export interface Block {
  type: BlockType;
  sort: number;
  restUrl: string;
  data: {};
  properties: {};
}

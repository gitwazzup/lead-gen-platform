enum BlockType {
  PERSONAL_DATA = "Persoonsgegevens",
  MODEL_SELECTOR = "Model selector",
  DEALER_SELECTOR = "Dealer selector",
  DATE_PICKER = "Date picker",
  CHARGING_SELECTOR = "Charging selector",
  PEOPLE_SELECTOR = "People selector",
  THANK_YOU = "Thank you page",
}

export interface Block {
  type: BlockType;
  sort: number;
  input: [];
  options: [];
}

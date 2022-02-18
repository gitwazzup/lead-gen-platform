type FieldType =
  | "text"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "textarea"
  | "amount"
  | "phone"
  | "datepicker";

/** For dropdown options */
interface Option {
  name: string;
  value: string;
}

export interface Field {
  id: number;
  name: string;
  label: string;
  type: FieldType;
  placeholder: string;
  required: boolean;
  colspan: number;
  errorText: string;
  minLength: number;
  maxLength: number;
  minValue: number;
  maxValue: number;
  regexPattern: string;
  currency: boolean;
  className: string;
  options: Option[];
}

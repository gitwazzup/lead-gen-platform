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
  required: true;
  colSpan: number;
  errorText: string;
  disabled: boolean;
  minLength: string;
  maxLength: string;
  minValue: string;
  maxValue: string;
  regexPattern: string;
  currency: string;
  className: string;
  options: Option[];
  customValidator: string;
}

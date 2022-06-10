type FieldType =
  | "text"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "textarea"
  | "number"
  | "email"
  | "range"
  | "phone"
  | "license-plate";

/** For dropdowns and radio-buttons */
interface Option {
  name: string;
  value: string;
}

export interface Field {
  type: FieldType;
  sort: number;
  name: string;
  label: string;
  required: boolean;
  colspan: number;
  placeholder?: string;
  errorText?: string;
  infoText?: string;
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  regexPattern?: string;
  currency?: boolean;
  className?: string;
  options?: Option[];
}

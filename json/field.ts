type FieldType =
  | "text"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "textarea"
  | "amount"
  | "email"
  | "range"
  | "phone";

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

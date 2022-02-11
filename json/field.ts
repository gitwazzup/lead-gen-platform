type FieldType = 'text' | 'select' | 'radio'

interface OptionModel {
  name: string;
  value: string;
  disabled: false;
}

export interface FieldModel {
  name: string;
  label: string;
  type: FieldType;
  placeholder: string;
  required: true;
  colSpan: number;
  errorText: string;
  disabled: boolean;
  colspan: string;
  minLength: string;
  maxLength: string;
  minValue: string;
  maxValue: string;
  regexPattern: string;
  currency: string;
  className: string;
  options: OptionModel[];
}

import { Field } from "./field";

export interface Step {
  title: string;
  intro: string;
  submitBtn: string;
  fields: Field[];
}

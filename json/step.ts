import { Field } from "./field";
import { Block } from "./block";

export interface Step {
  title: string;
  intro: string;
  submitBtn: string;
  block: Block[];
  fields?: Field[];
}

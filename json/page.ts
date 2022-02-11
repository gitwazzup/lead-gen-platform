import { Form } from "./form";
import { Step } from "./step";

interface Page {
  title: string;
  intro: string;
  form: Form
  steps: Step[];
}
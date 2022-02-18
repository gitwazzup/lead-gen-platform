import { Form } from "./form";
import { Step } from "./step";

interface Page {
  id: number;
  title: string;
  intro: string;
  form: Form;
  steps: Step[];
}

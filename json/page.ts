import { Campaign } from "./campaign";
import { Form } from "./form";
import { Step } from "./step";

interface Page {
  id: number;
  title: string;
  intro: string;
  description: string;
  brand: "Toyota" | "Lexus";
  form: Form;
  steps: Step[];
  campaign?: Campaign;
  // sidebar
  // dataLayer
}

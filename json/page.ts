import { Campaign } from "./campaign";
import { Step } from "./step";

interface Page {
  title: string;
  intro: string;
  description: string;
  brand: "Toyota" | "Lexus";
  steps: Step[];
  campaign?: Campaign;
  url: string;
  disclaimer: string;
  privacyStatement?: boolean;
  newsletter?: boolean;
  onSubmit: {
    type: "mail" | "rest";
    email?: string;
    restUrl?: string;
  };
  // specific
  // heroImage
  // sidebar
  // dataLayer
}

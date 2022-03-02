export interface Form {
  id: number;
  privacy?: boolean;
  newsLetter?: boolean;
  onSubmit: {
    type: "e-mail" | "rest-call";
    email?: string;
    restUrl?: string;
  };
}

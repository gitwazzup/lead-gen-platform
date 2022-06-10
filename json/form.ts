export interface Form {
  id: number;
  privacyStatement?: boolean;
  newsletter?: boolean;
  onSubmit: {
    type: "mail" | "rest";
    email?: string;
    restUrl?: string;
  };
}

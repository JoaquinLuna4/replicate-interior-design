export interface Prediction {
  status: "starting" | "processing" | "succeeded" | "canceled" | "failed";
  id: string;
  output: [string, string];
}
// ...

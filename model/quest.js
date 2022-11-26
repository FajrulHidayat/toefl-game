import { Schema, Model, Models, model, models } from "mongoose";

const questSchema = new Schema({
  quest: String,
  a: String,
  b: String,
  c: String,
  d: String,
  answer: String,
  explaination: String,
  section: String,
});
// console.log(model());
const Quest = models.quest || model("quest", questSchema);
export default Quest;

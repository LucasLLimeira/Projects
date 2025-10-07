import { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: "User" },
  location: String,
  createdAt: { type: Date, default: Date.now },
});

export default models.Job || model("Job", jobSchema);
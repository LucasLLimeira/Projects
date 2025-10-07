import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["candidate", "company"], required: true },
});

export default models.User || model("User", userSchema);
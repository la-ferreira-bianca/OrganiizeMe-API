import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  initialDate: { type: String },
  finalDate: { type: String },
});

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;

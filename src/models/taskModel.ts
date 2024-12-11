import mongoose, { Schema, Document } from "mongoose";

export interface TaskDocument extends Document {
  text: string;
  completed: boolean;
}

const taskSchema = new Schema<TaskDocument>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Task = mongoose.model<TaskDocument>("Task", taskSchema)
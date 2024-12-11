import { z } from "zod";

export const createTaskSchema = z.object({
  text: z.string().min(1, "Task text is required"),
});

export const updateTaskSchema = z.object({
  completed: z.boolean().optional(),
  text: z.string().optional(),
  
});
import { Request, Response, NextFunction } from "express";
import { Task } from "../models/taskModel";
import { createTaskSchema, updateTaskSchema } from "../validations/taskValidation";

// Retorna todas as tarefas
export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
};

// Cria uma nova tarefa
export const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = createTaskSchema.parse(req.body);
      const newTask = await Task.create(parsedBody);
      res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
};

// Atualiza o status de uma tarefa
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      console.log("ID da tarefa recebida:", id);
      console.log("Corpo da requisição recebido:", req.body);
  
      const parsedBody = updateTaskSchema.parse(req.body);
      const updateFields: Partial<{ text: string; completed: boolean }> = {};
  
      if (parsedBody.text !== undefined) {
        updateFields.text = parsedBody.text;
      }
      if (parsedBody.completed !== undefined) {
        updateFields.completed = parsedBody.completed;
      }
  
      console.log("Atualizando tarefa com campos:", updateFields);
      
      const updatedTask = await Task.findByIdAndUpdate(id, updateFields, { new: true });
      
      if (!updatedTask) {
        res.status(404).json({ message: "Task not found" });
        return;
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
};

// Deleta uma tarefa
export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const deletedTask = await Task.findByIdAndDelete(id);
      if (!deletedTask) {
        res.status(404).json({ message: "Task not found" });
        return;
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
};
import express from "express";
import Task from "../models/Task.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addTask", protect, async (req, res) => {
  const { title, description } = req.body;
  const newTask = await Task.create({ userId: req.userId, title, description });
  res.json(newTask);
});

router.get("/getTasks", protect, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

router.put("/updateTask/:id", protect, async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
});

router.delete("/deleteTask/:id", protect, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;

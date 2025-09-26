import { isValidObjectId } from 'mongoose';
import Task from '../models/task.model.js';

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};


const createTask = async (req, res, next) => {
    try {
        const { title, description, completed } = req.body;
        const task = new Task({ title, description, completed });
        await task.save();

        return res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        if (!isValidObjectId(req.params.id)) return res.status(400).json({ error: "Invalid Task ID" });
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        return res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

const updateTaskById = async (req, res, next) => {
    try {
        if (!isValidObjectId(req.params.id)) return res.status(400).json({ error: "Invalid Task ID" });

        const { title, description, completed } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!task) return res.status(404).json({ error: "Task not found" });

        return res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

const deleteTaskById = async (req, res, next) => {
    try {
        if (!isValidObjectId(req.params.id)) return res.status(400).json({ error: "Invalid Task ID" });

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) return res.status(404).json({ error: "Task not found" });

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        next(err);
    }
};

export { getAllTasks, createTask, getTaskById, updateTaskById, deleteTaskById }
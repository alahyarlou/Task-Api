import express from 'express';
import controller from '../controllers/task.controller.js';
import { validate } from "../middlewares/validate.js";
import { createTaskSchema, updateTaskSchema } from "../validations/task.validation.js";

const router = express.Router();


router.get('/', controller.getAllTasks);
router.post('/', validate(createTaskSchema), controller.createTask);
router.get('/:id', controller.getTaskById);
router.put('/:id', validate(updateTaskSchema), controller.updateTaskById);
router.delete('/:id', controller.deleteTaskById);

export default router;
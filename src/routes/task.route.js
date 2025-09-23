import express from 'express';
import controller from '../controllers/task.controller.js';

const router = express.Router();


router.get('/', controller.getAllTasks);
router.post('/', controller.createTask);
router.get('/:id', controller.getTaskById);
router.put('/:id', controller.updateTaskById);
router.delete('/:id', controller.deleteTaskById);

export default router;
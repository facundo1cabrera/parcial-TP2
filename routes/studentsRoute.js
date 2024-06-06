import express from "express";
import studentsController from "../controllers/studentsController.js";

const router = express.Router();

router.post('/students', studentsController.addStudent);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:id', studentsController.getStudentById);

export default router;
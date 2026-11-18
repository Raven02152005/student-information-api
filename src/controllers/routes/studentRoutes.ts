import { Router } from 'express';
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../studentController.js';

const studentRoutes = Router();

studentRoutes.get('/', getStudents);
studentRoutes.get('/:id', getStudentById);
studentRoutes.post('/', createStudent);
studentRoutes.put('/:id', updateStudent);
studentRoutes.delete('/:id', deleteStudent);

export default studentRoutes;
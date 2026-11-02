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

studentRoutes.get('/', (req, res) => {
  const course = req.query.course;

  if (!course) {
    res.status(200).json({
      message: 'Student information request',
      course: 'All courses',
    });
    return;
  }

  res.status(200).json({
    message: 'Student information request',
    course: String(course),
  });
});

studentRoutes.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Student request received',
    studentId: req.params.id,
  });
});

export default studentRoutes;
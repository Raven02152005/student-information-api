// import express, { NextFunction, Request, Response } from 'express';
// import 'dotenv/config';
// import { pool } from './controllers/routes/db.js';
// import studentRoutes from './controllers/routes/studentRoutes.js';

// //Pool
// pool.query('SELECT NOW()')
//   .then(() => console.log('Database connected successfully'))
//   .catch(() => console.error('Database connection failed. Check .env, Supabase, and your network.'));

// const app = express();
// const port = 4000;

// app.use((req: Request, _res: Response, next: NextFunction) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });

// app.use(express.json());
// app.use('/students', studentRoutes);

// app.get('/', (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: 'Student Information API',
//     course: 'ITE 303',
//   });
// });

// app.use((_req: Request, _res: Response, next: NextFunction) => {
//   next();
// });

// app.use((req: Request, res: Response) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.listen(4000, () => {
//   console.log('Server is running on http://localhost:4000');
// });


import 'dotenv/config';
import express from 'express';
import studentRoutes from './controllers/routes/studentRoutes.js';

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Student Information API',
    course: 'ITE 303',
  });
});

app.use('/students', studentRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Student API listening on port ${port}`);
});
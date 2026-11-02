# Student Information API

A RESTful backend API built with Node.js, Express, TypeScript, and Supabase PostgreSQL for **ITE 303 - Web Systems and Technologies 2**.

## Features

- Retrieve all student records
- Retrieve a single student record by ID
- Create a new student record
- Update an existing student record
- Delete a student record

## API Endpoints

| Method | Endpoint | Description | Success Status |
| --- | --- | --- | --- |
| `GET` | `/students` | Retrieve all student records | `200 OK` |
| `GET` | `/students/:id` | Retrieve one student by ID | `200 OK` |
| `POST` | `/students` | Create a new student record | `201 Created` |
| `PUT` | `/students/:id` | Replace all editable fields of a student | `200 OK` |
| `DELETE` | `/students/:id` | Delete a student record | `200 OK` |

## Local Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env` and replace the placeholders with your private Supabase PostgreSQL connection string:

   ```bash
   copy .env.example .env
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

The API runs at `http://localhost:4000` by default.

# Section 6: Explain the request flow

## Request flow

Postman sends JSON to `POST /students`. Express's JSON middleware parses it into `req.body`, then the `/students` router sends the request to `createStudent`. The controller validates the fields and passes them as separate parameters to a SQL `INSERT` through the PostgreSQL pool. Supabase PostgreSQL stores the row and returns it, including its generated `id`; the controller responds with `201 Created` and the row as JSON, which Postman displays.

## Answers

**What is the difference between GET and POST in this project?**  
GET reads existing student records without creating a row. POST sends a new student record to the API so it can be validated and inserted into the database.

**Why do we use `express.json()`?**  
It parses incoming JSON request bodies and makes the resulting object available as `req.body`. It must run before the student router handles the request.

**What is the purpose of `$1` through `$5`?**  
They are PostgreSQL parameter placeholders for the five student values. The `pg` pool sends the values separately from the SQL text, keeping user input out of the query itself.

**What is the difference between 400, 409, and 500?**  
`400 Bad Request` means the submitted input is invalid or incomplete. `409 Conflict` means the `student_number` is already in use. `500 Internal Server Error` means the server could not complete the database operation for an unexpected reason.

**Why is `201 Created` more appropriate than `200 OK` for a successful POST?**  
The request creates a new database record, so `201 Created` accurately communicates that a resource was created. The response also returns the created row.

**How do you know the student was permanently saved?**  
The returned row can be retrieved with GET after restarting Express, and the same row and generated `id` can be confirmed in the Supabase `students` table or with a SELECT query.

## Year-level rule

This API accepts `year_level` only as a JSON number that is a whole integer from 1 through 4, inclusive. Thus `1` and `4` are valid boundaries; `5`, `0`, decimals, and strings such as `"two"` are rejected with `400` before the INSERT runs, so invalid requests add no row.

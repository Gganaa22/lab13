# ADR-002: Use In-Memory Storage for Task Data

## Status
Accepted

## Context
The Personal Task Tracker project needs a way to store task data. Possible options include in-memory storage, JSON file storage, SQLite, or a full database such as PostgreSQL or MongoDB.

Because this assignment focuses on AI-assisted software construction workflow, planning, testing, and reflection, the project does not need a complex production-level database. The main goal is to implement working features and demonstrate the development process.

## Decision
Use in-memory storage for task data.

Tasks are stored in a JavaScript array inside the backend server.

## Reasons
- It is simple and easy to understand.
- It is enough for a small coursework project.
- It allows faster implementation and testing.
- It avoids unnecessary database setup.
- It keeps the project beginner-friendly.

## Alternatives Considered

### JSON file storage
This would allow data to remain after the server restarts. However, it requires extra file reading and writing logic.

### SQLite
SQLite is lightweight and useful for small projects. However, it still adds database setup and query logic.

### MongoDB or PostgreSQL
These are powerful database options, but they are too complex for the current scope of this assignment.

## Consequences
The main limitation is that tasks disappear when the server restarts. This is acceptable for this assignment because the purpose is to demonstrate API features, testing, and AI-assisted workflow.

If the project were expanded in the future, the next step would be to replace in-memory storage with SQLite or another database.
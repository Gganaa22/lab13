# AI Session 03: Review and Refactor

## Goal
Review the Task Tracker backend and check if the implemented features match the assignment requirements.

## AI Helped With
- Reviewed the Express route structure
- Suggested keeping the backend simple
- Suggested checking validation and error handling
- Helped identify that node_modules should not be committed to Git

## Human Review
I manually checked that the API server starts correctly.
I verified that GET / and GET /tasks work in the browser.
I also ran automated tests using npm test and confirmed that all tests passed.

## Result
The project now has:
- Working backend API
- Search and filter support
- 11 passing tests
- Git ignore configuration for node_modules
- Cleaner project structure

## Notes
The application still uses in-memory storage. This is acceptable for a small assignment project, but it is not suitable for production because data resets when the server restarts.
# AI Session 01: Search and Filter Feature

## Goal
Improve the task tracker backend by adding more task fields and filtering support.

## AI Helped With
- Suggested adding dueDate, priority, and label fields
- Suggested search/filter query parameters
- Helped review the Express route structure

## Human Review
I checked the code manually and tested the API in the browser.
I verified that GET /tasks returns an empty list when there are no tasks.
I also checked that the server starts correctly on port 3000.

## Result
The backend now supports:
- Create task
- View tasks
- Update task
- Delete task
- Search/filter by title, priority, and label

## Notes
Data is still stored in memory, so tasks disappear when the server restarts.
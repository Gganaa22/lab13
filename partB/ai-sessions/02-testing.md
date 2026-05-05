# AI Session 02: Unit and API Testing

## Goal
Add automated tests for the Task Tracker backend.

## AI Helped With
- Suggested using Jest and Supertest
- Helped create API tests for CRUD operations
- Suggested edge cases such as empty title and invalid ID

## Human Review
I checked the tests and confirmed that they match the implemented API endpoints.
I ran npm test and verified that the test cases passed.

## Result
The project now includes automated tests for:
- Home endpoint
- Get tasks
- Create task
- Empty title validation
- Search by title
- Filter by priority
- Filter by label
- Update task
- Invalid update ID
- Delete task
- Invalid delete ID

## Notes
The tests use Supertest to send requests directly to the Express app.
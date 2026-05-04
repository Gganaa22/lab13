# Part B - Personal Task Tracker Backend

## Description
This is the backend implementation of the Personal Task Tracker project.

The API allows users to manage tasks with basic CRUD operations and search/filter support.

## Features
- Create task
- View all tasks
- Update task
- Delete task
- Search tasks by title
- Filter tasks by priority
- Filter tasks by label

## Tech Stack
- Node.js
- Express.js
- In-memory storage

## Project Structure

partB/
├── src/
│   └── server.js
├── tests/
├── ai-sessions/
│   └── 01-feature-search-filter.md
├── README.md
├── package.json
└── package-lock.json

## Install

cd partB
npm install

## Run

node src/server.js

Server runs at:

http://localhost:3000

## API Endpoints

### Home
GET /

### Get all tasks
GET /tasks

### Search tasks
GET /tasks?search=homework

### Filter by priority
GET /tasks?priority=high

### Filter by label
GET /tasks?label=school

### Create task
POST /tasks

Example body:

{
  "title": "Finish homework",
  "dueDate": "2026-05-05",
  "priority": "high",
  "label": "school"
}

### Update task
PUT /tasks/:id

### Delete task
DELETE /tasks/:id

## Notes
Tasks are stored in memory. Data will reset when the server restarts.
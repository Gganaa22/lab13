# AI Usage Report

## Introduction

This report describes how I used AI during the development of my Lab 13 project, Personal Task Tracker. The purpose of this assignment was not only to build a small software project, but also to practice an AI-assisted software construction workflow. During this project, I used AI for planning, generating draft ideas, reviewing code, improving documentation, and creating tests. However, I did not use AI as a complete replacement for my own work. I reviewed the generated ideas, tested the code, fixed mistakes, and made decisions based on the project requirements.

The project is a simple task tracker backend built with Node.js and Express. It supports basic CRUD operations such as creating, viewing, updating, and deleting tasks. It also supports search and filtering by title, priority, and label. The project includes planning documents, architecture documentation, stack comparison, ADR documents, custom slash commands, AI session logs, tests, and reflection files.

The main workflow I followed was: plan first, build small features, test the implementation, review AI suggestions, and document the results. This helped me understand that AI can speed up development, but the developer still needs to verify and explain every part of the final project.

---

## 1. What did AI do, and what did I do myself?

AI helped me in several parts of the project. In Part A, AI helped me organize the planning documents. For example, AI suggested a clear structure for PROJECT.md, ARCHITECTURE.md, STACK-COMPARISON.md, and ADR-001. It also helped compare different technology stacks such as Node.js + Express, Java + Spring Boot, and Python + Flask. Based on that comparison, I selected Node.js + Express because it was simple, fast to set up, and suitable for a small API project.

AI also helped generate the first draft of the architecture diagram using Mermaid. The diagram showed the user, backend API, and storage layer. I reviewed the diagram and made sure it matched the actual project. I also checked that the chosen scope was not too large, because the goal was to build a small but working project.

In Part B, AI helped draft the Express backend routes. It suggested endpoints such as GET /tasks, POST /tasks, PUT /tasks/:id, and DELETE /tasks/:id. Later, it also suggested adding search and filter support using query parameters such as search, priority, and label. I manually copied the code into my project, ran the server, tested it in the browser, and checked the output. When the server returned an empty array for GET /tasks, I understood that the server was working but no task had been added yet.

AI also helped create test ideas using Jest and Supertest. It suggested testing normal cases and edge cases, such as creating a task, rejecting an empty title, updating a task, deleting a task, and handling invalid IDs. I installed the required packages, updated the test script, created the test file, and ran npm test myself. All 11 tests passed, which confirmed that the main API behavior worked correctly.

In Part C, AI helped me prepare reflection documents such as SELF-EVALUATION.md and ADR-002. However, I reviewed the content and made sure it matched what actually happened in my project. For example, ADR-002 explains why I used in-memory storage instead of SQLite or MongoDB.

My own work included creating the GitHub repository, setting up the folder structure, running terminal commands, testing the server, fixing Git mistakes, committing changes, pushing to GitHub, and checking git status. I also checked the project requirements many times to make sure I was following the correct structure.

---

## 2. Hallucination examples: what wrong things did AI suggest, and how did I fix them?

### Hallucination 1: Repository name and assignment name confusion

One issue was naming confusion. The project was sometimes written as “Bie Daalt 13,” but my repository and assignment context were actually Lab 13. This was not a code error, but it was a documentation problem. If I submitted the repository with inconsistent naming, it could confuse the teacher or make the project look less professional.

I found this by reviewing the README.md file and comparing it with the repository name. I fixed it by replacing “Bie Daalt 13” with “Lab 13” in the main README. Then I committed the change with a documentation commit. This taught me that AI-generated documentation can contain wording that must be checked manually.

### Hallucination 2: node_modules accidentally committed

Another problem happened when I installed Express. At first, node_modules was added into Git. This caused a huge commit with hundreds of files and many insertions. This was not good practice because node_modules should not be committed to a GitHub repository. Dependencies should be installed using package.json and package-lock.json.

I noticed this from the Git output. It showed many files inside partB/node_modules being committed. I fixed it by creating a .gitignore file and adding node_modules/ and partB/node_modules/ to it. Then I removed node_modules from Git tracking using git rm -r --cached partB/node_modules. After that, I committed the fix. This was an important lesson because AI may give coding steps but not always remind the user about Git hygiene at the correct time.

### Hallucination 3: assuming Part B should start too early

At the beginning, there was a risk of starting Part B too early. The assignment required planning before coding, so it was better to complete Part A first. If I started coding immediately without proper planning documents, Part A could become weak or incomplete.

I fixed this by following a day-by-day schedule. Day 1 and Day 2 were used for planning and documentation. After that, I started the backend implementation. This helped keep the workflow closer to the assignment requirement: plan first, then build.

---

## 3. Security and license concerns

The main security concern in this project was input validation. In the first version of the API, it would have been possible to create a task without a valid title. This could cause bad or meaningless data to be stored. AI helped suggest validation for the POST /tasks route. The final version checks whether the title exists and whether it is not an empty string. If the title is missing, the API returns a 400 response with the message “Task title is required.”

Another security-related concern was error handling for invalid IDs. If a user tries to update or delete a task that does not exist, the API should not silently fail. The final version returns 404 with “Task not found.” This makes the API behavior clearer and safer.

A license and dependency concern was related to npm packages. I used Express, Jest, and Supertest. These are common open-source packages, but I still checked the npm install output. It showed some deprecation warnings for transitive packages, but the audit result said “found 0 vulnerabilities.” This does not mean the project is production-ready, but for a coursework project it was acceptable.

Another important security and maintenance lesson was not committing node_modules. Committing dependency folders can make the repository too large and messy. It can also include unnecessary third-party code. I fixed this by using .gitignore and tracking only package.json and package-lock.json.

---

## 4. What did AI help me do faster?

AI helped me work faster in planning and documentation. Without AI, it would take more time to decide the structure of PROJECT.md, ARCHITECTURE.md, STACK-COMPARISON.md, ADR files, and AI session logs. AI gave me draft formats that I could edit and use.

AI also helped me quickly understand what files were required in the repository. The assignment had many requirements, and AI helped turn them into a step-by-step checklist. This made the work less confusing.

In coding, AI helped generate a basic Express API faster. Instead of writing every route from zero, I used the AI draft as a starting point. Then I tested the code and made sure it worked. This was useful because I could focus more on understanding route behavior, request methods, response codes, and testing.

AI also helped with test case ideas. Writing tests can be difficult at first because it is not always clear what should be tested. AI suggested both normal cases and edge cases. This helped me create 11 passing tests, which satisfied the requirement of at least 10 tests.

Another production benefit was documentation consistency. AI helped write README sections such as install, run, test, API endpoints, and project structure. This made the repository easier to understand.

---

## 5. What was slower or harder when using AI?

Some things became slower because AI output still needed manual checking. For example, when AI generated documentation, I had to check whether the wording matched my actual project. The name “Bie Daalt 13” had to be changed to “Lab 13.” This shows that AI can create text quickly, but it may not always match the exact context.

Another difficulty was that AI can give many steps at once. As a beginner, it is easy to copy commands without fully understanding them. To avoid this, I followed the work slowly and checked the result after every step. For example, after running the server, I checked localhost:3000 and localhost:3000/tasks in the browser. After every commit, I used git status to confirm that the working tree was clean.

Testing also required careful attention. AI gave the idea of using Jest and Supertest, but I still had to install packages, update package.json, modify server.js to export the app, and run npm test. If I skipped one step, the tests might fail.

Git workflow was another hard part. I had to make sure I had at least 15 commits and at least 5 different working days. At first, I had fewer commits, so I had to plan remaining work carefully. I learned that commits should represent real small changes, not fake changes. This made the workflow more realistic.

---

## 6. How did I manage skill atrophy risk?

Skill atrophy means becoming too dependent on AI and losing the ability to do the work myself. I tried to reduce this risk by not only copying AI output, but also asking what each step meant and checking the result myself.

For example, I learned that app.get handles GET requests, app.post creates new data, app.put updates existing data, and app.delete removes data. I also learned that req.body contains data sent by the user, req.params contains route parameters, and req.query contains query parameters used for search and filters.

I also practiced Git commands myself. I used git add, git commit, git push, git status, and git rm -r --cached. I learned why .gitignore is important and why node_modules should not be tracked.

For testing, I learned that Supertest can send fake HTTP requests directly to the Express app without opening the server in the browser. I also learned that automated tests help verify the project quickly after changes.

I also used “AI-free” review time. This means I looked at my files and terminal output myself before asking for the next step. For example, I checked whether npm test passed and whether git status showed a clean working tree. This helped me understand my own project better.

If I had to explain this project without AI, I could explain the main idea, folder structure, routes, tests, and Git workflow. I may still need more practice to write everything quickly from memory, but I understand the purpose of each main part.

---

## Conclusion

Overall, AI was useful for speeding up planning, coding drafts, test ideas, documentation, and reflection. However, AI was not perfect. I had to review its suggestions, fix naming issues, correct Git mistakes, test the code, and make sure the final project matched the assignment requirements.

The biggest lesson from this project is “verify, do not blindly trust.” AI can generate helpful output, but the developer is responsible for checking correctness, security, structure, and final quality. Through this project, I learned more about Node.js, Express, REST API routes, testing with Jest and Supertest, Git workflow, documentation, ADR writing, and AI-assisted software construction.
# Repository Agent Guide

Start each task by deciding whether it is frontend work, backend work, or cross-stack work. Use the affected files and repository structure as the source of truth.

## Environment bootstrap

- If the task touches the frontend and `node_modules` is missing, run `npm i`, then re-scan the available skills, and load any newly available frontend-relevant skills.
- If the task touches the backend and `vendor` is missing, run `composer i`, then re-scan the available skills, and load any newly available backend-relevant skills.

## Working rules

- In this repository, frontend typically means Vite, UI, CSS, and JavaScript; backend typically means PHP and server-rendered templates in `src/views`.
- Use only the workflow relevant to the requested area. Do not run both installers unless the task clearly spans both sides.
- When verifying work, prefer existing scripts from `package.json` or `composer.json` for linting, tests, build, and related checks.
- Follow existing repository conventions and run the narrowest relevant verification command after changes.

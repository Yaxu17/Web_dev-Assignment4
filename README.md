# Simple Console Quiz (Browser)

## Project overview
A simple JavaScript quiz game that runs in the browser console using `prompt()` and `alert()`. The quiz uses a predefined array of question objects and tracks the user's score. Designed for a lab assignment to practice arrays, loops, conditionals, functions and basic I/O.

## How to run
1. Open this code in vs code
2. add live server extension
3. open html file and,press `go live` button
4. Answer the prompts. Final score will be shown via `alert()` and a summary is logged to console.

## Files
- `index.html` - just html file to run js file
- `quiz.js` — main script. Contains `quizQuestions` array and `runQuiz()` function.
- `docs/` — markdown docs (overview, development, future improvements).
- `README.md` — this file.

## Development process
I created a single function `runQuiz()` to encapsulate logic: initialize score, loop through questions with a `for` loop, take input with `prompt()`, normalize using `toLowerCase()` and `trim()`, compare answers, give immediate feedback via `alert()`, and show final score. The script logs a detailed summary to the console.

## Feature list
- [x] Predefined questions stored as objects in an array
- [x] `runQuiz()` function to run the quiz
- [x] Input normalization (`toLowerCase()`, `trim()`)
- [x] Immediate feedback after each question
- [x] Final score display and console summary
- [x] Retry option

## Submission
- Push `quiz.js`, `README.md` and `index.html` to a GitHub repo and share the link as required.

## Future improvements
list improvements (MCQ UI, timer, storing high scores in localStorage, web page GUI instead of prompts, multiple choice options, question categories, randomized question order).


## Folder Structure

AsSIGNMENT 4/\
├─ index.html
├─ quiz.js
├─ README.md
└─ .gitignore

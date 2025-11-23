// quiz.js

const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which is the most popular programming language?", answer: "javascript" },
  { question: "What does HTML stand for? (Fill in the Blank: HyperText ____ Language)", answer: "markup" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" }
];


function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;
  const wrongAnswers = [];

  for (let i = 0; i < total; i++) {
    const qObj = quizQuestions[i];

    const userInputRaw = prompt(`Question ${i+1} of ${total}:\n${qObj.question}`);

    const userInput = (userInputRaw === null) ? "" : String(userInputRaw);

    const normalized = userInput.toLowerCase().trim();

    if (normalized === qObj.answer.toLowerCase().trim()) {
      score++;
      alert(`Correct! \nScore: ${score}/${i+1}`);
    } else {
      wrongAnswers.push({
        question: qObj.question,
        yourAnswer: userInputRaw,
        correctAnswer: qObj.answer
      });
      alert(`Wrong! \nCorrect answer: "${qObj.answer}"\nScore: ${score}/${i+1}`);
    }
  }

  // Final summary
  alert(`Quiz finished!\nFinal score: ${score} out of ${total}`);
  console.log("Quiz Summary:");
  console.log(`Final score: ${score}/${total}`);

  if (wrongAnswers.length) {
    console.log("Questions you missed:");
    wrongAnswers.forEach((w, idx) => {
      console.log(`${idx+1}. Q: ${w.question}`);
      console.log(`   Your answer: ${w.yourAnswer}`);
      console.log(`   Correct answer: ${w.correctAnswer}`);
    });
  } else {
    console.log("All correct — nice job!");
  }

  const restart = confirm("Do you want to retry the quiz?");
  if (restart) {
    runQuiz();
  } else {
    console.log("Thanks for playing!");
  }
}

runQuiz();

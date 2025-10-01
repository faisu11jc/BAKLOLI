const quizData = [
  { question: "1. Kya aap GANDU hain?", answers: { a: "Ha", b: "Pehle tha", c: "Abhi bhi hoon", d: "All of the above" }, correct: "c" },
  { question: "2. Whi aa ke gand mar lunga bsdk-kisne kaha hai?", answers: { a: "Isaac Newton", b: "Faisu papa", c: "I dont know", d: "Aayein" }, correct: "b" },
  { question: "3. Aap apni gaanmasti band karoge ya nahi?", answers: { a: "Nahi", b: "Bilkul nahi", c: "gaan de dunga but msti bnd nahi", d: "OPTION C" }, correct: "c" },
  { question: "4. 150 me bik jaoge kya ji?", answers: { a: "10 rupye me bhi lelo ji", b: "free me lelo ji", c: "Option a", d: "Option B" }, correct: "b" },
  { question: "5. Aakhri sawal-what is GAWJ GAWk?", answers: { a: "aayein", b: "wtf", c: "bhg bsdk", d: "yes daddy" }, correct: "d" }
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];
  quizData.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label><input type="radio" name="question${questionNumber}" value="${letter}"> ${letter}: ${currentQuestion.answers[letter]}</label><br>`
      );
    }
    output.push(`<div class="question"><strong>${currentQuestion.question}</strong></div><div class="answers">${answers.join("")}</div>`);
  });
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const quizContainer = document.getElementById("quiz");
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;
  quizData.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === currentQuestion.correct) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  document.getElementById("results").innerHTML = `You got ${numCorrect} out of ${quizData.length} correct.`;
}

document.getElementById("submit").addEventListener("click", showResults);
buildQuiz();

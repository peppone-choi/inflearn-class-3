const questions = [
  {
    question: "프랑스의 수도는?",
    options: ["파리", "런던", "베를린", "마드리드"],
    answer: 0,
  },
  {
    question: "2의 8제곱은?",
    options: ["64", "128", "256", "512"],
    answer: 2,
  },
  {
    question: "다음 중 과일이 아닌 것은?",
    options: ["사과", "바나나", "딸기", "토마토"],
    answer: 3,
  },
  {
    question: "다음 중 영어 단어는?",
    options: ["사랑", "애정", "헬로", "바보"],
    answer: 2,
  },
  {
    question: "다음 중 소수는?",
    options: ["1", "7", "4", "10"],
    answer: 1,
  },
];

const questionText = document.querySelector("#question");
const optionContainer = document.querySelector("#answer-btn");
const nextContainer = document.querySelector("#next-btn");
const plate = document.querySelector("#game-plate");

function showQuestion(questionIndex) {
  nextContainer.innerHTML = "";
  optionContainer.innerHTML = "";
  const question = questions[questionIndex];
  questionText.textContent = question.question;

  question.options.forEach((option, index) => {
    const optionButton = buttonMaker(option, 40, () => {
      if (index === question.answer) {
        colorChange("white", "green");
      } else {
        colorChange("white", "red");
      }
      nextContainer.innerHTML = "";
      if (questionIndex < questions.length - 1) {
        const nextButton = buttonMaker("다음 문제", 40, () => {
          colorChange("black", "white");
          showQuestion(questionIndex + 1);
        });
        nextContainer.appendChild(nextButton);
      } else {
        const resetButton = buttonMaker("다시 시작", 40, () => {
          colorChange("black", "white");
          showQuestion(0);
        });
        nextContainer.appendChild(resetButton);
      }
    });
    optionContainer.appendChild(optionButton);
  });
}

function colorChange(textColor, backgroundColor) {
  questionText.setAttribute("style", `color: ${textColor}; font-size: 6em; margin-top: 1em;`);
  plate.setAttribute("style", `background-color: ${backgroundColor}; height: 22em`);
}

function buttonMaker(name, fontSize, eventListener) {
  const button = document.createElement("button");
  button.textContent = name;
  button.setAttribute("style", `font-size: ${fontSize}px;`);
  button.addEventListener("click", eventListener);
  return button;
}

showQuestion(0);

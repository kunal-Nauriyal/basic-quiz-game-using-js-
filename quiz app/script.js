const questions = [
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
            { text: "kunal", correct: false },
            { text: "Narendra modi", correct: true },
            { text: "abhishek", correct: false },
            { text: "manav", correct: false },
        ]

    },
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
            { text: "kunal", correct: false },
            { text: "Narendra modi", correct: true },
            { text: "abhishek", correct: false },
            { text: "manav", correct: false },
        ]

    },
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
          
            { text: "Narendra modi", correct: true },
            { text: "abhishek", correct: false },
            { text: "kunal", correct: false },
            { text: "manav", correct: false },
        ]

    },
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
           
            { text: "Narendra modi", correct: true },
          
            { text: "abhishek", correct: false },
            { text: "manav", correct: false },
            { text: "kunal", correct: false },]

    },
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
          
            { text: "Narendra modi", correct: true },
            { text: "abhishek", correct: false },
            { text: "kunal", correct: false },
            { text: "kapoor", correct: false },
        ]

    },
    {
        question: "Who is the PrimeMinister of India?",
        answers: [
            { text: "kunal", correct: false },
            { text: "Narendra modi", correct: true },
            { text: "kabir", correct: false },
            { text: "manav", correct: false },
        ]

    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz() { 
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() { 
    resetState();
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentquestion.question; 

    currentquestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answers.correct) { 
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectanswer);
    });
}

function resetState() { 
    nextbutton.style.display = "none";
    while (answerButtons.firstChild) { 
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectanswer(e) { 
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        selectedbtn.classList.add("Correct");
        score++;
    }
    else { 
        selectedbtn.classList.add("Incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbutton.style.display = "block";
}
function showscore() { 
    resetState();
    questionElement.innerHTML = `you scored ${score} out of the ${question.lenght}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < question.length) {
        showQuestion();
    }
    else { 
        showscore();
    }
}

nextbutton.addEventListener("click", () => { 
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    }
    else { 
        startquiz();
    }
})


startquiz();
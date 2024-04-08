function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

function updateTime() {
    const now = new Date();
    const datetime = now.toLocaleString('lv-LV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    document.getElementById('datetime').textContent = datetime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

// Random car facts
const carFacts = [
    "The first car accident occurred in 1891 in Ohio, United States.",
    "The average car has around 30,000 parts.",
    "The Volkswagen Beetle was designed by Ferdinand Porsche.",
    "The Ford Model T, introduced in 1908, was the first mass-produced car.",
    "The Toyota Corolla is the best-selling car model of all time.",
    "The most expensive car ever sold at auction is the 1962 Ferrari 250 GTO, which fetched $48.4 million."
];

// Function to display a random car fact
function displayRandomCarFact() {
    const randomIndex = Math.floor(Math.random() * carFacts.length);
    const carFactElement = document.getElementById('car-fact-content');
    carFactElement.textContent = carFacts[randomIndex];
}

// Display a random car fact when the page loads
displayRandomCarFact();

const quizData = [
    {
        question: "What does this sign mean?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: 1
    },
    // Add more questions here...
];

const questionEl = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const scoreEl = document.getElementById('score');
let currentQuestionIndex = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    answerBtns.forEach((btn, index) => {
        btn.innerText = currentQuestion.answers[index];
        btn.addEventListener('click', () => selectAnswer(index));
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        scoreEl.innerText = score;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Quiz finished
        alert(`Quiz finished! Your score: ${score}/${quizData.length}`);
    }
}

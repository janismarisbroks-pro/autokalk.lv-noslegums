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
    "Pirmā autoavārija notika 1891. gadā Ohaio štatā, ASV.",
    "Vidējā automašīnā ir aptuveni 30 000 detaļu.",
    "Volkswagen Beetle izstrādāja Ferdinands Porše.",
    "Ford Model T, kas tika prezentēts 1908. gadā, bija pirmais masveidā ražotais automobilis.",
    "Toyota Corolla ir visu laiku vislabāk pārdotais auto modelis.",
    "Visdārgākā automašīna, kas jebkad pārdota izsolē, ir 1962. gada Ferrari 250 GTO, kas maksāja 48,4 miljonus dolāru."
];

// Function to display a random car fact
function displayRandomCarFact() {
    const randomIndex = Math.floor(Math.random() * carFacts.length);
    const carFactElement = document.getElementById('car-fact-content');
    carFactElement.textContent = carFacts[randomIndex];
}

// Display a random car fact when the page loads
displayRandomCarFact();





const questions = [
    {
        question: "Ko nozīmē šī ceļa zīme?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Latvia_road_sign_101.svg/1024px-Latvia_road_sign_101.svg.pngdodcelu.png", // Specify the relative path to the image file
        options: ["Pagriezties aizliegts", "Dodiet ceļu", "Vienādas nozīmes ceļu krustojums", "Galvenais ceļš"],
        answer: "Vienādas nozīmes ceļu krustojums"
    },
    {
        question: "Ko nozīmē šī ceļa zīme?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Latvia_road_sign_102.svg/1024px-Latvia_road_sign_102.svg.png",
        options: ["Lokveida krustojums", "Bīstams pagrieziens", "Ātrumvalnis", "Slidens ceļš"],
        answer: "Lokveida krustojums"
    },
    {
        question: "Ko nozīmē šī ceļa zīme?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Latvia_road_sign_128.svg/1024px-Latvia_road_sign_128.svg.png",
        options: ["Sastrēgums", "Braukt aizliegts", "Sānvējš", "Ar piekabi braukt aizliegts"],
        answer: "Sānvējš"
    },
    // Add more questions here
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const statusElement = document.getElementById('status');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('startButton');

let currentQuestionIndex = 0;
let score = 0;
let gameStarted = false;

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    } else {
        restartGame();
    }
});

function startGame() {
    gameStarted = true;
    startButton.style.display = 'none';
    currentQuestionIndex = 0; // Reset current question index
    score = 0; // Reset score
    loadQuestion(currentQuestionIndex);
}


function loadQuestion(questionIndex) {
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;

    // Display the image
    const imageContainer = document.getElementById('image');
    imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Road Sign" style="max-width: 100%; height: auto;">`;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, index));
        optionsElement.appendChild(optionElement);
    });

    statusElement.textContent = `Jautājums ${questionIndex + 1}/${questions.length}`;
    scoreElement.textContent = `Punkti ${score}/${questions.length}`;
}

function selectOption(option, index) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;
    if (option === correctAnswer) {
        score++;
        resultElement.textContent = "Pareizi!";
    } else {
        resultElement.textContent = "Nepareizi. Pareizā atbilde: " + correctAnswer;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => {
            resultElement.textContent = "";
            loadQuestion(currentQuestionIndex);
        }, 2000); // Delay loading the next question for 1 second
    } else {
        setTimeout(() => {
            showResult();
        }, 1000); // Delay showing the final result for 1 second
    }
}

function showResult() {
    resultElement.textContent = `Punkti: ${score}/${questions.length}`;
    startButton.textContent = 'Atsākt spēli';
    startButton.style.display = 'block';
    gameStarted = false;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = '';
    loadQuestion(currentQuestionIndex);
}





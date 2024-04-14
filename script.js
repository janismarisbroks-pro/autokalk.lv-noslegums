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

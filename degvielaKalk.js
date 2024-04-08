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

const fuelEfficiencyValues = {
    "Toyota": 8.5,
    "Honda": 9.0,
    "Ford": 8.8,
    "Chevrolet": 9.2,
    "Volkswagen": 8.9
};

document.getElementById('carMake').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const efficiencyInput = document.getElementById('efficiency');
    const selectedCarMake = selectedOption.value;
    const efficiencyValue = fuelEfficiencyValues[selectedCarMake];
    if (efficiencyValue !== undefined) {
        efficiencyInput.value = efficiencyValue;
        efficiencyInput.readOnly = true; // Make it readonly
    } else {
        efficiencyInput.value = '';
        efficiencyInput.readOnly = false; // Make it editable
    }
});

// Ensure that the efficiency input field starts as editable
document.getElementById('efficiency').readOnly = false;

document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const distance = parseFloat(document.getElementById('distance').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    // Calculate fuel cost
    const fuelCost = (distance / 100) * efficiency * fuelPrice;
    const litresNeeded = distance / 100 * efficiency;

    // Display result
    document.getElementById('result').innerHTML = `
        <h2>Rezultāts</h2>
        <p>Degvielas izmaksas: ${parseFloat(fuelCost.toFixed(2))} EUR</p>
        <p>Degvielas tilpums: ${parseFloat(litresNeeded.toFixed(2))} L</p>
        <p>Brauciena attālums: ${parseFloat(distance)} km</p>
        <p>Degvielas efektivitāte: ${parseFloat(efficiency)} L/100 km</p>
        <p>Degvielas cena: ${parseFloat(fuelPrice)} EUR/L</p>
    `;
});
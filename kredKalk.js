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


let loanChart = null; // Initialize chart variable

document.getElementById('calculateButton').addEventListener('click', calculateLoan);


function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTermYears = parseFloat(document.getElementById('loanTermYears').value);
    const loanTermMonths = parseFloat(document.getElementById('loanTermMonths').value) || 0; // Default value of 0 if no months entered
    
    const totalLoanTermMonths = loanTermYears * 12 + loanTermMonths; // Calculate total loan term in months
    
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = totalLoanTermMonths;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - loanAmount;
    const totalPrincipal = loanAmount; // Total principal is the loan amount itself
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Ikmēneša maksājums: <strong>${monthlyPayment.toFixed(2)} EUR/mēnesī</strong></p>
        <p>Procentu maksājums: <strong>${totalInterest.toFixed(2)} EUR</strong></p>
        <p>Pamatsummas maksājums: <strong>${totalPrincipal.toFixed(2)} EUR</strong></p>
        <p>Kredīta summa: <strong>${totalCost.toFixed(2)} EUR</strong></p>
    `;

    updateChart(totalPrincipal, totalInterest);
}

function updateChart(principal, interest) {
    const ctx = document.getElementById('chart').getContext('2d');
    
    if (loanChart) {
        loanChart.destroy(); // Destroy previous chart instance
    }

    loanChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pamatsumma', 'Procenti'],
            datasets: [{
                label: 'Payment Breakdown',
                data: [principal, interest],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                position: 'bottom',
            }
        }
    });
}



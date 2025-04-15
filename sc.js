const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.gap = "10px";

const buttonLabels = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', 'C', '=', '/']
];


buttonLabels.forEach(row => {
    row.forEach(label => {
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = label;
        button.style.padding = "20px";
        button.style.fontSize = "1.5em";
        button.style.backgroundColor = "#f0f0f0";
        button.style.border = "1px solid #ccc";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.transition = "background-color 0.3s";

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = "#ddd";
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = "#f0f0f0";
        });

        if (label === 'C') {
            button.onclick = clearDisplay;
        } else if (label === '=') {
            button.onclick = calculateResult;
        } else if (['+', '-', '*', '/'].includes(label)) {
            button.onclick = () => appendOperator(label);
        } else {
            button.onclick = () => appendNumber(label);
        }

        buttonsContainer.appendChild(button);
    });
});

document.body.appendChild(buttonsContainer);

let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function appendOperator(operator) {
    currentInput += " " + operator + " ";
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
        document.getElementById("display").value = "Error";
        currentInput = "";
    }
}

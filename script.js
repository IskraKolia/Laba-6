// Навігація між вкладками
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// 1.1 Love Calculator
function loveCalculator() {
    let name1 = prompt("Введіть ім'я першої людини:");
    let name2 = prompt("Введіть ім'я другої людини:");
    let loveScore = Math.floor(Math.random() * 100) + 1;
    console.log(`${name1} і ${name2} мають сумісність ${loveScore}%!`);
}

// 1.2 BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (height * height);
    let result = "";
    if (bmi < 18.5) {
        result = "Недостатня вага";
    } else if (bmi < 24.9) {
        result = "Нормальна вага";
    } else if (bmi < 29.9) {
        result = "Надлишкова вага";
    } else if (bmi < 34.9) {
        result = "Ожиріння 1 ступеня";
    } else {
        result = "Ожиріння 2 ступеня";
    }
    console.log(`Ваш ІМТ: ${bmi.toFixed(2)} - ${result}`);
}

// 1.3 Leap Year
function isLeapYear() {
    let year = document.getElementById("year").value;
    let result = "";
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result = `${year} є високосним роком`;
    } else {
        result = `${year} не є високосним роком`;
    }
    console.log(result);
}

// 1.4 Who’s buying Coffee?
function whosBuyingCoffee() {
    let names = ["Оля", "Вася", "Петро", "Іван"];
    let randomIndex = Math.floor(Math.random() * names.length);
    console.log(`${names[randomIndex]} купує каву для всіх!`);
}

// 2 Послідовність
function printSequence() {
    for (let i = 100; i > 0; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Oleksandr_Kukharskiy");
        } else if (i % 3 === 0) {
            console.log("Oleksandr");
        } else if (i % 5 === 0) {
            console.log("Kukharskiy");
        } else {
            console.log(i);
        }
    }
}

// 3.1 «99 bottles of beer»
function bottlesOfBeer() {
    let count = 99;
    while (count > 0) {
        console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.`);
        count--;
        console.log(`Take one down, pass it around, ${count} bottles of beer on the wall.`);
    }
}

// 3.2 Послідовність Фібоначчі
function fibonacci() {
    let n = document.getElementById("fibNumber").value;
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log(sequence.slice(0, n));
}

// 4. Гра у кості
function rollDice() {
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").setAttribute("src", `images/dice${player1}.png`);
    document.getElementById("dice2").setAttribute("src", `images/dice${player2}.png`);

    let result;
    if (player1 > player2) {
        result = "Гравець 1 виграє!";
    } else if (player2 > player1) {
        result = "Гравець 2 виграє!";
    } else {
        result = "Нічия!";
    }

    document.getElementById("diceResult").textContent = result;
}

// Відкриваємо першу вкладку за замовчуванням
showTab('loveCalculator');

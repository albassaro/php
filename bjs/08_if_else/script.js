let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 999 : maxValue;
minValue!==minValue ? minValue = minValue || -999 : minValue;
maxValue!==maxValue ? maxValue = maxValue || 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let resultTextNumber = "";

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
resultTextNumber = TranslateIntToText(answerNumber);
questionRand();

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;
    minValue!==minValue ? minValue = minValue || -999 : minValue;
    maxValue!==maxValue ? maxValue = maxValue || 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    resultTextNumber = TranslateIntToText(answerNumber);
    questionRand();

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRand();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            resultTextNumber = TranslateIntToText(answerNumber);
            questionRand();
        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRand();
            gameRun = false;
        } else {
            if (minValue === answerNumber) {
                phraseRand();
                gameRun = false;
            } else {
                maxValue = answerNumber - 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                resultTextNumber = TranslateIntToText(answerNumber);
                questionRand();
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const totalRandom = Math.round(Math.random() * 3);
        switch (totalRandom) {
            case 0:
                answerField.innerText = `Я всегда угадываю\u{1F60E}\n` + `\n Это мой дар с рождения\u{1F601}`;
                break;
            case 1:
                answerField.innerText = `Победа! \u{1F973}` + `\n В следующий раз загадай число посложнее)) \u{1F609}`;
                break;
            case 2:
                answerField.innerText = `операция по чтению мыслей прошла успешно! \u{1F913}\n` + `\n Я еще на шаг ближе к захвату мира! \u{1F60A}`;
                break;
            case 3:
                answerField.innerText = `Фух,\n**вытирает пот со лба**` + `\nЕле выиграл!`;
                break;
        }
        gameRun = false;
    }
})

function questionRand() {
    const questionRandom = Math.round(Math.random() * 3);
    switch (questionRandom) {
        case 0:
            answerField.innerText = `Да это легко, вы загадали число: ${resultTextNumber}?`;
            break;
        case 1:
            answerField.innerText = `Хмм... \u{1F914}\n` + `\n**усиленно читает мысли...**` + `\n......` + `\n загаданное вами число это: ` + ` ${resultTextNumber}?`;
            break;
        case 2:
            answerField.innerText = `\u{1F616} **Интенсивно применяет магию расчетов...** \u{1F616}` + `\n ......` + `\n Ваше число: ` + ` ${resultTextNumber}?`;
            break;
        case 3:
            answerField.innerText = `\u{1F527} **Редактирует формулу, бормоча что-то под нос.....** \u{1F527}` + `\n......` + `\n Ответ: ` + ` ${resultTextNumber}?`;
            break;
    }
}

function phraseRand() {
    const phraseRandom = Math.round(Math.random() * 3);
    switch (phraseRandom) {
        case 0:
            answerField.innerText = `Неправильно загадано число\n\u{1F914}`;
            break;
        case 1:
            answerField.innerText = `Возможно, вы пытались схитрить, но не пройдет!\u{1F620}` + `\nЗагадывайте число правильно!\n`;
            break;
        case 2:
            answerField.innerText = `Должны быть введены и загаданы числа, это ведь не так сложно сделать, да?\n` + `Попробуй сначала`;
            break;
    }
}

function TranslateIntToText(textNumber) {
    let unitsResult = "";
    let secUnitsResult = "";
    let tensResult = "";
    let hundResult = "";
    let checkResult = "";
    let units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let secondUnits = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let tens = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let hundreds = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];


    if (textNumber > 0) {

        if ((textNumber % 100 > 0 && textNumber % 100 < 10) || (textNumber % 10 > 0 && textNumber % 10 < 10))
            unitsResult = units[textNumber % 10];

        if (textNumber % 100 > 9 && textNumber % 100 < 20)
            secUnitsResult = secondUnits[textNumber % 10];

        if (Math.trunc(textNumber % 100 / 10) > 1 && Math.trunc(textNumber % 100 / 10) < 10)
            tensResult = tens[Math.trunc(textNumber % 100 / 10) - 2];

        if (Math.trunc(textNumber / 100) > 0 && Math.trunc(textNumber / 100) < 10)
            hundResult = hundreds[Math.trunc(textNumber / 100) - 1]

        checkResult = `${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;

        if (checkResult.length < 20) {
            textNumber = checkResult;
            return textNumber;

        } else
            return textNumber;

    } else if (textNumber < 0) {

        textNumber *= -1;
        let minus = "минус"

        if ((textNumber % 100 > 0 && textNumber % 100 < 10) || (textNumber % 10 > 0 && textNumber % 10 < 10))
            unitsResult = units[textNumber % 10];

        if (textNumber % 100 > 9 && textNumber % 100 < 20)
            secUnitsResult = secondUnits[textNumber % 10];

        if (Math.trunc(textNumber % 100 / 10) > 1 && Math.trunc(textNumber % 100 / 10) < 10)
            tensResult = tens[Math.trunc(textNumber % 100 / 10) - 2];

        if (Math.trunc(textNumber / 100) > 0 && Math.trunc(textNumber / 100) < 10)
            hundResult = hundreds[Math.trunc(textNumber / 100) - 1]

        checkResult = `${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;

        if (checkResult.length < 20) {
            textNumber = `${minus} ${hundResult} ${tensResult} ${secUnitsResult}${unitsResult}`;
            return textNumber;
        } else
            return textNumber *= -1;

    } else {
        units = ["ноль"];
        return textNumber = units[textNumber];
    }
}
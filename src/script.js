function switchLanguage() {
    const lang = document.getElementById("language").value;

    if (lang === "ru") {
        document.getElementById("title").textContent = "Калькулятор квадратного корня";
        document.getElementById("inputLabel").textContent = "Введите число:";
        document.getElementById("rootLabel").textContent = "Тип корня:";
        document.getElementById("precisionLabel").textContent = "Точность:";
        document.getElementById("languageLabel").textContent = "Язык:";
        document.getElementById("calculateBtn").textContent = "Вычислить";

        // Изменение текста в выпадающем списке
        document.querySelector("#rootType option[value='arithmetic']").textContent = "Арифметический";
        document.querySelector("#rootType option[value='complex']").textContent = "Комплексный";

        // Изменение плейсхолдеров для полей ввода
        document.getElementById("inputNumber").placeholder = "Введите число";
        document.getElementById("precision").placeholder = "Введите точность";

    } else {
        document.getElementById("title").textContent = "Square Root Calculator";
        document.getElementById("inputLabel").textContent = "Enter number:";
        document.getElementById("rootLabel").textContent = "Root type:";
        document.getElementById("precisionLabel").textContent = "Precision:";
        document.getElementById("languageLabel").textContent = "Language:";
        document.getElementById("calculateBtn").textContent = "Calculate";

        // Изменение текста в выпадающем списке обратно на английский
        document.querySelector("#rootType option[value='arithmetic']").textContent = "Arithmetic";
        document.querySelector("#rootType option[value='complex']").textContent = "Complex";

        // Изменение плейсхолдеров для полей ввода обратно на английский
        document.getElementById("inputNumber").placeholder = "Enter number";
        document.getElementById("precision").placeholder = "Enter precision";
    }
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const number = parseFloat(document.getElementById('inputNumber').value);
    const rootType = document.getElementById('rootType').value;
    const precision = parseFloat(document.getElementById('precision').value);
    let result = '';

    if (isNaN(number)) {
        result = 'Please enter a valid number';
    } else {
        switch (rootType) {
            case 'arithmetic':
                result = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                break;
            case 'complex':
                if (number >= 0) {
                    result = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                } else {
                    const imaginaryPart = Math.sqrt(-number).toFixed(precision);
                    result = `√${number} = ${imaginaryPart}i`;
                }
                break;
            default:
                result = 'Invalid root type';
        }
    }

    document.getElementById('result').textContent = result;
});

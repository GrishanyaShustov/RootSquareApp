let resultMessages = {
    en: '',
    ru: ''
};

document.getElementById('calculateBtn').addEventListener('click', () => {
    const number = parseFloat(document.getElementById('inputNumber').value);
    const rootType = document.getElementById('rootType').value;
    const precision = parseFloat(document.getElementById('precision').value);
    const lang = document.getElementById("language").value;
    let result = '';

    if (isNaN(number)) {
        resultMessages.en = 'Please enter a valid number';
        resultMessages.ru = 'Пожалуйста, введите правильное число';
    } else {
        switch (rootType) {
            case 'arithmetic':
                if (number < 0) {
                    resultMessages.en = 'Arithmetic root for negative numbers is not defined';
                    resultMessages.ru = 'Арифметический корень для отрицательных чисел не определен';

                } else {
                    resultMessages.en = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                    resultMessages.ru = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                }
                break;
            case 'complex':
                if (number >= 0) {
                    resultMessages.en = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                    resultMessages.ru = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                } else {
                    resultMessages.en = `√${number} = ${Math.sqrt(-number).toFixed(precision)}i`;
                    resultMessages.ru = `√${number} = ${Math.sqrt(-number).toFixed(precision)}i`;
                }
                break;
            default:
                resultMessages.en = 'Invalid root type';
                resultMessages.ru = 'Неправильный тип корня';
        }
    }

    document.getElementById('result').textContent = resultMessages[lang];
});
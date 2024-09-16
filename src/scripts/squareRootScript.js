let resultMessages = {
    en: '',
    ru: ''
};

document.getElementById('calculateBtn').addEventListener('click', (y, x) => {
    const number = parseFloat(document.getElementById('inputNumber').value);
    const imNumber = parseFloat(document.getElementById('imaginaryPart').value);

    const rootType = document.getElementById('rootType').value;
    const precision = parseFloat(document.getElementById('precision').value);
    const lang = document.getElementById("language").value;

    if (isNaN(number)) {
        resultMessages.en = 'Please, enter a valid number';
        resultMessages.ru = 'Пожалуйста, введите правильное число';
    } else {
        switch (rootType) {
            case 'arithmetic':
                if (number < 0) {
                    resultMessages.en = 'Arithmetic root for negative numbers is not defined';
                    resultMessages.ru = 'Арифметический корень для отрицательных чисел не определен';

                } else {
                    resultMessages.en = `√${number} = ${parseFloat(Math.sqrt(number).toFixed(precision))}`;
                    resultMessages.ru = resultMessages.en;
                }
                break;
            case 'complex':
                if (isNaN(imNumber)){
                    resultMessages.en = "Please, enter a valid imaginary part";
                    resultMessages.ru = "Пожалуйста, введите правильную мнимую часть";
                }
                else{
                    let z = (imNumber >= 0) ? `√(${number} + ${imNumber}i)` : `√(${number} - ${Math.abs(imNumber)}i)`;

                    // Модуль числа (абсолютное значение)
                    let absZ = Math.sqrt(Math.pow(number, 2) + Math.pow(imNumber, 2));

                    // Аргумент числа (угол)
                    let phi = Math.atan2(imNumber, number);

                    // Квадратный корень модуля числа
                    let absRootZ = Math.sqrt(absZ);

                    // Первый корень
                    let realRoot1 = absRootZ * Math.cos(phi / 2);
                    let imRoot1 = absRootZ * Math.sin(phi / 2);

                    // Второй корень
                    let realRoot2 = absRootZ * Math.cos((phi + Math.PI) / 2);
                    let imRoot2 = -absRootZ * Math.sin((phi + Math.PI) / 2);

                    // Форматирование результата
                    let root1 = (imRoot1 >= 0) ? `${realRoot1.toFixed(precision)} + ${imRoot1.toFixed(precision)}i` : `${realRoot1.toFixed(precision)} - ${Math.abs(imRoot1).toFixed(precision)}i`;
                    let root2 = (imRoot2 >= 0) ? `${realRoot2.toFixed(precision)} + ${imRoot2.toFixed(precision)}i` : `${realRoot2.toFixed(precision)} - ${Math.abs(imRoot2).toFixed(precision)}i`;

                    resultMessages.en = `${z} = ${root1}<br></br>${z} = ${root2}`;
                    resultMessages.ru = resultMessages.en;
                }
                break;
            case 'algebraic':
                if(number < 0){
                    resultMessages.en = 'Algebraic root for negative numbers is not defined';
                    resultMessages.ru = 'Алгебраический корень для отрицательных чисел не определен';
                } else if(number > 0){
                    resultMessages.en = `√${number} = ±${parseFloat(Math.sqrt(number).toFixed(precision))}`;
                    resultMessages.ru = resultMessages.en;
                } else if(number === 0){
                    resultMessages.en = `√${number} = 0`;
                    resultMessages.ru = resultMessages.en;
                }
                break;
            default:
                resultMessages.en = 'Invalid root type';
                resultMessages.ru = 'Неправильный тип корня';
        }
    }

    document.getElementById('result').innerHTML = resultMessages[lang];
});
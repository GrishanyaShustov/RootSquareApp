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
                    let absZ = Math.sqrt(number * number + imNumber * imNumber);

                    // Аргумент числа (угол)
                    let angle = Math.atan2(imNumber, number);

                    // Квадратный корень модуля числа
                    let absRootZ = Math.sqrt(absZ);

                    // Первый корень
                    let realPart1 = parseFloat((absRootZ * Math.cos(angle / 2)).toFixed(precision));
                    let imPart1 = parseFloat((absRootZ * Math.sin(angle / 2)).toFixed(precision));

                    // Второй корень
                    let realPart2 = parseFloat((absRootZ * Math.cos((angle + Math.PI*2) / 2)).toFixed(precision));
                    let imPart2 = parseFloat((absRootZ * Math.sin((angle + Math.PI*2) / 2)).toFixed(precision));

                    // Форматирование результата
                    let root1 = (imPart1 >= 0) ? `${realPart1} + ${imPart1}i` : `${realPart1} - ${Math.abs(imPart1)}i`;
                    let root2 = (imPart2 >= 0) ? `${realPart2} + ${imPart2}i` : `${realPart2} - ${Math.abs(imPart2)}i`;

                    if(number <= 0 && imNumber === 0){
                        resultMessages.en = `${z} = ${root1}`;
                        resultMessages.ru = `${z} = ${root1}`;
                    }
                    else{
                        resultMessages.en = `${z} = ${root1}<br>${z} = ${root2}`;
                        resultMessages.ru = `${z} = ${root1}<br>${z} = ${root2}`;
                    }

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
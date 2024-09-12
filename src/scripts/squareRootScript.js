document.getElementById('calculateBtn').addEventListener('click', () => {
    const number = parseFloat(document.getElementById('inputNumber').value);
    const rootType = document.getElementById('rootType').value;
    const precision = parseFloat(document.getElementById('precision').value);
    const lang = document.getElementById("language").value;
    let result = '';

    if (isNaN(number)) {
        result = 'Please enter a valid number';
    } else {
        switch (rootType) {
            case 'arithmetic':
                if (number < 0) {
                    result = lang === 'ru'
                        ? 'Арифметический корень для отрицательных чисел не определен'
                        : 'Arithmetic root for negative numbers is not defined';
                } else {
                    result = `√${number} = ${Math.sqrt(number).toFixed(precision)}`;
                }
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
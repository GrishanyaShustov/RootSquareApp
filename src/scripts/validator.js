document.getElementById('precision').addEventListener('input', function (event) {
    const value = event.target.value;

    // Если введенное значение не цифра от 0 до 9, очищаем поле
    if (!/^[0-9]$/.test(value)) {
        event.target.value = value.slice(0, -1); // Удаляем последний символ
    }
});

document.getElementById('rootType').addEventListener('change', () => {
    const rootType = document.getElementById('rootType').value;
    const imaginaryInputContainer = document.getElementById('imaginaryInputContainer');

    if (rootType === 'complex') {
        imaginaryInputContainer.style.display = 'block'; // Показываем поле для мнимой части
    } else {
        imaginaryInputContainer.style.display = 'none'; // Скрываем поле для мнимой части
    }
});
document.getElementById('precision').addEventListener('input', function (event) {
    const value = event.target.value;

    // Если введенное значение не цифра от 0 до 9, очищаем поле
    if (!/^[0-9]$/.test(value)) {
        event.target.value = value.slice(0, -1); // Удаляем последний символ
    }
});
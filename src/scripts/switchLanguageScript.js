function switchLanguage() {
    const lang = document.getElementById("language").value;
    const rootType = document.getElementById('rootType').value;

    if (lang === "ru") {
        document.getElementById("title").textContent = "Калькулятор квадратного корня";
        document.getElementById("inputLabel").textContent = "Действительное число:";
        document.getElementById("imaginaryPartLabel").textContent = "Мнимая часть:";
        document.getElementById("rootLabel").textContent = "Тип корня:";
        document.getElementById("precisionLabel").textContent = "Точность:";
        document.getElementById("languageLabel").textContent = "Язык:";
        document.getElementById("calculateBtn").textContent = "Вычислить";

        // Изменение текста в выпадающем списке
        document.querySelector("#rootType option[value='arithmetic']").textContent = "Арифметический";
        document.querySelector("#rootType option[value='algebraic']").textContent = "Алгебраический";
        document.querySelector("#rootType option[value='complex']").textContent = "Комплексный";

        // Изменение плейсхолдеров для полей ввода
        document.getElementById("inputNumber").placeholder = "Введите действительное число";
        document.getElementById("precision").placeholder = "Введите точность";
        document.getElementById("imaginaryPart").placeholder = "Введите мнимую часть";

    } else {
        document.getElementById("title").textContent = "Square Root Calculator";
        document.getElementById("inputLabel").textContent = "Enter a real number:";
        document.getElementById("imaginaryPartLabel").textContent = "Imaginary part:";
        document.getElementById("rootLabel").textContent = "Root type:";
        document.getElementById("precisionLabel").textContent = "Precision:";
        document.getElementById("languageLabel").textContent = "Language:";
        document.getElementById("calculateBtn").textContent = "Calculate";

        // Изменение текста в выпадающем списке обратно на английский
        document.querySelector("#rootType option[value='arithmetic']").textContent = "Arithmetic";
        document.querySelector("#rootType option[value='algebraic']").textContent = "Algebraic";
        document.querySelector("#rootType option[value='complex']").textContent = "Complex";

        // Изменение плейсхолдеров для полей ввода обратно на английский
        document.getElementById("inputNumber").placeholder = "Enter number";
        document.getElementById("precision").placeholder = "Enter precision";
        document.getElementById("imaginaryPart").placeholder = "Enter imaginary part";
    }
}
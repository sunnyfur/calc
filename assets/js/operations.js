class Calc {
    static isNotNumbers(a, b) {
        if (!isNaN(a) && !isNaN(b)) {
            return false;

        } else {
            return "Одно из введенных значений не является числом"
        };

    }

    static sum(a, b) {
        return this.isNotNumbers(a, b) || a + b;
    }
    static sub(a, b) {
        return this.isNotNumbers(a, b) || a - b;
    }

    static mul(a, b) {
        return this.isNotNumbers(a, b) || a * b;
    }
    static div(a, b) {
        return (b == 0) ? "Ошибка: деление на 0" : this.isNotNumbers(a, b) || a / b;
    }
}





const getRezult = () => {
    let firstNumber = Number(document.getElementById("idFirstNumber").value);
    let secondNumber = Number(document.getElementById("idSecondNumber").value);
    let rez = document.getElementById('idRezult');
    let operations = document.getElementsByClassName('operation_radio');
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].checked) {
            switch (operations[i].value) {
                case 'sum':
                    rez.value = Calc.sum(firstNumber, secondNumber);
                    break;
                case 'sub':
                    rez.value = Calc.sub(firstNumber, secondNumber);
                    break;
                case 'mul':
                    rez.value = Calc.mul(firstNumber, secondNumber);
                    break;
                case 'div':
                    rez.value = Calc.div(firstNumber, secondNumber);
                    break;
            }
        }
    }
}
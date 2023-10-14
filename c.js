function cal() {
    let number1 = parseFloat(document.querySelector("#num1").value);
    let opr = document.querySelector("#opr").value;
    let number2 = parseFloat(document.querySelector("#num2").value);
    let res;

    if (opr == "add") {
        res = number1 + number2;
        document.querySelector("#result").innerHTML = "Result is " + res;
    } else if (opr == "sub") {
        res = number1 - number2;
        document.querySelector("#result").innerHTML = "Result is " + res;
    } else if (opr == "mul") {
        res = number1 * number2;
        document.querySelector("#result").innerHTML = "Result is " + res;
    } else if (opr == "div") {
        if (number2 === 0) {
            document.querySelector("#result").innerHTML = "Division by zero is not allowed.";
        } else {
            res = number1 / number2;
            document.querySelector("#result").innerHTML = "Result is " + res;
        }
    }
}

// hsshsj?






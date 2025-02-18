const input_box = document.querySelector('.input_box');
const test_element = document.querySelector('.test_element');
const test_element2 = document.querySelector('.test_element2');

let result;
function inputNumber(number) {
    if (sign_equal !== "="){
        input_box.value += number;
    }
}

var operator;
function inputSign(sign) {
    if (input_box.value !== "") {
        input_box.value += sign;
    }
    operator = sign;
    sign_equal = '';
}

let sign_equal = "";
function calculate() {
    let input_str;
    sign_equal = "=";
    input_str = input_box.value;
    console.log("Ishora => ", operator);
    console.log("Kiritilgan ifoda => ", input_str);

    numbers_arr = input_str.split(operator);
    console.log("Sonlar => ", numbers_arr);
    let num1 = parseFloat(numbers_arr[0]);
    let num2 = parseFloat(numbers_arr[1]);
    // let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log("Result => ", result);
    input_box.value = result;

    // test elementlarni chiqorish
    test_element.textContent = result;
    test_element2.textContent = input_box.value;
}

function clearInput() {
    input_box.value = "";
    sign_equal = "";
    test_element.textContent = result;
    test_element2.textContent = input_box.value;
}




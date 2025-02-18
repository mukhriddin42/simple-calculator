const input_box = document.querySelector('.input_box');
// let number1 = '';
// let number2 = '';
// let result = '';
// let operator = '';

// // Opertaorni kiritish funksiyasi
// function inputSign(sign) {
//     if (operator == "") {
//         operator = sign;
//         input_box.value += operator;
//     }
// }

// function inputNumber(number) {
//     if (operator == "") {
//         number2 += number;
//         input_box.value = number2;
//     } else {
//         number1 += number;
//         input_box.value = number1;
//     }
// }



// function calculate() {

// }

// function clearInput() {

// }





let result;
function inputNumber(number) {
    if (result == "") {
        input_box.value += number;
    }
}

var operator;
function inputSign(sign) {
    if (input_box.value !== "" && result == "") {
        input_box.value += sign;
    }
    operator = sign;
}


function calculate() {
    let input_str;
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
    console.log("Natija => ", result);
    input_box.value = result;
}

function clearInput() {
    input_box.value = "";
    result = "";
}

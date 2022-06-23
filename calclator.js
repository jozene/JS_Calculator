//to take input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

// to determine the operation. 
const operator = prompt('Enter operator ( either +, -, * or / ): ');

switch(operator) {
    case '+':
        result = number1 + number2;
        window.alert(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        window.alert(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        window.alert(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        window.alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        window.alert('Invalid operator');
        break;
}


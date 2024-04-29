let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('num'));
let operators = Array.from(document.getElementsByClassName('operator'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let currentNum = '';
let prevNum = '';
let result = '';
let currentOperator = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        currentNum += e.target.value;
        display.value = currentNum;
    });
});

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        if (currentOperator) {
            prevNum = eval(prevNum + currentOperator + currentNum);
            display.value = prevNum;
            currentNum = '';
            currentOperator = e.target.value;
        } else {
            prevNum = currentNum;
            currentNum = '';
            currentOperator = e.target.value;
        }
    });
});

equals.addEventListener('click', () => {
    if (prevNum && currentNum && currentOperator) {
        result = eval(prevNum + currentOperator + currentNum);
        display.value = result;
        currentNum = result;
        prevNum = '';
        currentOperator = '';
    }
});

clear.addEventListener('click', () => {
    currentNum = '';
    prevNum = '';
    currentOperator = '';
    display.value = '';
});
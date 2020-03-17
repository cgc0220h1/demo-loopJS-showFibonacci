let fibonacciArray = [];
let sum = 0;

function start() {
    let input = +document.getElementById('num-input').value;
    fibonacci(input);
    sumOfFibonacci();
    showResult(input);
    fibonacciArray = [];
    sum = 0;
}

function fibonacci(number) {
    let n = 0;
    let n1 = 1;
    let fibonacci = 0;
    let index = 0;
    while (index < number) {
        n = n1;
        n1 = fibonacci;
        fibonacci = n + n1;
        fibonacciArray.push(fibonacci);
        index++;
    }
}

function sumOfFibonacci() {
    for (let index = 0; index < fibonacciArray.length; index++) {
        sum += fibonacciArray[index];
    }
}

function showResult(number) {
    document.getElementById('fibonacci-num').innerHTML = number + " số fibonacci đầu tiên là: " + fibonacciArray.join(", ");
    document.getElementById("fibonacci-sum").innerHTML = "Tổng của " + number + " số fibonacci đầu tiên là " + sum;
}
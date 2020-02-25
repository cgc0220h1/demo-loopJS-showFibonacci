function fibonacci() {
    let n = 0;
    let n1 = 1;
    let result = 0;
    let display = '';
    let index = 0;
    let num = +document.getElementById('num-input').value;
    while (index < num) {
        n = n1;
        n1 = result;
        result = n + n1;
        display = display + result + ", ";
        index++;
    }
    document.getElementById('displayNum').innerHTML = display;
}
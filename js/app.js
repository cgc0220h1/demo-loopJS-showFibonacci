function fibonacci() {
    let result = "";
    let index = 1;
    let num = +document.getElementById('num-input').value;
    while (index < num) {
        result = result + (index + index - 1) + ", ";
        index++;
    }
    document.getElementById('displayNum').innerHTML = result;
}
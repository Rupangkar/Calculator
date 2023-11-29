function display(vaL){

    document.getElementById('result').value += vaL

    return vaL
}
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}
function clearScreen(){
    document.getElementById('result').value = "";
}


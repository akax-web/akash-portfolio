function append(value){
document.getElementById("result").value += value;
}

function clearResult(){
document.getElementById("result").value = "";
}

function deleteLast(){
let value = document.getElementById("result").value;
document.getElementById("result").value = value.slice(0,-1);
}

function calculate(){
let value = document.getElementById("result").value;
document.getElementById("result").value = eval(value);
}


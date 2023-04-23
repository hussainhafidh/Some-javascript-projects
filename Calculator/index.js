function clearScreen(){
    document.getElementById("result").value = ""
}

function display(val){
    document.getElementById("result").value += val
}

function calculate(){
    let p = document.getElementById("result").value
    let ans = eval(p)
    document.getElementById("result").value = ans; 
}
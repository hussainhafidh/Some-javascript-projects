const button = document.querySelector("button")
const english = document.getElementById("english")
const math = document.getElementById("math")
const physics = document.getElementById("physics")
const chemistry = document.getElementById("chemistry")
const computer = document.getElementById("computer")
const alertt = document.getElementById("alert")

const total = document.getElementById("total")
const average = document.getElementById("average")
const grade = document.getElementById("grade")

function alert(){
    alert("")
}

button.addEventListener("click", ()=>{

    console.log(english.value, math.value, physics.value, chemistry.value, computer.value);
    if(english.value==""){
        english.value = 0
    }
    if(math.value ==""){
        math.value = 0
    }
    if(physics.value ==""){
        physics.value = 0
    }
    if(chemistry.value==""){
        chemistry.value = 0
    }
    if(computer.value==""){
        computer.value = 0
    }

    if((english.value>100 || english.value<0) || (math.value>100 || math.value<0) || (physics.value<0 || physics.value>100) || (chemistry.value>100 || chemistry.value<0) || (computer.value>100 || computer.value<0) ){
        alertt.style.display = "block"
        return 
    } else{
        alertt.style.display = "none"
    }

    let tot = CalculateTotal(english.value, math.value, physics.value, chemistry.value, computer.value)
    let avg = parseFloat(tot/5).toFixed(3)

    if(english.value<=35 || math.value<=35 || physics.value<=35 || chemistry.value<=35 || computer.value<=35){
        grade.innerHTML = `You got F grade` 
    }else{
        let gd = GetGrade(avg)
        grade.innerHTML = `You got ${gd} grade` 
    }
 
    total.innerHTML = `Total Marks: ${tot}`
    average.innerHTML = `Your average marks are: ${avg}`
})

function CalculateTotal(sub1, sub2, sub3, sub4, sub5){
    let totalMarks = parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5)
    return totalMarks
}
function GetGrade(avg){
    if(avg>=90){
        return "A"
    } else if(avg>=80 && avg<90){
        return "B"
    } else if(avg>=70 && avg<80) {
        return "C"
    } else if(avg>=60 && avg<70){
        return "D"
    } else {
        return "F"
    }
}

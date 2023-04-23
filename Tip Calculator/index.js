const tip_button = document.querySelectorAll(".btn")
const bill = document.querySelector(".bill")
const people = document.querySelector("#people")
const tipAmount = document.querySelector("#tipAmount")
const perPerson  = document.querySelector("#total-per")
const resetbtn = document.querySelector("#resetbtn")
var tip=0;
var billAmt=0;
var totalPeople=1

resetbtn.addEventListener('click',()=>{
   tipAmount.innerText=0
   perPerson.innerText=0
   people.value=0;
   bill.value=0;
})

bill.addEventListener('change',(e)=>{

    
    if(e.target.value!=""){
        billAmt=e.target.value
        
    }
})
people.addEventListener('change',(e)=>{
    totalPeople=e.target.value
    console.log(totalPeople)
})


for(let i=0;i<tip_button.length;i++){
    tip_button[i].addEventListener('click',(e)=>{
        tip_button[i].addc
        tip=e.target.value
        console.log(totalPeople)
        tipAmount.innerText="$"+(((Number(billAmt)*Number(tip))/100)/Number(totalPeople)).toFixed(2)
        perPerson.innerText="$"+((Number(billAmt)+(Number(billAmt)*Number(tip))/100)/Number(totalPeople)).toFixed(2)
    })
}
const btn=document.getElementById("btn");
const bmiInput=document.getElementById("bmi-result");
const weightCondition =document.getElementById("weight-condition")

function calculateBMI(){
    
const heightValue=document.getElementById("height").value /100;
const weightValue=document.getElementById("weight").value;


const bmiValue = weightValue /(heightValue*heightValue);
bmiInput.value = bmiValue;

if(bmiValue < 18.5){
      weightCondition.innerText ="under weight";
}
else if (bmiValue >= 18.5 && bmiValue <=24.9){
    weightCondition.innerText ="Normal weight";
}
else if( bmiValue >25 && bmiValue <=29.9){
    weightCondition.innerText ="over weight";
}
else if ( bmiValue<=30){
    weightCondition.innerText ="obesity";
}
        

}




btn.addEventListener("click",calculateBMI)
let button = document.querySelector("#butt");
let output=document.querySelector("#state");
button.addEventListener("click",function(){
   let input1=document.querySelector("#inp1").value;
   let input2=document.querySelector("#inp2").value;
  let bmi=(input1) / ((input2*input2))*10000;
  if(bmi <= 18.4) {
     output.textContent="Your BMI is "+bmi+", which means your UnderWeight, so eat litle more but healthy food 🍲🥗🥙";
  }
  else if(bmi >= 18.5 && bmi <= 24.9) {
   output.textContent="Your BMI is "+bmi+", which means your NormalWeight, 😍😍";
  }
  else if(bmi >= 25 && bmi <= 29.9) {
   output.textContent="Your BMI is "+bmi+", which means your OverWeight, do some exercise 🤸‍♂️";
  }
  else if (bmi >= 30) {
   output.textContent="Your BMI is "+bmi+", which means your Obese, do some exercise 🏋️" ;
  }
  else {
   output.textContent="Please enter your weight and height ✌️✌️";
  }

});
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%" , "*" , "/" , "-" , "+" , "="];
let output="";

const calculate = (btnValue) =>  
{
	if(btnValue == "=" && btnValue !== " ")
	{
		//If output has % replace with /100 before evaluating.
		output=eval(output.replace("%","/100"));
	}
	else if(btnValue === "AC")
	{
		output=""
	}
	else if(btnValue=== "DEL")
	{
		//If del button is clicked, remove the last character from the output.
		output=output.toString().slice(0,-1);
	}
	else
	{
		//if output is empty and button is specialChars then return.
		if(output === "" && specialChars.includes(btnValue)) return;
		output += btnValue;
	}
	display.value=output;
}
buttons.forEach(button =>{

	button.addEventListener("click",(e) => calculate(e.target.dataset.value));

});
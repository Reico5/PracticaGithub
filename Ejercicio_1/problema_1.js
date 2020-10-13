var proces = document.getElementById("process");

proces.addEventListener("click",Volumen);

function Volumen() 
{
	var radio = document.getElementById("radio").value;
	var vol = (4.0/3)*Math.PI*Math.pow(radio,3);
	var resultado = document.getElementById("resultado");

	resultado.value=vol;
}
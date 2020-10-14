var proces = document.getElementById("process");

proces.addEventListener("click",punto)

function punto()
{
	var punX = document.getElementById("puntoX").value;
	var punY = document.getElementById("puntoY").value;
	var resultado = document.getElementById("resultado");

	
	if (punX==0 && punY==0) 
	{
		resultado.value = "Sobre El Origen";
	}

	else if (punX>0 && punY>0) 
	{
		resultado.value="Q1";		
	}
	
	else if (punX<0 && punY>0) 
	{
		resultado.value="Q2";
	}
	
	else if (punX<0 && punY<0) 
	{
		resultado.value="Q3";
	}
	
	else if (punX>0 && punY<0) 
	{
		resultado.value="Q4";
	}

	else if (punY==0) 
	{
		resultado.value = "Sobre La Linea Y";
	}

	else if (punX==0) 
	{
		resultado.value = "Sobre La Linea X";
	}

}
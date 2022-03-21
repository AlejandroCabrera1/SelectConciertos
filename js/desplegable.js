var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]

function desplegable(){
	var padre=document.getElementsByTagName("div")[0];
	var obj_select=document.createElement("select");
	padre.appendChild(obj_select);
	var opcion_selected=document.createElement("option");
	opcion_selected.innerHTML="Seleccione una opción"
	obj_select.appendChild(opcion_selected);
	for (i=0; i<opciones_conciertos.length; i++){
		var opcion=document.createElement("option");
		opcion.innerHTML=opciones_conciertos[i].nombre;
		opcion.value=opciones_conciertos[i].valor;
		obj_select.appendChild(opcion);
	}
	obj_select.setAttribute("onchange", "cambio();");
}

function cambio(){
	var padre_parrafo=document.getElementsByTagName("div")[1];
	var obj_select=document.getElementsByTagName("select")[0];
	if(!document.getElementsByTagName("p")[0]){
		for (i=0; i<opciones_conciertos.length; i++){
			if(obj_select.value==opciones_conciertos[i].valor){
				var parrafo=document.createElement("p");
				padre_parrafo.appendChild(parrafo);
				parrafo.innerHTML="El concierto de "+opciones_conciertos[i].nombre+" vale "+opciones_conciertos[i].precio+" €";
			}
		}
	}
	else{
		document.getElementsByTagName("p")[0].remove();
		for (i=0; i<opciones_conciertos.length; i++){
			if(obj_select.value==opciones_conciertos[i].valor){
				var parrafo=document.createElement("p");
				padre_parrafo.appendChild(parrafo);
				parrafo.innerHTML="El concierto de "+opciones_conciertos[i].nombre+" vale "+opciones_conciertos[i].precio+" €";
			}
		}
	}

	
}
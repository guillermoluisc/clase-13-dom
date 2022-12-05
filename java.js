//se puede acceder poneindo el elemento por ejemplo h1
//pero olo agarra el primero
//en caso de quere tomar uno en esecifico se puede hacer por id o clase
//por lo que me dicen solo siempre toma el primero

let h1= document.querySelector("#hola")
h1
h1.style.backgroundColor="red"

let h2= document.querySelector("#hola2")
h2
h2.style.backgroundColor="blue"


//
//ver como se usa el classlist, pero basicamente lo que hace
//es agregarle una clase al elemento por ejemplo h1.classList.add("holanda")
//siendo holanda una clase creada  en un archivo css
//el toggle evalua el elemento si tiene o no la clase, si la tiene se la quira, sino se la agrega
//ademas retorna true o false
//

//esta es la manera que encontré de hacer que todos los objetos con la misma clase
//cambien de color o cualquier cosa.
let h3= document.querySelectorAll(".holanda")
h3
for (let x=0;x<h3.length;x++){
	h3[x].style.backgroundColor="lime"
}

//Manipulacion de texto y contenido

let nuevoh3=document.querySelector("h3")
nuevoh3.textContent="modificado"

//iner html modifica el propio HTML
nuevoh3.innerHTML="<h1> hola </h1>"


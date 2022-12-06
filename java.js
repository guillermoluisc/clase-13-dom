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



//Manipulacion de texto y contenido

let nuevoh3=document.querySelector("h3")
nuevoh3.textContent="modificado"

//iner html modifica el propio HTML
nuevoh3.innerHTML="<h1> hola </h1>"


//get y set atribute para obtener y cambiar el valor  atributos4
//primero se debe hacer cargar el elemento en una varibale

//let botonGoogle = document.querySelector("#btn-google");

//botonGoogle.getAttribute("href") // Nos muestra cuál es el valor del atributo href.

//botonGoogle.setAttribute("href", "http://www.plataforma5.la") // Cambia el valor del atributo href por el valor que se pasa como segundo Parámetro.

//esta es la manera que encontré de hacer que todos los objetos con la misma clase
//cambien de color o cualquier cosa.
let h3= document.querySelectorAll(".holanda")
h3
for (let x=0;x<h3.length;x++){
	h3[x].style.backgroundColor="lime"
}

//asi comienza de 1 hasta el length
// let h3= document.querySelectorAll(".holanda")
// h3
// for (let x=1;x<(h3.length)+1;x++){
// 	h3[x-1].textContent=h3[x-1].textContent+x
// }

//crear, agrgar y mostrar lemento
let hf=document.createElement("h2")
hf.textContent="plataforma5"
let div=document.createElement("div")
div.appendChild(hf)
document.body.appendChild(div)
document.body.removeChild(div)



//hasta acá solo con el cambio de variable
let source=document.querySelector("#source")
let textsource=source.textContent
let destintion=document.querySelector("#destination")
source.textContent=destintion.textContent
destintion.textContent=textsource


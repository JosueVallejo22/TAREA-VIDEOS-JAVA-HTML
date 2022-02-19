const contenido = document.getElementById("contenido");
contenido.innerHTML = "Hola Programadores";


let Nombre = "Josue Vallejo";
let edad = 19;



const COLOR_ROJO = "#FF0000"

let resultado = "Nombre: "+ Nombre;

console.log(Nombre);

Nombre= "Josue";

console.log(Nombre);

alert (resultado);


if(edad>18){
    alert("Puedes entrar en la disco");
}else if(edad>13){
    alert("Puedes entrar con un adulto");
}else{
    alert("No puedes entrar a la disco");
}

let edades = [23, 45, 2, 42];

console.log(edades[0])

addContent("<h2>"+Nombre+"</h2><h3>"+edad+"</h3>");


for (let i = 0; i<=edades.length; i++){
    contenido.innerHTML += "<h3> La edad es de: "+edades[i]+" años</h3>"
}

function addContent(newContent){
    console.log(newContent)
    contenido.innerHTML += newContent;
}

addContent("Hola programador")
/* for (let i = 11; i > 0; i--) {
    alert(i);    
} */

/* let i=10;
do {    
    alert("Estoy en el bucle");
    
} while (i>=10); */
/* document.getElementById('Boton').addEventListener('click', function() {
    mostrarDatos();
}); */
/* */
function Pulsar() {

    var name=document.getElementById("nombre").value;
    var msg="Tu nombrE es " +name;
    document.getElementById("JS-Container").textContent = msg;
}

let elements=document.querySelectorAll("li");
let tam=20;

for (let i of elements){
    tam+=5;
    i.style.fontSize=tam+"px";   
}
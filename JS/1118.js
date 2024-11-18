/* let a=confirm("Deseas salir?");
console.log(a);
/* if (a!=2) {
    alert("Has pulsado Aceptar");
} else {
    alert("Has pulsado Cancelar"); 
}  
while (!a) {
 
    a=confirm("Deseas salir?");   

} */

/*     let number=parseInt(prompt("Dime un valor"));
    while (number!=0) {
        console.log("El valor es "+number);
        number=parseInt(prompt("Dime un valor"));
    } */
console.log("Estoy fuera de la funcion");

function ExecuteJS() {
    console.log("Estoy dentro de la funcion");
    let a=parseInt(document.getElementById("aField").value);
    let b=parseInt(document.getElementById("bField").value);
    let suma=a+b;
    alert("El valor de la suma es "+suma);
}
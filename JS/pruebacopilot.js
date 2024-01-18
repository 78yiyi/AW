//Quiero hacer un programa que pida tu edad y te diga si eres mayor de edad o no. Si no te da la edad, el programa te dice que no te entiende.

//1. Pido la edad
//2. Compruebo que la edad es un número
//3. Si la edad es menor de 18, digo que no es mayor de edad
//4. Si la edad es mayor de 18, digo que es mayor de edad
//5. Si la edad es 18, digo que es mayor de edad

//1. Pido la edad
var age = prompt("¿Cuál es tu edad?");

//2. Compruebo que la edad es un número
if (isNaN(age)) {
  alert("No te entiendo");
} else {
  //3. Si la edad es menor de 18, digo que no es mayor de edad
  if (age < 18) {
    alert("Eres menor de edad");
  } else {
    //4. Si la edad es mayor de 18, digo que es mayor de edad
    if (age > 18) {
      alert("Eres mayor de edad");
    } else {
      //5. Si la edad es 18, digo que es mayor de edad
      alert("Tienes 18 años");
    }
  }
}
















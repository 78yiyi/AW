function Check() {
    const age=document.getElementById("AgeField").value;
/*     if (age>=18) {
        alert("Adelante");
    }else{
        alert("Acceso prohibido");
    } */
   document.getElementById("MessageDiv").innerHTML="<H1>La edad es "+age+"</H1>";
   document.getElementById("MessageDiv").style.backgroundColor="blue";
}
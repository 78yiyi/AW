const btn=document.querySelector("#btnSubmit");
btn.addEventListener('click',() => {
    //let name=document.getElementById("NameField").value;
    const name=document.querySelector("#NameField");
    document.getElementById("Result").innerHTML="<H1>"+name.value+"</H1>";    
})

function ShowName(){
    /*alert("Entró");*/
    const name=document.getElementById("NameField").value;
    document.getElementById("Result").innerHTML="<H1>"+name.value+"</H1>";
    //document.getElementById("Result").textContent=name;
    let c=confirm("Deseas seguir");
    if (!c) {
        alert("Has pulsado finalizar");
    } else {
        alert("Has pulsado seguir");
    }
    while (c) {
        c=confirm("Deseas seguir");
    }    
}

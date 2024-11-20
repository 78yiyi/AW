
    const InputRojo=document.getElementById("RedField");
    const TextoRojo=document.getElementById("RedText");
    const InputVerde=document.getElementById("GreenField");
    const TextoVerde=document.getElementById("GreenText");
    const InputAzul=document.getElementById("BlueField");
    const TextoAzul=document.getElementById("BlueText");        

    let rojo=InputRojo.value;
    let verde=InputVerde.value;
    let azul=InputAzul.value;


    TextoRojo.innerText=InputRojo.value;
    TextoVerde.innerText=InputVerde.value;
    TextoAzul.innerText=InputAzul.value;

InputRojo.addEventListener('change',()=>{
    rojo=InputRojo.value;
    TextoRojo.innerText=rojo;
    ActualizarColor(rojo, verde,azul);
})

InputVerde.addEventListener('click',()=>{
    verde=InputVerde.value;
    TextoVerde.innerText=verde;  
    ActualizarColor(rojo, verde,azul);

})

InputAzul.addEventListener('click',()=>{
    azul=InputAzul.value;
    TextoAzul.innerText=azul;     
    ActualizarColor(rojo, verde,azul);

})

function ActualizarColor(rojo, verde, azul){
    const colorRGB=`rgb(${rojo},${verde},${azul})`
    document.body.style.backgroundColor=colorRGB;

}


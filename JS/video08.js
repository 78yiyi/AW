
const myBtn=document.querySelector("button");
myBtn.addEventListener("click",()=>{
    const userName=document.querySelector("#NameField");
    document.querySelector("div").innerText=userName.value;
    
})

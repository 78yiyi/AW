function ChgColor() {
    alert("hola");
    const red=document.getElementById("RedField").value;
    const blue=document.getElementById("RedField").value;
    const green=document.getElementById("RedField").value;

    document.getElementById("ColorDiv").style.backgroundColor="RGB(${red},${blue},${green})";
}
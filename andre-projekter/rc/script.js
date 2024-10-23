//det her er kode til at lave nogle små animationer

var takst = document.getElementById("antalButikker")
var tal = 0;

setInterval(myTimer, 10);
function myTimer(){
    if(tal > 160){
        return
        console.log("erer")
    }else{
    takst.innerHTML = tal
    tal ++
    }
}
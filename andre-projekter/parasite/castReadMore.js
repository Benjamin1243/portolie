const readMoreButoons = document.querySelectorAll(".moreLess")
window.addEventListener("resize", update)
//denne kode kører kun hvis skærm størrelsen er størrer end 400px
if(screen.width < 400){
   //hvis screen width'en er under 400 så skal "read more" elementerne vises og den ekstra tekst skal skjules

console.log(readMoreButoons)

for(let i = 0; i< readMoreButoons.length; i++){
    readMoreButoons[i].addEventListener("click", readMore)
    //giver alle ekstra tekst elementerne, display none
    readMoreButoons[i].previousElementSibling.style.display = "none"
}


function readMore(){
    const gruppe = this.previousElementSibling
    console.log(gruppe.style.display)
    //nu tjekker jeg om teksten i forvejen er synlig
    if(gruppe.style.display == "none"){
    //hvis den ikke er vist i forvejen gør jeg den til display block
    gruppe.style.display = "block"
    //nu ændre jeg tekst på read more knapper til read less
    this.textContent = "read less..."
    this.style.fontWeight = 600
}else{
    gruppe.style.display = "none"
    this.textContent = "read more..."
    this.style.fontWeight = 400
}

}}else{
    for(let i = 0; i< readMoreButoons.length; i++){
        readMoreButoons[i].style.display = "none"
    }
}

function update(){
 if(screen.width > 399){
    for(let i = 0; i< readMoreButoons.length; i++){
            readMoreButoons[i].style.display = "none"
            //giver alle ekstra tekst elementerne, display none
            readMoreButoons[i].previousElementSibling.style.display = "block"
        }
    }else{
        
        for(let i = 0; i< readMoreButoons.length; i++){
            readMoreButoons[i].style.display = "block"
            readMoreButoons[i].textContent = "read more..."
            readMoreButoons[i].style.fontWeight = 400
            readMoreButoons[i].addEventListener("click", readMore)
            //giver alle ekstra tekst elementerne, display none
            readMoreButoons[i].previousElementSibling.style.display = "none"
        }
    }
}
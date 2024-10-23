const menuItems = document.querySelectorAll("nav ul li")
const menuButton = document.querySelector("i.menuBarIkon")
const menu = document.querySelector("header nav")
let tal = 0

window.addEventListener("resize", windowUpdate)

//dette er update funktionen som kører hver gang der bliver trukket i vinduet
function windowUpdate(){
    if(window.innerWidth >400){
        menuItems.forEach(element => {    
       element.classList.remove("placeLi")
        });
       
    }else{
        menuItems.forEach(element => {    
            element.classList.add("placeLi")
            
    })
}}


if(window.innerWidth < 401){
menu.classList.toggle("invisible")
menuButton.addEventListener("click", showHideMenu)

//denne kode bruges til at placere menu punkterne rigtigt på mobil versionen
menuItems.forEach(element => {
    element.classList.add("placeLi")
;
});

function showHideMenu(){
    menu.classList.toggle("invisible")  
    menuButton.classList.toggle("fa-x")  
    menuButton.classList.toggle("fa-bars")  
}}
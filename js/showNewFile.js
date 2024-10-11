const project = document.querySelectorAll(".project")


project.forEach(element => {
    element.addEventListener("click", showNewFile )
   
   
  
});

function showNewFile(){
    const link = this.querySelector(".project__link")
   const linkhref = link.getAttribute("href");
   console.log(link)
    window.open(linkhref)
}
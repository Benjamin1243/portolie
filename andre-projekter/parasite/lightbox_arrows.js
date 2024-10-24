// JAVASCRIPT GALLERI MED LIGHTBOX OG PILE
if(screen.width > 760){
// LIGHTBOX
let index;
const thumbs = Array.from(document.querySelectorAll(".thumbs"));
const mask = document.querySelector("#mask");
const bigImg = document.querySelector("#bigImg");
const figcaption = document.querySelector("#figcaption");
const xmark = document.querySelector("#xmark");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", showLightbox);
}

// åben lightbox ved tryk på et billede
function showLightbox() {
    index = thumbs.indexOf(this);
    thisSrc = this.getAttribute("src");
    thisAlt = this.getAttribute("alt");
    bigSrc = thisSrc.replace("small", "large");
    bigImg.setAttribute("src", bigSrc);
    bigImg.setAttribute("alt", thisAlt);
    figcaption.textContent = thisAlt;
    mask.style.display = "grid";
}

// luk lightbox ved tryk på krydset
xmark.addEventListener("click", hideLightbox);

function hideLightbox() {
    mask.style.display = "none";
}

// skift foto ud fra tryk på pile
prev.addEventListener("click", changePhoto);
next.addEventListener("click", changePhoto);

function changePhoto() {
    if (this.getAttribute("id") !== "prev") {
        if (index < thumbs.length - 1) {
            index++
        } else {
            index = 0;
        }
    } else {
        if (index > 0) {
            index--;
        } else {
            index = thumbs.length - 1;
        }
    }
    let smallSrc = thumbs[index].getAttribute("src");
    let smallAlt = thumbs[index].getAttribute("alt");
    let bigSrc = smallSrc.replace("small", "large");
    bigImg.setAttribute("src", bigSrc);
    bigImg.setAttribute("alt", smallAlt);
    figcaption.textContent = smallAlt;
}

}//if end
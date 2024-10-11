


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    document.querySelector('.navList').classList.toggle('navList--scroll', window.scrollY > 40)
})
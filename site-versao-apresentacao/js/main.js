let btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener("click", ()=> {
    let menuMobile = document.getElementById('nav-menu')
    menuMobile.classList.toggle('inative')
    btnMobile.classList.toggle('active')
    
})




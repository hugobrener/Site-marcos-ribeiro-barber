foto = document.getElementsByClassName("bg-intro")
fotoBG = Array.from(foto)

function slide() {
    
    
    console.log(fotoBG)
    fotoBG.forEach(element => {
      setTimeout(element.setAttribute('id','selected'), 5000)
         
    });
    
}



window.addEventListener("load", slide)
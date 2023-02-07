//Top-bar

//Menu Hamburguer
let menu = document.querySelector('menu.flex')
let header = document.getElementsByTagName('header')[0]
let main = document.getElementsByTagName('main')[0]
let topbar = document.getElementsByClassName('top-bar')[0]

//Adiciona o icone do mapa aos icones da direita quando a tela se torna menor que 750px


let end = document.getElementById("map")
let rightSide  = document.getElementsByClassName('right')[0]
let backup = rightSide.innerHTML

let a = '<a target="_blank" href="https://goo.gl/maps/2m59dw9WSFD6tpeD8">     <img src="../../assets/imgs/maps-pin-black-icon.svg" id="pin" alt="Icon Endereço"></img></a>'

window.addEventListener('load', ()=>{
    mediaQueries()
})

function mediaQueries(){
        
    console.log(rightSide.children.length)

    if(document.body.clientWidth < 750){
    
        if(rightSide.children.length <= 3){
            rightSide.innerHTML += a
            end.style.display = 'none'
        }
        
    }

    else{
        if(rightSide.children.length > 3){
            console.log(rightSide.innerHTML)
            rightSide.innerHTML = backup

            end.style.display = 'flex'
        }
    }
    
    //Menu Hamburguer

    if(document.body.clientWidth < 645){
        logo = document.getElementById('logo')
        logo.src = "../assets/imgs/Logo-sem-legenda-100.png"
        header.parentElement.insertBefore(menu, main)
    }
    else{
        logo.src = "../assets/imgs/logo-3eengenharia-300.png"
        header.appendChild(menu)
    }

    if(document.body.clientWidth < 450){
        document.body.appendChild(topbar)
        topbar.style.display = 'flex'
    }

    else{
        document.body.insertBefore(topbar, header)
    }

}

function showMenu(){
    console.log(menu.classList[0])


    if(menu.classList[0] == 'flex' && menu.parentElement != header){
        console.log('teste')
        menu.classList.remove('flex')
    }
    else{
        menu.classList.add('flex')
    }

}

document.body.onresize = mediaQueries




    
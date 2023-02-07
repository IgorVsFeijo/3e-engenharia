let controls = document.getElementsByClassName('control')
let controlArray = []
for (item of controls){
    controlArray.push(item)
}
let currentItem = 0
let content = document.querySelectorAll(".content article")
let parent = document.getElementsByClassName('content')[0]


controlArray.forEach((control)=>{
    control.addEventListener("click", (arrow)=>{
        a = arrow.target
        isLeft = a.classList.contains('arrow-left')

        if(isLeft){
            currentItem--
        }
        else{
            currentItem++
        }

        if(currentItem >= content.length){
            currentItem = 0
        }
        if(currentItem < 0){
            currentItem = content.length - 1
        }

        content[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    })
})


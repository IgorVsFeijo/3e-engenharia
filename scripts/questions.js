let ul = document.getElementsByClassName('duvidas')[0].children[1]
let liArray = ul.children
let anchors = []

for(li of liArray){
    anchors.push(li.children[0])
}

anchors.forEach((a)=>{
    let aString = a.innerText.split(" ")
    let formatString = "https://wa.me/5515996356405?text="

    for(i in aString){
        formatString += aString[i]
        if(i < aString.length-1)
            formatString += "%20"
    }

    formatString.slice(-3)
    a.href = formatString
        
})
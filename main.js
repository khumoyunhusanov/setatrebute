

const right = document.querySelector(".right")
const button  = document.querySelector("button")
const btnOne = document.querySelector(".btnOne")
const btnTwo = document.querySelector(".btnTwo")
const btnThree = document.querySelector(".btnThree")
const btnFour = document.querySelector(".btnFour")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")



button.addEventListener("click", () => {
   
    let box = document.createElement("div")
    box.innerHTML = "element1 "
    
    btnOne.prepend(box)
    btnOne.style.backgroundColor = "blue"
    btnOne.style.color = "black"
    console.log(box);
    
})


btn2.addEventListener("click", () => {
    let box = document.createElement("div")
    box.innerHTML = "element2 "
    
    btnTwo.prepend(box)
    btnTwo.style.backgroundColor = "blue"
    btnTwo.style.color = "back"
    console.log(box);
})


btn3.addEventListener("click", () => {
    let box = document.createElement("div")
    box.innerHTML = "element2 "
    
    btnThree.prepend(box)
    btnThree.style.backgroundColor = "blue"
    btnThree.style.color = "black"
    console.log(box);
})


btn4.addEventListener("click", () => {
    let box = document.createElement("div")
    box.innerHTML = "element2 "
    
    btnFour.prepend(box)
    btnFour.style.backgroundColor = "blue"
    btnFour.style.color = "black"
    console.log(box);
})

button.onmouseenter = () => {
   button.style.backgroundColor = "lawngreen"
   button.style.color = "red"
}

button.onmouseleave = () => {  
    button.style.backgroundColor = "#fff"
    button.style.color = "black"
}


btn2.onmouseenter = () => {
    btn2.style.backgroundColor = "#7aeb45"
    btn2.style.color = "red"
 }
 
 btn2.onmouseleave = () => {   
    btn2.style.backgroundColor = "#fff"
    btn2.style.color = "black"
 }


btn3.onmouseenter = () => {
    btn3.style.backgroundColor = "#7aeb45"
    btn3.style.color = "red"
 }
 
 btn3.onmouseleave = () => {
    btn3.style.backgroundColor = "#fff"
    btn3.style.color = "black"
 }



btn4.onmouseenter = () => {
    btn4.style.backgroundColor = "#7aeb45"
    btn4.style.color = "red"
 }
 
 btn4.onmouseleave = () => {   
    btn4.style.backgroundColor = "#fff"
    btn4.style.color = "black"
 }
















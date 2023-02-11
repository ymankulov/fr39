// DOM - Document object model
//
// console.log(document) //- html
//
// const title = document.getElementsByClassName("title")
// console.log(title)
// console.log(title[1])
// console.log(title[2])
// const button = document.getElementById("btn")
// console.log(button)
// const subtitle = document.getElementsByTagName("p")
// console.log(subtitle)
// console.log(subtitle[1])
//
// // querySelector:
// const element = document.querySelector("#btn")
// console.log(element)
// const sun = document.querySelector(".title")
// console.log(sun)
// const tag = document.querySelector("p")
// const tagAll = document.querySelectorAll("p")
// console.log(tag)
// console.log(tagAll)
// const input = document.querySelector("input[name=search]")
// console.log(input)
// const inp = document.querySelector("input[type=password]")
// console.log(inp)




const title = document.getElementById("title")
title.style.color = "red"
title.style.textAlign = "center"
title.style.fontSize = "50px"
title.style.fontFamily = "sans-serif"
title.style.fontWeight = "900"
title.style.background = "yellow"
console.log(title)

const btn = document.querySelector(".btn")
btn.style.padding = "15px 50px"
btn.style.fontSize = "18px"
btn.style.color = "white"
btn.style.background = "red"
btn.style.border = "2px solid blue"
btn.style.borderRadius = "13px"
btn.style.cursor = "pointer"
btn.style.boxShadow = "15px 0 10px 0 rgba(0,0,0,0.2)"
console.log(btn)
const input1 = document.querySelector("input[type=text]")
input1.placeholder = "Search"
input1.style.width = "200px"
input1.style.height = "30px"
input1.style.outline = "none"
input1.style.border = "2px solid red"
input1.style.borderRadius = "10px"
input1.style.color = "red"
input1.style.paddingLeft = "15px"
input1.style.background = "pink"
input1.style.margin = "20px 0"
console.log(input1)
const input2 = document.querySelector("input[type=password]")
console.log(input2)

const navbar = document.querySelector(".navbar")
navbar.style.display = "flex"
navbar.style.alignItems = "center"
navbar.style.justifyContent = "center"
navbar.style.flexDirection = "column"

const input3 = document.querySelector("input[type=password]")
input3.placeholder = "password"
input3.style.width = "200px"
input3.style.height = "30px"
input3.style.outline = "none"
input3.style.border = "2px solid red"
input3.style.borderRadius = "10px"
input3.style.color = "blue"
input3.style.paddingLeft = "15px"
input3.style.background = "yellow"

const text = document.querySelectorAll("p")
text[0].style.color = "red"
text[0].style.fontSize = "20px"
text[0].style.background = "green"
text[1].style.color = "#148"
text[1].style.fontSize = "20px"
text[1].style.background = "#183"
text[2].style.color = "black"
text[2].style.fontSize = "20px"
text[2].style.background = "#189"



















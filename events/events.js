// // events
//
// // textContent
// // innerHtml
// // innerText
// // click
// // mouseover
// // mouseout
// // change
// // keydown
// // keyup
//
// const btn = document.querySelector(".btn")
// const sub = document.querySelector(".subtitle")
// const title = document.querySelector("#title")
// const lor = document.querySelector("h4")
// lor.style.transform = "scale(0.4)"
// lor.style.textAlign  = "center"
// lor.style.transition = "2s"
//
// title.style.textAlign = "center"
// btn.style.padding = "10px 40px"
// title.addEventListener("mouseover", () => {
//     title.style.background = "yellow"
//     title.style.color = "red"
//     btn.style.marginTop = "100px"
//     btn.style.transition = ".4s"
//     btn.innerHTML = "fr39"
//     lor.style.transform = "scale(1.2)"
//     lor.textContent = "Motion Web"
//     // sub.innerHTML = "<h1>lorem......</h1>"
//     // sub.textContent = "<h1>lorem......</h1>"
//     // sub.innerText = "<h1>lorem......</h1>"
// })
// title.addEventListener("mouseout", () => {
//     title.style.background = "none"
//     title.style.color = "black"
//     btn.style.marginTop = "0"
//     btn.style.transition = ".4s"
//     btn.innerHTML = "click"
//     lor.style.transform = "scale(0.4)"
// })
// // addEventListener()
// btn.addEventListener("click", () => {
//     btn.style.background = "red"
//     sub.style.color = "red"
//     sub.style.marginLeft = "100px"
// })
//
// const input = document.querySelector("input[type=text]")
// //
// // input.addEventListener("change", (e) => {
// //     console.log(input.value)
// // })
//
// input.addEventListener("keydown", (e) => {
//     console.log(e.key)
// })
//
// // input.addEventListener("keyup", (e) => {
// //     if (e.value === "motion" && e.key === "Enter") {
// //         console.log("avatar")
// //     }
// // })
//
//
//////////////////////////////////////////////
const global = document.querySelector(".blocks")
const bts = document.querySelectorAll(".btn1")
const block = document.querySelectorAll(".box")
global.style.display = "flex"
global.style.alignItems = "center"
global.style.justifyContent = "center"
bts[0].style.padding = "10px 30px"
bts[1].style.padding = "10px 30px"
bts[1].style.margin = "0 10px"
bts[2].style.padding = "10px 30px"
//
bts[0].addEventListener("click", () => {
    block[0].style.width = "100px"
    block[0].style.height = "100px"
    block[0].style.border = "2px dashed gray"
    block[0].style.marginTop = "10px"
    block[0].style.transform = "scale(1.1)"
    block[0].style.transition = "2s"
})
bts[1].addEventListener("click", () => {
    block[1].style.width = "100px"
    block[1].style.height = "100px"
    block[1].style.border = "2px dashed gray"
    block[1].style.marginTop = "10px"
    block[1].style.transform = "scale(1.1)"
    block[1].style.transition = "2s"
})
bts[2].addEventListener("click", () => {
    block[2].style.width = "100px"
    block[2].style.height = "100px"
    block[2].style.border = "2px dashed gray"
    block[2].style.marginTop = "10px"
    block[2].style.transform = "scale(1.1)"
    block[2].style.transition = "2s"
})


let anchor1 = document.querySelector('.link1')
anchor1.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})


let anchor2 = document.querySelector('.link2')
anchor2.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})

let anchor3 = document.querySelector('.link3')
anchor3.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})

let anchor4 = document.querySelector('.link4')
anchor4.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})
let anchor5 = document.querySelector('.link5')
anchor5.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})






let SlideELs = document.querySelectorAll(".images-grid .image"),
    navigationLi = document.querySelectorAll(".navigation li"),
    Next = document.querySelector("#next"),
    Prev = document.querySelector("#prev")

let current = 0
const NextSlide= ()=>{
    if(current == SlideELs.length - 1){
        current = 0
        SlideELs[SlideELs.length - 1].classList.remove("active")
        SlideELs[current].classList.add("active")
    }
    else {
        SlideELs[current].classList.remove("active")
        SlideELs[current+1].classList.add("active")
        current++
    }   
    UpdateNavCurrent()
}



const PrevSlide= ()=>{
    if(current == 0){
        current = SlideELs.length - 1
        SlideELs[0].classList.remove("active")
        SlideELs[SlideELs.length - 1].classList.add("active")
    }
    else {
        SlideELs[current].classList.remove("active")
        SlideELs[current-1].classList.add("active")
        current--
    }
    UpdateNavCurrent()
}


const UpdateNavCurrent = ()=>{
    navigationLi.forEach(navli =>{
        navli.classList.remove("active")
    })
    navigationLi[current].classList.add("active")
}


let Timer = 2000 // 2000ms ==> 2s
setInterval(NextSlide,Timer)
Next.addEventListener("click" , NextSlide)
Prev.addEventListener("click" , PrevSlide)
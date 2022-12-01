
let mobileBtn = document.querySelector(".mobile-btn")

const mobileBtnFunc = (defaultClassName, showClassName) =>{
let menu = document.querySelector(`.${defaultClassName}`)

mobileBtn.addEventListener("click", ()=>{
    if(menu.className.includes(showClassName)){
        menu.className = defaultClassName
    } else{
        menu.className += ` ${showClassName}`
    }
})
}

mobileBtnFunc("header-menu", "show-menu")

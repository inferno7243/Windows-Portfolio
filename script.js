
let taskbar = document.getElementsByClassName("app1")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]


taskbar.addEventListener("click", ()=> {
    if(startmenu.style.bottom == "9dvh"){
        startmenu.style.bottom = "-90dvh"
    }
    else{
        startmenu.style.bottom = "9dvh"
    }
})

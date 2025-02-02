
let taskbar = document.getElementsByClassName("app1")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]


taskbar.addEventListener("click", ()=> {
    if(startmenu.style.bottom == "9vh"){
        startmenu.style.bottom = "-90vh"
    }
    else{
        startmenu.style.bottom = "9vh"
    }
})

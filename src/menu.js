const createMenu = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu")
    //To do 
    return menu
}

const loadMenu = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}

export default loadMenu
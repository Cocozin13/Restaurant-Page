const createHome = () => {
    const home = document.createElement("div")
    home.classList.add("home")
    //To do 
    return home
}


const loadHome = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createHome())
}

export default loadHome
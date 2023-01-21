const createHome = () => {
    const home = document.createElement("div")
    home.classList.add("home")
    
    const meowscularImg = document.createElement("img")
    meowscularImg.classList.add("meowscularImg")
    meowscularImg.src = "./images/others/meowscularChef.webp"
    meowscularImg.alt = "A Meowscular Chef Image"

    const grammeowsterImg = document.createElement("img")
    grammeowsterImg.classList.add("grammeowsterImg")
    grammeowsterImg.src = "./images/others/grammeowsterChef.webp"
    grammeowsterImg.alt = "A Grammeowster Chef Image"

    home.appendChild(createText("AMONGUS"))
    home.appendChild(meowscularImg)
    home.appendChild(grammeowsterImg)

    return home
}

const createText = (text) => {
    const para = document.createElement("p")
    para.classList.add("homeText")
    para.textContent = text
    return para
}

const loadHome = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createHome())
}

export default loadHome
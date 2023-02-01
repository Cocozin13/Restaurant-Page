const createHome = () => {
    const home = document.createElement("div")
    home.classList.add("home")
    
    const imgDiv = document.createElement("div")
    imgDiv.classList.add("imgDiv")

    const meowscularImg = document.createElement("img")
    meowscularImg.classList.add("chefImg")
    meowscularImg.src = "./images/others/meowscularChef.webp"
    meowscularImg.alt = "A Meowscular Chef Image"

    const grammeowsterImg = document.createElement("img")
    grammeowsterImg.classList.add("chefImg")
    grammeowsterImg.src = "./images/others/grammeowsterChef.webp"
    grammeowsterImg.alt = "A Grammeowster Chef Image"

    home.appendChild(createText("Welcome to the Felyne Canteen!!!"))
    home.appendChild(createText("Meet our wonderful chefs:"))
    home.appendChild(imgDiv)
    imgDiv.appendChild(meowscularImg)
    imgDiv.appendChild(grammeowsterImg)
    home.appendChild(createText("In this canteen you will be presented with the best meals;"))
    home.appendChild(createText("Either to fight some monsters or make some huge gains!!!"))

    return home
}

const createText = (text) => {
    const para = document.createElement("h2")
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
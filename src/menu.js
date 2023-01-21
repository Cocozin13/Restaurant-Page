const createMenu = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(createMenuDish(
        "Gourmet Fish",
        "amonguus",
        "fish, and other stuff"
    ))

    menu.appendChild(createMenuDish(
        "Meat Fest",
        "sussy",
        "Meat, and other stuff"
    ))

    menu.appendChild(createMenuDish(
        "Chef's Choice Platter",
        "amonguus",
        "chefs choice dish, and other stuff"
    ))

    menu.appendChild(createMenuDish(
        "Heavenly Grandma's Stew",
        "amonguus",
        "grandma stew, and other stuff"
    ))

    return menu
}

const createMenuDish = (name, description, ingredients) => {
    const dish = document.createElement("div")
    dish.classList.add("dish")

    const dishName = document.createElement("h2")
    dishName.classList.add("dishName")
    dishName.textContent = name

    const dishDescription = document.createElement("h3")
    dishDescription.classList.add("dishDescription")
    dishDescription.textContent = description

    const dishIngredients = document.createElement("p")
    dishIngredients.classList.add("dishIngredients")
    dishIngredients.textContent = ingredients

    const dishImage = document.createElement("img")
    dishImage.classList.add("dishImage")
    dishImage.src = `./images/dishes/${name}.jpg`
    dishImage.alt = `An image of the dish ${name}`

    dish.appendChild(dishName)
    dish.appendChild(dishImage)
    dish.appendChild(dishDescription)
    dish.appendChild(dishIngredients)

    return dish
}
 
const loadMenu = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}

export default loadMenu
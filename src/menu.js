const createMenu = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(createMenuDish(
        "Gourmet Fish",
        "\'Fresh fish, straight out the sea!!!\'",
        "Fish, Potatoes, Cheese, Beer, Soup, Meat"
    ))

    menu.appendChild(createMenuDish(
        "Meat Fest",
        "\'Gotta fuel the muscles with some protein!!!\'",
        "Meats, Chicken, Cheese, Shrimp, Sausage, Potatoes, Beer, Ham, Soup"
    ))

    menu.appendChild(createMenuDish(
        "Chef's Choice Platter",
        "\'If you wanna make some gains, look no further!!!\'",
        "Paelha, Meats, Shrimp, Cheese, Beer, Soup, Pineapple"
    ))

    menu.appendChild(createMenuDish(
        "Heavenly Grandma's Stew",
        "\'The best meal to prepare you for fighting some monsties!!!\'",
        "Stew, Beer, Bread, Cheese, Sausage, Soup, Shepard's Pie"
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
    dishDescription.classList.add("dishDesc")
    dishDescription.textContent = description

    const dishIngredients = document.createElement("p")
    dishIngredients.classList.add("dishIngre")
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
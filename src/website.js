import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
    const header = document.createElement('header')

    const restaurantName = document.createElement('h1')
    restaurantName.textContent = "SUSSY BAKA"

    header.appendChild(restaurantName)
    header.appendChild(createNav())
    return header
}

const createNav = () => {
    const nav = document.createElement('nav')

    const homeBtn = document.createElement('button')
    homeBtn.classList.add("navBtn")
    homeBtn.textContent = "Home"
    homeBtn.addEventListener("click", () => {
        loadHome()
    })

    const menuBtn = document.createElement('button')
    menuBtn.classList.add("navBtn")
    menuBtn.textContent = "Menu"
    menuBtn.addEventListener("click", () => {
        loadMenu()
    })

    const contactBtn = document.createElement('button')
    contactBtn.classList.add("navBtn")
    contactBtn.textContent = "Contact"
    contactBtn.addEventListener("click", () => {
        loadContact()
    })

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)

    return nav
}

const createMain = () => {
    const main = document.createElement('main')
    main.setAttribute("id", "main")
    return main
}

const createFooter = () => {
    const footer = document.createElement('footer')

    const footerText = document.createElement('h3')
    footerText.textContent = `Copyright © ${new Date().getFullYear()} Cocozin13`

    footer.appendChild(footerText)

    return footer
}

const loadWebsite = () => {
    const website = document.querySelector("#content")

    website.appendChild(createHeader())
    website.appendChild(createMain())
    website.appendChild(createFooter())

    loadHome()
}

export default loadWebsite;
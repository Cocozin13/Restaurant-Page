import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
    const header = document.createElement('header')

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add("restName")
    restaurantName.textContent = "🍴   Felyne Canteen   🍴"

    header.appendChild(restaurantName)
    header.appendChild(createNav())
    return header
}

const createNav = () => {
    const nav = document.createElement('nav')

    const homeBtn = document.createElement('button')
    homeBtn.classList.add("navBtn")
    homeBtn.classList.add("active")
    homeBtn.textContent = "Home"
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        loadHome()
        activeButton(homeBtn)
    })

    const menuBtn = document.createElement('button')
    menuBtn.classList.add("navBtn")
    menuBtn.textContent = "Menu"
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        loadMenu()
        activeButton(menuBtn)
    })

    const contactBtn = document.createElement('button')
    contactBtn.classList.add("navBtn")
    contactBtn.textContent = "Contact"
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        loadContact()
        activeButton(contactBtn)
    })

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)
    
    return nav
}

const activeButton = (btn) => {
    const buttons = document.querySelectorAll('.navBtn')

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active')
        }
    })

    btn.classList.add('active')
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
const createContact = () => {
    const contact = document.createElement("div")
    contact.classList.add("contact")
    //To do 
    return contact
}

const loadContact = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact
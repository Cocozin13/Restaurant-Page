const createContact = () => {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phone = document.createElement("h2")
    phone.classList.add("phone")
    phone.textContent = "123-456-789"
    
    const address = document.createElement("h2")
    address.classList.add("address")
    address.textContent = "Astera | | Seliana"
    
    const map = document.createElement("iframe")
    map.classList.add("map")
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46093053.21415277!2d100.24799420900298!3d-32.205414999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164dd4523c7453%3A0xb75cd5b6ef4cb58f!2sAmongus%20balls%20resuscitation%20and%20worship%20palace%20of%20worshipping%20with%20quandaildingle%20and%20enlargement%20factory!5e1!3m2!1spt-PT!2spt!4v1674255782164!5m2!1spt-PT!2spt"

    contact.appendChild(phone)
    contact.appendChild(address)
    contact.appendChild(map)

    return contact
}

const loadContact = () => {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact
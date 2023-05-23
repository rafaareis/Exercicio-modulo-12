const contactsObj = [
    {
        id: 1,
        socialNetwork: 'Facebook',
        aClass: 'facebook-link',
        href: 'https://www.facebook.com/',
        iClass: 'fa-brands fa-facebook-f fa-2xl',
        tagI: '<i class="fa-brands fa-facebook"></i>',
        alt: 'Ícone do Facebook'
    },
    {
        id: 2,
        socialNetwork: 'Instagram',
        aClass: 'instagram-link',
        href: 'https://www.instagram.com/',
        iClass: 'fa-brands fa-instagram fa-2xl',
        tagI: '<i class="fa-brands fa-instagram"></i>',
        alt: 'Ícone do Instagram'
    },
    {
        id: 3,
        socialNetwork: 'WhatsApp',
        aClass: 'whatsapp-link',
        phone: '5512982757380',
        href:'https://web.whatsapp.com/send?phone=',
        iClass: 'fa-brands fa-whatsapp fa-2xl',
        alt: 'Ícone do Whatsapp'
    },
    {
        id: 4,
        socialNetwork: 'Maps',
        aClass: 'maps-link',
        href: "https://www.google.com.br/maps/place/R.+Sen.+Manoel+Cordeiro+Vila%C3%A7a,+137+-+Vila+Alves+Dias,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09851-570/@-23.7129568,-46.5910596,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce43f79f89fa09:0x576849a3ffcef863!8m2!3d-23.7129568!4d-46.5910596!16s%2Fg%2F11c107lwrd",
        iClass: 'fa-solid fa-location-dot fa-2xl',
        endereco: 'Rua Senador Manoel Cordeiro Villaça, 137',
        bairro: 'Alves Dias',
        cidade: 'São Bernardo do Campo/SP', 
        CEP: '09851-570',
        alt: 'Ícone de Google Maps'
    },
]

let contactsSocialLinks = contactsObj.map(function(contact){
    if(contact.socialNetwork === 'Instagram' || contact.socialNetwork === 'Facebook') {
        return `
        <div class="contact">
            <li>
                <a class="${contact.aClass}" href="${contact.href}" id="${contact.socialNetwork}">
                    <i class="${contact.iClass}" alt=${contact.alt}" ></i>
                </a>
            </li>
        </div>`;
        
    }
})

document.querySelector('.social-links').innerHTML = contactsSocialLinks.join("");

let contactsMessage = contactsObj.map(function(contact){
    if(contact.socialNetwork === 'WhatsApp') {
        return `
                <div class="contact">
                    <li>
                        <a class="${contact.aClass}" href="${contact.href}${contact.phone}" id="${contact.socialNetwork}">
                            <i class="${contact.iClass}" alt=${contact.alt}" ></i>
                        </a>
                    </li>
                </div>    
                `;
    }
})

document.querySelector('.mensageiros').innerHTML = contactsMessage.join("");

let appMaps = contactsObj.map(function(contact){
    if(contact.socialNetwork === 'Maps') {
        return `
                <a href="${contact.href}" class="${contact.aClass}" id="${contact.id}">
                    <i class="${contact.iClass}" alt="${contact.alt}"></i>
                </a>
                <address>
                    <p>${contact.endereco}</p>
                    <p>${contact.bairro}</p>
                    <p>${contact.cidade}</p>
                    <p>${contact.CEP}</p>
                </address>
                 `;
    }
})

document.querySelector('.address').innerHTML = appMaps.join("");
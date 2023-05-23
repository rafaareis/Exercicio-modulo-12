const navObj = [
    {
        id: 1,
        href: 'about',
        titulo: 'Sobre Mim'
    },
    {
        id: 2,
        href: 'contact',
        titulo: 'Contato'
    },
]

const navLi = navObj.map(function(liNav){
    return `<li><a href="#${liNav.href}">&lt;${liNav.titulo}&gt;</a></li>`;
})

document.querySelector('#ulNav').innerHTML = navLi.join("");
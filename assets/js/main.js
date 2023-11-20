/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navtoggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close')

/*=============== MENU SHOE ===============*/
/* Valiadate if constant exists */
if(navtoggle){
    navtoggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Valiadate if constant exists */
if(navclose){
    navclose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEAADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the shadowHeader class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

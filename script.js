/* Loading */

window.addEventListener('load', () =>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () =>  {
        document.body.removeChild(document.querySelector(".loader"))
    })
})

/* Menu show */

const menuH = document.querySelector(".nav_toggle")
const navLinks = document.querySelector(".nav_menu")

menuH.addEventListener('click', ()=> {
    menuH.classList.toggle("mobile-menu")
    navLinks.classList.toggle('mobile-menu')
})

/* Active and remove menu */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Active  link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('mobile-menu')
    menuH.classList.toggle("mobile-menu")
}
       
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll reveal animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll home */

sr.reveal('.home_title', {})
sr.reveal('.button',{delay: 200})
sr.reveal('.homr_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/* Scroll about */

sr.reveal('.about-img', {})
sr.reveal('.about-subtitle',{delay: 200})
sr.reveal('.about-text',{delay: 400})

/* Scroll skills */

sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text',{delay: 200})
sr.reveal('.skills-data',{interval: 200})
sr.reveal('.skills-img',{delay: 400})

/* scroll work */

sr.reveal('.work-img',{interval: 200})

/* scroll contact */

sr.reveal('.contact-input',{interval: 200})


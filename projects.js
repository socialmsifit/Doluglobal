const primaryNav=document.querySelector('nav')
const navToggle=document.querySelector('.mobile-nav-toggle')


navToggle.addEventListener('click', () =>{
    const visibile =navToggle.getAttribute('aria-expanded')
    

    primaryNav.classList.toggle('active')


})

console.log('primaryNav');



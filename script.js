// ABN junction demosite

const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-links')

header.addEventListener('click', function () {
  // hamburger animation
  hamburger.classList.toggle('opened')
  // navbar collapse
  navbar.classList.toggle('opened')
  if (navbar.style.maxHeight) {
    navbar.style.maxHeight = null2
  } else {
    navbar.style.maxHeight = navbar.scrollHeight + 'px'
  }
  // nav links show or hide
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('opened')
  }
})

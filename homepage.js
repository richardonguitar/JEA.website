window.onload = function () {
  const menu_btn = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  })
}




const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function () {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function () {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("wrapper").style.top = "0";
  } else {
    document.getElementById("wrapper").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

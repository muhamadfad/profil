



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




const navCont = document.getElementById("navCont");

// buat function scroll
function scroll() {
  let calc = window.scrollY;
  if (calc > 0) {
    navCont.classList.replace("container", "container-scroll");


  } else if (calc <= 0) {
    navCont.classList.replace("container-scroll", "container");

  }
}

//panggil saat init
scroll();

// panggil saat discroll
window.onscroll = () => {
  scroll();
};

//textarea



var cols = document.getElementById("textarea");
var cls = document.getElementById("textarea");

cols.addEventListener('change', function (cols) {
  var len = cols.length;
  document.getElementById("demo").innerHTML = len;

  document.getElementById("len").innerHTML = len;
  if (len >= 30) {
    navCont.classList.replace("textarea2", "textarea1");
  }



});












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




const navCont = document.getElementById("navbar");
const wrapper = document.getElementById("wrapper");
const bar1 = document.getElementById("bar1")
const bar3 = document.getElementById("bar3")

// buat function scroll
function scroll() {
  let calc = window.scrollY;
  if (calc > 0) {
   
    wrapper.classList.replace("wrapper", "wrapper-scroll")
    document.getElementById("bar1").style.backgroundColor = "rgb(145, 134, 40)";
    document.getElementById("bar3").style.backgroundColor = "rgb(145, 134, 40)";
    document.getElementById("option").classList.add("option");


  } else if (calc <= 0) {
    
    wrapper.classList.replace("wrapper-scroll", "wrapper")
    document.getElementById("bar1").style.backgroundColor = "white";
    document.getElementById("bar3").style.backgroundColor = "white";
    document.getElementById("option").classList.remove("option");
    

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




/* */

 // Fungsi untuk meng-handle submit form
  function handleFormSubmit(event) {
    event.preventDefault(); // Menghentikan default behavior form submit

    // Gantikan URL dibawah ini dengan URL halaman tujuan setelah submit
    const redirectURL = "http://www.fadlicode.online/"; 

    window.location.href = redirectURL; // Redirect ke halaman tujuan
  }







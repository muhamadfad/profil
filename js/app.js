const wrapper = document.getElementById("wrapper");

function scroll() {
  let calc = window.scrollY;
  if (calc > 0) {
    wrapper.classList.replace("wrapper", "wrapper-scroll")
  } else if (calc <= 0) {
    
    wrapper.classList.replace("wrapper-scroll", "wrapper")
    

  }
}

//panggil saat init
scroll();
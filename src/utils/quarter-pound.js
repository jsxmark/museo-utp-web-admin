
function animateBars() {
    var line1__bars = document.querySelector(".line1__bars-menu"); 
    var line2__bars = document.querySelector(".line2__bars-menu"); 
    var line3__bars = document.querySelector(".line3__bars-menu"); 

    var container__menu = document.querySelector(".nav-sidebar-responsive"); 
  
    if (line1__bars && line2__bars && line3__bars) {
      line1__bars.classList.toggle("activeline1__bars-menu"); 
      line2__bars.classList.toggle("activeline2__bars-menu"); 
      line3__bars.classList.toggle("activeline3__bars-menu"); 

      container__menu.classList.toggle("activenav-sidebar-responsive")
    }
  }
  
  export default function hamburguesa() {
    document.querySelector(".bars__menu").addEventListener("click", animateBars);
  }
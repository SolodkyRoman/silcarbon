var links = document.getElementsByClassName("mobile__menu__link");
var mobmenu = document.getElementById('mob-menu');
var closebtn = document.getElementById('close-menu-btn');
var showbtn = document.getElementById('show-menu-btn');

// show menu
showbtn.onclick = function() {
  toggleMenu();
}

// close btn
closebtn.onclick = function() {
  toggleMenu();
}

// open/close menu
function toggleMenu() {
  mobmenu.classList.toggle('active');
  closebtn.classList.toggle('active');
  showbtn.classList.toggle('removed');
  for(var i = 0, all = links.length; i < all; i++){  
    links[i].classList.toggle('active');
    links[i].classList.toggle('removed');
    }
}

// hide/show header on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var desktopNav = document.querySelector(".mobile__btn");
  var navDisplayed = getComputedStyle(desktopNav).display;
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.transform = "translateY(0)";
    } else {
      if (navDisplayed == "flex") {
        document.getElementById("navbar").style.transform = "translateY(-100%)";
      }
    }
    prevScrollpos = currentScrollPos;
}

// show header menu on the wide screen in case it has been hidden on the small screen
window.onresize = function(event) {
  if (window.innerWidth >= 768) {
    document.getElementById("navbar").style.transform = "translateY(0)";
  };
}

// scroll into section
function scrollInto(id) {
  if (mobmenu.classList.contains('active')) {
    toggleMenu();
  }
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
  });
}
var links = document.getElementsByClassName("mobile__menu__link");
var mobmenu = document.getElementById('mob-menu');
var closebtn = document.getElementById('close-menu-btn');
var showbtn = document.getElementById('show-menu-btn');
showbtn.onclick = function() {
  toggleMenu();
}
closebtn.onclick = function() {
  toggleMenu();
}
function toggleMenu() {
  mobmenu.classList.toggle('active');
  closebtn.classList.toggle('active');
  showbtn.classList.toggle('removed');
  for(var i = 0, all = links.length; i < all; i++){  
    links[i].classList.toggle('active');
    links[i].classList.toggle('removed');
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transform = "translateY(0)";
  } else {
    document.getElementById("navbar").style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
}
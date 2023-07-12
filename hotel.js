
function dieu_huong1(){
  location.assign("detail-hotel1.html");
}
function dieu_huong2(){
  location.assign("detail-hotel2.html");
}

function dieu_huong3(){
  location.assign("detail-hotel3.html");
}

function dieu_huong4(){
  location.assign("detail-hotel4.html");
}

function dieu_huong5(){
  location.assign("detail-hotel5.html");
}

function dieu_huong6(){
  location.assign("detail-hotel6.html");
}


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});


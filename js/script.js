let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.addEventListener("DOMContentLoaded", function() {
   var countdown = document.getElementById("countdown");
   var endDate = new Date();
   endDate.setDate(endDate.getDate() + 16);  // Ajustar la fecha de finalización a 14 días a partir de la fecha actual
   
   function updateCountdown() {
       var currentDate = new Date();
       var timeRemaining = endDate - currentDate;
       
       if (timeRemaining > 0) {
           var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
           var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
           
           countdown.innerHTML = "Sitio web en construcción<br><br>";
           countdown.innerHTML += "Disponible en: " + days + " días - " + hours + " horas- " + minutes + " minutos - " + seconds + " segundos";
       } else {
           countdown.innerHTML = "¡El sitio web está habilitado!";
       }
   }
   
   setInterval(updateCountdown, 1000);
});

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});
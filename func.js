var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (10 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

  //banner
  var swiperBanner = new Swiper(".mySwiper-banner", {
    slidesPerView: 1, 
    centeredSlides: true, 
    spaceBetween: 0, 
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, 
  });

  // time_trending
  // Đặt thời gian đích mà bạn muốn đếm ngược
var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Cập nhật bộ đếm mỗi giây
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Tính toán số ngày, giờ, phút, giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Nếu đếm ngược kết thúc, dừng lại và hiển thị thông báo
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// animation
ScrollReveal().reveal('.nav_top', {
  origin:"bottom",
  distance:"15px",
  opacity:0,
});

ScrollReveal().reveal('.header', {
  origin:"bottom",
  distance:"20px",
  opacity:0,
  delay:200,
});
ScrollReveal().reveal('.section', {
  origin:"bottom",
  distance:"20px",
  opacity:0,
  delay:200,
  duration:900,
});
ScrollReveal().reveal('.footer', {
  origin:"bottom",
  distance:"20px",
  opacity:0,
  delay:200,
  duration:900,
});

//  login animation
ScrollReveal().reveal('.section_login', {
  origin:"bottom",
  distance:"20px",
  opacity:0,
  delay:200,
  duration:200,
});


// mobie_nav
const Hamberger = document.querySelector(".hamberger");
const Mobie_Nav = document.querySelector(".mobie_nav");

Hamberger.addEventListener("click", ()=> {
  Mobie_Nav.classList.toggle('mobie_nav_hide');
});

//quantity
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const quantityInput = document.querySelector('.quantity');

decrementButton.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
});

incrementButton.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
});

// detail product img
var MainImg = document.getElementById('MainImg');
var imgsmall = document.getElementsByClassName('img_small');

imgsmall[0].onclick = function (){
  MainImg.src = imgsmall[0].src;
}
imgsmall[1].onclick = function (){
  MainImg.src = imgsmall[1].src;
}
imgsmall[2].onclick = function (){
  MainImg.src = imgsmall[2].src;
}
imgsmall[3].onclick = function (){
  MainImg.src = imgsmall[3].src;
}
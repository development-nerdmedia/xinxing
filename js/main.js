$('.marquee-with-options').marquee({
  duration: 5000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

$('.marquee-with-optionsSider').marquee({
  duration: 50000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

$('.marquee-with-options2').marquee({
  duration: 25000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});
$('.marquee-with-optionsSiderFooter').marquee({
  duration: 30000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});


var swiper = new Swiper(".swiperHome", {
  loop: true,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tituloSlider = document.querySelector("section.sliderHome .container .part1 .info h1")
const tituloChinoSlider = document.querySelector("section.sliderHome .container .part1 h2")
const descripcionSlider = document.querySelector("section.sliderHome .container .part1 .info p")

swiper.on('slideChange', function () {
  var TituloDiapo = document.querySelector(".swiperHome .swiper-slide-next .info .titulo").textContent
  var tituloChinoDiapo = document.querySelector(".swiperHome .swiper-slide-next .info .tituloChino").textContent
  var descripcionDiapo = document.querySelector(".swiperHome .swiper-slide-next .info .descripcion").textContent

  tituloSlider.innerHTML = TituloDiapo
  tituloChinoSlider.innerHTML = tituloChinoDiapo
  descripcionSlider.innerHTML = descripcionDiapo
});


var swiper2 = new Swiper(".slideInHome .swiperCategoriasHome", {
  slidesPerView: 4,
  spaceBetween: 9,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.body.addEventListener("mousemove", e => {
  gsap.to(".ht-cursor", {
    x: e.clientX,
    y: e.clientY,
  })
})

$("section.productosHome .swiperCategoriasHome .swiper-slide").hover(function () {
  $(".ht-cursor").addClass("mostrar");
}, function () {
  $(".ht-cursor").removeClass("mostrar");
});

var swiper3 = new Swiper(".swiperBlogHome", {
  slidesPerView: 3.4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








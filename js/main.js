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


$(document).ready(function () {
  $("main").hover(function () {
    document.querySelector("header").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
  };
  $("footer").hover(function () {
    document.querySelector("header").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
  };
});

document.body.addEventListener("mousemove", e => {
  gsap.to(".ht-cursor", {
    x: e.clientX,
    y: e.clientY,
  })
})

$(".swiperCategoriasHome .swiper-slide").hover(function () {
  $(".ht-cursor").addClass("mostrar");
}, function () {
  $(".ht-cursor").removeClass("mostrar");
});

document.addEventListener("click", (e) => {
  if (e.target.closest("nav .part1 ul li.fex img")) {
    document.querySelector("header").classList.toggle("open")
  }
})

MyApp = {
  swiperHome: {
    init: function () {
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
    }
  },
  swiperBlogHome: {
    init: function () {
      var swiper3 = new Swiper(".swiperBlogHome", {
        slidesPerView: 3,/**3.4 */
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },
  swiperCategoriasHome: {
    init: function () {
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
    }
  },
  swiperProductosDestacados: {
    init: function () {
      var swiper4 = new Swiper(".productosDestacados .swiperProductosDestacados", {
        slidesPerView: 3,
        //spaceBetween: 9,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
}

if ($('.swiperHome').length > 0) {
  MyApp.swiperHome.init();
}

if ($('.swiperBlogHome').length > 0) {
  MyApp.swiperBlogHome.init();
}

if ($('.swiperCategoriasHome').length > 0) {
  MyApp.swiperCategoriasHome.init();
}

if ($('.swiperProductosDestacados').length > 0) {
  MyApp.swiperProductosDestacados.init();
}






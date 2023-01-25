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
  },
  contentCategorias: {
    init: function () {

      //var categoriaNovedad = localStorage.getItem("CatNovedad");
      //if (categoriaNovedad == "none") {
      //document.querySelector("#categorias li").classList.add("select");
      //}

      let listaTitle = [];
      const enlaces = document.querySelectorAll('#categorias li');
      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].textContent;
        listaTitle.push(textoitem);
      }

      // if (listaTitle.includes(categoriaNovedad)) {
      //   for (let y = 0; y < enlaces.length; y++) {
      //     if (categoriaNovedad === enlaces[y].textContent) {
      //       document.querySelector("#categorias li").classList.remove("select");
      //       enlaces[y].classList.add('select')
      //     }
      //   }
      // }

      $('.itemArticulo').hide();

      var categoryMain = document.querySelector('#categorias li.select').innerHTML;

      if (categoryMain === "Todos") {
        $(`.itemArticulo`).show(0);
      } else {
        $(`.itemArticulo[data-category="${categoryMain}"]`).show();
      }

      enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) => enlace.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.innerHTML;
          $(`.itemArticulo`).not(`[data-category="${categoria}"]`).hide();
          $(`.itemArticulo[data-category="${categoria}"]`).show();
          if (categoria === "Todos") {
            $(`.itemArticulo`).show();
          }
        })
      })
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

if ($('.categorias').length > 0) {
  MyApp.contentCategorias.init();
}


// if ($(".articulo .part2 .img").length > 0) {
//   $(".articulo .part2 .img").stick_in_parent({
//     offset_top: 0,
//     offset_right: 52,
//   });
// }





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

$('.marquee-with-optionsTh').marquee({
  duration: 30000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});


$(document).ready(function () {
  $("header .fex").hover(function () {
    document.querySelector("header").classList.add("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
  };
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
  if (e.target.closest(".checkbox-box input")) {
    document.querySelector(".labelPoliticas").classList.toggle("activo");
  }
  if (e.target.closest(".checkbox.motivo .radio1")) {
    document.querySelector(".radio1").classList.add("activo");
    document.querySelector(".radio2").classList.remove("activo");
  }
  if (e.target.closest(".checkbox.motivo .radio2")) {
    document.querySelector(".radio1").classList.remove("activo");
    document.querySelector(".radio2").classList.add("activo");
  }
  var formespacioselect = document.querySelectorAll('.formulario form select');
  if (e.target.closest(".formulario form select")) {
    e.target.parentElement.classList.toggle("active");
    console.log("aprietas el select");
  }
  else {
    formespacioselect.forEach(function (shinyItem2) {
      shinyItem2.parentElement.classList.remove("active")
    });
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
  },
  validate: {
    init: function () {
      var formespacio = document.querySelectorAll('.form-group');
      var formespacioinput = document.querySelectorAll('.form-input');
      var formespacioselect = document.querySelectorAll('form select');
      var formespacioselect = document.querySelectorAll('.formulario select.form-input');

      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      function inputcheck() {
        for (let i = 0; i < formespacioinput.length; i++) {
          if (!formespacioinput[i].value) {
            formespacioinput[i].parentElement.parentElement.classList.remove("ok");
          } else {
            formespacioinput[i].parentElement.parentElement.classList.add("ok");
          }
        }
      }

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].parentElement.parentElement.classList.add("error");
            e.preventDefault();
          } else {
            formespacioinput[y].parentElement.parentElement.classList.remove("error");
          }
        }
      }

      function validateSelect(e) {

        for (let i = 0; i < formespacioselect.length; i++) {
          if (formespacioselect[i].classList.contains("default")) {
          } else {
            if (formespacioselect[i].value == "") {
              formespacioselect[i].classList.add("falta");
              e.preventDefault();
            } else {
              formespacioselect[i].classList.remove("falta");
            }
          }

        }
      }

      function validatecheckbox(e) {
        if (!document.querySelector('input[name="motivo"]:checked')) {
          document.querySelector(".texto-check-motivo").classList.add("error");
          // e.preventDefault();
        } else {
          document.querySelector(".texto-check-motivo").classList.remove("error");
        }
        // if (!document.querySelector('input[name="ubicacion"]:checked')) {
        //     document.querySelector(".texto-check-ubi").classList.add("error");
        //     // e.preventDefault();
        // } else {
        //     document.querySelector(".texto-check-ubi").classList.remove("error");
        // }
      }

      $('.form-input').on('change', () => {
        formespacioinput.forEach(element => {
          if (!element.value == "") {
            element.parentElement.parentElement.classList.add("ok");
          } else {
            element.parentElement.parentElement.classList.remove("ok");
          }
        });
      });

      function validateCheck(e) {
        formespaciocheck = document.querySelectorAll(".formulario input[type='checkbox']");
        for (let i = 0; i < formespaciocheck.length; i++) {
          if (formespaciocheck[i].checked) {
            formespaciocheck[i].parentElement.parentElement.classList.remove("error");
          } else {
            formespaciocheck[i].parentElement.parentElement.classList.add("error");
          }
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest(".form-input")) {
          formespacio.forEach(function (shinyItem) {
            shinyItem.classList.remove("focusin");
          })
          e.target.parentElement.parentElement.classList.add("focusin");
        } else {
          formespacio.forEach(function (shinyItem) {
            shinyItem.classList.remove("focusin");
          });
        }

        if (e.target.closest("form select")) {
          formespacioselect.forEach(function (shinyItem2) {
            shinyItem2.parentElement.parentElement.classList.remove("open");
          })
          e.target.parentElement.parentElement.classList.add("open");
        } else {
          formespacioselect.forEach(function (shinyItem2) {
            shinyItem2.parentElement.parentElement.classList.remove("open");
          });
        }


        inputcheck()

        if (e.target.closest("form button")) {

          validateInput(e)

          validateSelect(e)

          validatecheckbox(e)

          validateCheck(e)

        }
      })

      document.addEventListener("keydown", function (event) {
        if (event.keyCode == 9) {
          for (let i = 0; i < formespacioinput.length; i++) {
            formespacioinput[i].addEventListener('focusin', (event) => {
              formespacioinput[i].parentElement.parentElement.classList.add('focusin');
            });
            formespacioinput[i].addEventListener('focusout', (event) => {
              formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
              if (formespacioinput[i].value) {
                formespacioinput[i].parentElement.parentElement.classList.add('ok');
              }
            });
          }
        }
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

if ($('.formulario').length > 0) {
  MyApp.validate.init();
}


// if ($(".articulo .part2 .img").length > 0) {
//   $(".articulo .part2 .img").stick_in_parent({
//     offset_top: 0,
//     offset_right: 52,
//   });
// }





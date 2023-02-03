

$('.marquee-with-options').marquee({
  duration: 6500,
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
  duration: 40000,
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




// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll("section.productosHome .swiperCategoriasHome .swiper-slide"), 0);
const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
const classNames = ["in", "out"]
  .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
  .reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - (width / 2) * (width > height ? height / width : 1);
  const y = t - (height / 2) * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseover", (ev) => this.update(ev, "in"));
    this.element.addEventListener("mouseout", (ev) => this.update(ev, "out"));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(
      `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
    );
  }
}

nodes.forEach((node) => new Item(node));


$(document).ready(function () {
  document.querySelector(".loading").classList.add("ok")
  setTimeout(() => {
    AOS.init();
  }, 200);

  setTimeout(() => {
    document.querySelector("nav").classList.add("ok")
    AOS.init();
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addClassToVisibleElements(elements, className) {
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add(className);
        }
      });
    }
    const elements = document.querySelectorAll(".oculto");
    const elementsBloqueIzq = document.querySelectorAll(".bloqueIzq");
    const elementsBloqueDer = document.querySelectorAll(".bloqueDer");

    addClassToVisibleElements(elements, "visible");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elements, "visible");
    });

    /* PARA BLOQUES */

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elementsBloqueIzq, "active");
    });

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elementsBloqueDer, "active");
    });


  }, 1000);

  setTimeout(() => {
    document.querySelector(".submenu").classList.add("ok")
    document.querySelector(".ht-cursor").classList.add("ok")
  }, 2000);

  setTimeout(() => {

  }, 1000);

  $("header .fex").hover(function () {
    document.querySelector("header").classList.add("open")
    document.querySelector(".filtroMain").classList.add("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMain").classList.remove("open")
  };
  $("main").hover(function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMain").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMain").classList.remove("open")
  };
  $("footer").hover(function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMain").classList.remove("open")
  }), function () {
    document.querySelector("header").classList.remove("open")
    document.querySelector(".filtroMain").classList.remove("open")
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

  if (e.target.closest("a")) {
    if (e.target.getAttribute("category-tab")) {
      var categoriaTab = e.target.getAttribute("category-tab");
      localStorage.setItem('category_tab', categoriaTab);
    }
  }
})

$('.follow').mouseleave(function (e) {
  TweenMax.to('.follow', 0.3, { scale: 1, x: 0, y: 0 });

});

$('.follow').mouseenter(function (e) {
});

$('.follow').mousemove(function (e) {
  callParallax(e);
});

function callParallax(e) {
  parallaxIt(e, '.follow', 80);
}

function parallaxIt(e, target, movement) {
  var $this = $('.follow');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 0.3, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement,
    ease: Power2.easeOut
  });
}

/******************************************************************************** */

$('.followProducto').mouseleave(function (e) {
  TweenMax.to('.followProducto', 0.3, { scale: 1, x: 0, y: 0 });

});

$('.followProducto').mouseenter(function (e) {
});

$('.followProducto').mousemove(function (e) {
  callParallax2(e);
});

function callParallax2(e) {
  parallaxIt2(e, '.followProducto', 80);
}

function parallaxIt2(e, target, movement) {
  var $this = $('.followProducto');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 0.3, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement,
    ease: Power2.easeOut
  });
}

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
        setTimeout(() => {
          var TituloDiapo = document.querySelector(".swiperHome .swiper-slide-active .info .titulo").textContent
          var tituloChinoDiapo = document.querySelector(".swiperHome .swiper-slide-active .info .tituloChino").textContent
          var descripcionDiapo = document.querySelector(".swiperHome .swiper-slide-active .info .descripcion").textContent

          tituloSlider.innerHTML = TituloDiapo
          tituloChinoSlider.innerHTML = tituloChinoDiapo
          descripcionSlider.innerHTML = descripcionDiapo
        }, 200);
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
          nextEl: ".blogHome .swiper-button-next",
          prevEl: ".blogHome .swiper-button-prev",
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
          nextEl: ".slideInHome .swiper-button-next",
          prevEl: ".slideInHome .swiper-button-prev",
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
        autoplay: {
          delay: 5000,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
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
        if (document.querySelector('input[name="motivo"]:checked')) {
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
  },
  tabs: {
    init: function () {
      let collapsible = document.querySelectorAll(".faq-collapsible");
      var category_tab_select = localStorage.getItem('category_tab');

      for (let i = 0; i < collapsible.length; i++) {
        if (collapsible[i].parentElement.getAttribute("category-tab") == category_tab_select) {
          collapsible[i].parentElement.classList.add("open");
        } else {
          collapsible[i].parentElement.classList.remove("open");
        }
      }


      collapsible.forEach((element) => {
        element.addEventListener("click", (element) => {
          if (!element.target.parentElement.classList.contains('open')) {
            for (let i = 0; i < collapsible.length; i++) {
              collapsible[i].parentElement.classList.remove("open");
            }
            element.target.parentElement.classList.add("open");
          } else {
            element.target.parentElement.classList.remove("open");
          }
        });
      });
    }
  },
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

if ($('.acordeon').length > 0) {
  MyApp.tabs.init();
}

// if ($(".articulo .part2 .img").length > 0) {
//   $(".articulo .part2 .img").stick_in_parent({
//     offset_top: 0,
//     offset_right: 52,
//   });
// }





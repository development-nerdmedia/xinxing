$('.marquee-with-options').marquee({
  duration: 6500,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

//$('.marquee-with-optionsSider').marquee({
  //duration: 50000,
  //gap: 0,
  //delayBeforeStart: 0,
  //direction: 'left',
  //duplicated: true,
//});

if (window.matchMedia("(min-width: 501px)").matches) {
  $('.marquee-with-optionsSider').marquee({
    duration: 50000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
} else {
  $('.marquee-with-optionsSider').marquee({
    duration: 10000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });

  var contentImg = document.querySelectorAll("section.woki .container .content")

  for (let i = 0; i < contentImg.length; i++) {
    contentImg[i].classList.add("mostrar")    
  }

}

if ($('header').length > 0 ) {
  if ( window.matchMedia("(max-width: 1201px)").matches) {
    document.querySelector("header li.fex").addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector("header").classList.toggle("open");    
      document.querySelector(".filtroMain").classList.toggle("open")      
    });
    $("header .fex").hover(function () {
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
    console.log("movil");
  } else {    
  }
}


//$('.marquee-with-options2').marquee({
  //duration: 40000,
  //gap: 0,
  //delayBeforeStart: 0,
  //direction: 'left',
 // duplicated: true,
//});

if (window.matchMedia("(min-width: 501px)").matches) {
  $('.marquee-with-options2').marquee({
    duration: 40000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
} else {
  $('.marquee-with-options2').marquee({
    duration: 10000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
}


$('.marquee-with-optionsSiderFooter').marquee({
  duration: 30000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});

if (window.matchMedia("(min-width: 501px)").matches) {
  $('.marquee-with-optionsTh').marquee({
    duration: 30000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
} else {
  $('.marquee-with-optionsTh').marquee({
    duration: 10000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
  });
}

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
  setTimeout(() => {
    document.querySelector(".loading .logo").classList.add("ocultar");
    if (document.querySelector(".loading .logo").classList.contains("ocultar")) {
      setTimeout(() => {
        document.querySelector(".loading").classList.add("ok")
      }, 800)
    }
  }, 2000)
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
          var titulos = document.querySelectorAll(".sliderHome .container .info .oculto")
          for (let i = 0; i < titulos.length; i++) {
            titulos[i].classList.add(className);
          }
        }
      });
    }

    const elements = document.querySelectorAll(".oculto");
    const elementsBloqueIzq = document.querySelectorAll(".bloqueIzq");
    const elementsBloqueDer = document.querySelectorAll(".bloqueDer");
    const elementsSlider = document.querySelectorAll(".swiper-wrapper");
    const elementsSlider2 = document.querySelectorAll(".sliderHome .container");
    const elementsImgs = document.querySelectorAll("section.woki .container .content");
    //const elementsImgs2 = document.querySelectorAll("section.woki .container .contentImg.segundo");

    addClassToVisibleElements(elementsSlider, "mostrar");
    addClassToVisibleElements(elementsSlider2, "mostrar");

    addClassToVisibleElements(elements, "visible");
    addClassToVisibleElements(elementsSlider, "mostrar");
    addClassToVisibleElements(elementsImgs, "mostrar");
    //addClassToVisibleElements(elementsImgs2, "mostrar");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elements, "visible");
      addClassToVisibleElements(elementsSlider, "mostrar");
      /* PARA BLOQUES */
      addClassToVisibleElements(elementsBloqueIzq, "active");
      addClassToVisibleElements(elementsBloqueDer, "active");
      addClassToVisibleElements(elementsImgs, "mostrar");
      //addClassToVisibleElements(elementsImgs2, "mostrar");
    });

  }, 3500);

  setTimeout(() => {
    document.querySelector(".submenu").classList.add("ok")
    document.querySelector(".ht-cursor").classList.add("ok")
  }, 1000);

  setTimeout(() => {

  }, 1000);

  

  

  if (window.matchMedia("(max-width: 1201px)").matches) {
    
  } else {
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
    console.log("destok");
  }

});

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

const elementsSlider = document.querySelectorAll(".productosHome .container2");
const elementsSlider2 = document.querySelectorAll(".blogHome");
const elementsSlider3 = document.querySelectorAll("section.productosDestacados .externo");

window.addEventListener("scroll", function () {
  addClassToVisibleElements(elementsSlider, "mostrar");
  addClassToVisibleElements(elementsSlider2, "mostrar");
  addClassToVisibleElements(elementsSlider3, "mostrar");
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

$(".listaProductos .item").hover(function () {
  $(".ht-cursor").addClass("mostrar");
}, function () {
  $(".ht-cursor").removeClass("mostrar");
});

document.addEventListener("click", (e) => {
  if (e.target.closest("nav .part2 ul li.submenu-icon")) {
    document.querySelector(".menuMovil").classList.toggle("open");
    document.querySelector(".submenu-icon .open").classList.toggle("mostrar");
    document.querySelector(".submenu-icon .close").classList.toggle("mostrar");
  }
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
        breakpoints: {
          '1281': {
            slidesPerView: 3,
          },
          '1025': {
            slidesPerView: 2.4,
          },
          '769': {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
          '664': {
            slidesPerView: 1.8,
            freeMode: false,
            spaceBetween: 30,
          },
          '425': {
            freeMode: false,
            slidesPerView: 1.06,
          },
          '370': {
            freeMode: false,
            slidesPerView: 1.05,
          },
          '0': {
            freeMode: false,
            slidesPerView: 1.05,
          },
        },
      });

      swiper3.on('slideChange', function () {
        document.querySelector(".swiperBlogHome .swiper-wrapper").classList.add("mostrar");
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
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          '1543': {
            slidesPerView: 4,
          },
          '1147': {
            slidesPerView: 3,
          },
          '1025': {
            slidesPerView: 2.5,
          },
          '965': {
            slidesPerView: 2.5,
          },
          '760': {
            slidesPerView: 2,
          },
          '574': {
            slidesPerView: 1.5,
          },
          '475': {
            slidesPerView: 1.2,
          },
          '0': {
            slidesPerView: 1,
          },
        },

      });
    }
  },
  swiperProductosDestacados: {
    init: function () {
      var swiper4 = new Swiper(".productosDestacados .swiperProductosDestacados", {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        loop: true,
        infinity: true,
        //loopFillGroupWithBlank: true,
        autoplay: {
          delay: 3000,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        breakpoints: {
          '1441': {
            slidesPerView: 3,
          },
          '1025': {
            slidesPerView: 2.7,
          },
          '901': {
            slidesPerView: 2,
          },
          '370': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 2,
          },
        },
      });

      swiper4.on('slideChange', function () {
        document.querySelector(".productosDestacados .externo").classList.add("mostrar");
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
      const enlaces = document.querySelectorAll('#categorias li span');
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

      var categoryMain = document.querySelector('#categorias li.select span').innerHTML;

      if (categoryMain === "Todos") {
        $(`.itemArticulo`).show(0);
      } else {
        $(`.itemArticulo[data-category="${categoryMain}"]`).show();
      }

      enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) => enlace.parentElement.classList.remove('select'));
          evento.target.parentElement.classList.add('select');
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
      var formespacioinput = document.querySelectorAll('.form-input.required');
      var formespacioinput2 = document.querySelectorAll('.form-input');
      var formespacioselect = document.querySelectorAll('form select');
      var formespacioselect = document.querySelectorAll('.formulario select.form-input');

      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      function inputcheck() {
        for (let i = 0; i < formespacioinput2.length; i++) {
          if (!formespacioinput2[i].value) {
            formespacioinput2[i].parentElement.parentElement.classList.remove("ok");
          } else {
            formespacioinput2[i].parentElement.parentElement.classList.add("ok");
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
          for (let i = 0; i < formespacioinput2.length; i++) {
            formespacioinput2[i].addEventListener('focusin', (event) => {
              formespacioinput2[i].parentElement.parentElement.classList.add('focusin');
            });
            formespacioinput2[i].addEventListener('focusout', (event) => {
              formespacioinput2[i].parentElement.parentElement.classList.remove('focusin');
              if (formespacioinput2[i].value) {
                formespacioinput2[i].parentElement.parentElement.classList.add('ok');
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

      document.addEventListener("click", function (e) {
        if (e.target.closest(".faq-collapsible")) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      })

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
          addClassToVisibleElements(elements, "visible");
        });
      });
    }
  },
  top: {
    init: function () {
      const scrollTopBtn = document.querySelector(".buttonTop");

      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollTopBtn.classList.add("mostrar")
        } else {
          scrollTopBtn.classList.remove("mostrar")
        }
      };

      scrollTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  },
  presentaciones: {
    init: function () {
      const containers = document.querySelectorAll(".listaProductos .item");
  
  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    
    container.addEventListener("mouseover", (event) => {
      const rect = container.getBoundingClientRect();
      const mouseX = event.pageX;
      const mouseY = event.pageY;
    
      const top = rect.top;
      const bottom = rect.bottom;
      const left = rect.left;
      const right = rect.right;
    
      if (mouseY < top) {        
        container.classList.remove("out-bottom");
        container.classList.add("in-bottom");
      } else if (mouseY > bottom) {
        container.classList.remove("out-top");
        container.classList.add("in-top");
      }
    });
    
    container.addEventListener("mouseout", (event) => {
      const rect = container.getBoundingClientRect();
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const top = rect.top;
      const bottom = rect.bottom;
      const left = rect.left;
      const right = rect.right;
    
      if (mouseY < top) {        
        container.classList.remove("in-bottom");
        container.classList.add("out-bottom");
      } else if (mouseY > bottom) {        
        container.classList.remove("in-top");
        container.classList.add("out-top");
      }
    });
  }
    }
  }
}

if ($('.swiperHome').length > 0) {
  MyApp.swiperHome.init();
}

if ($('.listaProductos').length > 0) {
  MyApp.presentaciones.init();
}

if ($('.buttonTop').length > 0) {
  MyApp.top.init();
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

if ($(".articulo .part2 .img").length > 0) {
  $(".articulo .part2 .img").stick_in_parent({
    offset_top: 0,
    offset_right: 52,
  });
}





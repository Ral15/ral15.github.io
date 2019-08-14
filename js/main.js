$('#cerrar').on('click', function () {
    $('#alert-float').hide();
});

//Destinos Recomendados Home
$(".slider-vertical ol li").on("click", function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".slider-vertical .slides").animate({
        top: -$(".slider-vertical").height() * $(this).index()
    }, 1000);
    SendEventGA('Destinos Recomendados', 1, 'Destino ' + $(this).index());
});

function scrollSlide() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".slider-vertical .slides").animate({
        top: -$(".slider-vertical").height() * $(this).index()
    }, 1000);
};
var $slides = $('.slider-vertical .slides'),
    $navWrap = $('ol');

function nextSlide() {
    var $next = $('ol li.active').next();
    if ($next.length === 0) {
        $next = $('ol li:first-of-type');
    }
    $next.click();
}

function slideTransition(index) {
    $('.slider-vertical .slides.active-slide').delay(15000).fadeOut(1000, function() {
        $(this).removeClass('active-slide');
    });
    $('.slider-vertical .slides:eq(' + index + ')').fadeIn(1000, function() {
        $(this).addClass('active-slide');
    });
}
var timer = setInterval(nextSlide, 15000);
$('.slider-vertical .slides:first').addClass('active-slide').fadeIn(1000);
$('.slider ol li').click(function() {
    clearInterval(timer);
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index('li');
    slideTransition(index);
    timer = setInterval(nextSlide, 15000);
    return false;
});
$('.slider ol li:first-of-type').click();

function openInfo(evt, infoTag) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-bnr1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("bnr1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoTag).style.display = "block";
    evt.currentTarget.className += " active";
}

function openInfo2(evt, infoTag) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-oferta-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoTag).style.display = "block";
    evt.currentTarget.className += " active";
}

function openInfo3(evt, infoTag) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-bnr2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("bnr2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoTag).style.display = "block";
    evt.currentTarget.className += " active";
}

function openInfo4(evt, infoTag) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-bnr3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoTag).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function() {
    $("#btn-activo1, #btn-activo2, #btn-activo3").addClass("active");
    $("#QueHacer1, #QueHacer2, #QueHacer3").css("display", "block");
});
$(function() {
    var opacidad_inicial = 1;
    var opacidad_final = 0;
    var clase_activo = 'boton-activo';
    var clase_boton = 'plan';
    var clase_region = 'region';
    var region = $('.' + clase_region);
    var botones = $('.' + clase_boton);
    botones.css({
        opacity: opacidad_inicial
    });
    botones.mouseenter(function() {
        $(this).not('.' + clase_activo).css({
            opacity: opacidad_final
        });
    }).mouseleave(function() {
        $(this).not('.' + clase_activo).css({
            opacity: opacidad_inicial
        });
    });
    region.click(function() {
        region.not(this).removeClass(clase_activo).trigger('mouseleave');
        $(this).addClass(clase_activo);
    });
    botones.click(function() {
        botones.not(this).removeClass(clase_activo).trigger('mouseleave');
        $(this).addClass(clase_activo);
    });
    var slide_regiones = 'regiones-mv';
    var slide_planes = 'planes-slide';
    var slide_activo = 'active';
    var regiones = $('.' + slide_regiones);
    var planes = $('.' + slide_planes);
    planes.click(function() {
        planes.not(this).removeClass(slide_activo).trigger('mouseleave');
        $(this).addClass(slide_activo);
    });
    regiones.click(function() {
        regiones.not(this).removeClass(slide_activo).trigger('mouseleave');
        $(this).addClass(slide_activo);
    });
});
$('#banner').on('mouseover', function() {
    $('.info-uno').toggleClass('ocultar');
    $('.box_custom_2').removeClass('ocultar');
    $('.box_custom_3').addClass('ocultar');
    $('.box_custom_5').addClass('ocultar');
    $('.info-dos').removeClass('ocultar');
    $('.info-tres').removeClass('ocultar');
});
$('#banner').on('mouseout', function() {
    $('.info-uno').toggleClass('ocultar');
    $('.box_custom_2').addClass('ocultar');
    $('.box_custom_3').addClass('ocultar');
    $('.box_custom_5').addClass('ocultar');
    $('.info-dos').removeClass('ocultar');
    $('.info-tres').removeClass('ocultar');
});
$('#banner2').on('mouseover', function() {
    $('.info-dos').toggleClass('ocultar');
    $('.box_custom_3').removeClass('ocultar');
    $('.box_custom_2').addClass('ocultar');
    $('.box_custom_5').addClass('ocultar');
    $('.info-uno').removeClass('ocultar');
    $('.info-tres').removeClass('ocultar');
});
$('#banner2').on('mouseout', function() {
    $('.info-dos').toggleClass('ocultar');
    $('.box_custom_3').addClass('ocultar');
    $('.box_custom_2').addClass('ocultar');
    $('.box_custom_5').addClass('ocultar');
    $('.info-uno').removeClass('ocultar');
    $('.info-tres').removeClass('ocultar');
});
$('#banner3').on('mouseover', function() {
    $('.info-tres').toggleClass('ocultar');
    $('.box_custom_5').removeClass('ocultar');
    $('.box_custom_2').addClass('ocultar');
    $('.box_custom_3').addClass('ocultar');
    $('.info-uno').removeClass('ocultar');
    $('.info-dos').removeClass('ocultar');
});
$('#banner3').on('mouseout', function() {
    $('.info-tres').toggleClass('ocultar');
    $('.box_custom_5').addClass('ocultar');
    $('.box_custom_2').addClass('ocultar');
    $('.box_custom_3').addClass('ocultar');
    $('.info-uno').removeClass('ocultar');
    $('.info-dos').removeClass('ocultar');
});


$(document).ready(function () {
    $('#lista-viajero').css("display", "block");
});

$(document).ready(function () {
    $('#reg-amazonas').on('mouseover', function() {
        $('#mapa-amazonas').addClass('mapa-active');
    });
    $('#reg-amazonas').on('mouseout', function() {
        $('#mapa-amazonas').removeClass('mapa-active');
    });

    $('#reg-ancash').on('mouseover', function() {
        $('#mapa-ancash').addClass('mapa-active');
    });
    $('#reg-ancash').on('mouseout', function() {
        $('#mapa-ancash').removeClass('mapa-active');
    });

    $('#reg-apurimac').on('mouseover', function() {
        $('#mapa-apurimac').addClass('mapa-active');
    });
    $('#reg-apurimac').on('mouseout', function() {
        $('#mapa-apurimac').removeClass('mapa-active');
    });

    $('#reg-arequipa').on('mouseover', function() {
        $('#mapa-arequipa').addClass('mapa-active');
    });
    $('#reg-arequipa').on('mouseout', function() {
        $('#mapa-arequipa').removeClass('mapa-active');
    });

    $('#reg-ayacucho').on('mouseover', function() {
        $('#mapa-ayacucho').addClass('mapa-active');
    });
    $('#reg-ayacucho').on('mouseout', function() {
        $('#mapa-ayacucho').removeClass('mapa-active');
    });

    $('#reg-cajamarca').on('mouseover', function() {
        $('#mapa-cajamarca').addClass('mapa-active');
    });
    $('#reg-cajamarca').on('mouseout', function() {
        $('#mapa-cajamarca').removeClass('mapa-active');
    });

    $('#reg-cusco').on('mouseover', function() {
        $('#mapa-cusco').addClass('mapa-active');
    });
    $('#reg-cusco').on('mouseout', function() {
        $('#mapa-cusco').removeClass('mapa-active');
    });

    $('#reg-huancavelica').on('mouseover', function() {
        $('#mapa-huancavelica').addClass('mapa-active');
    });
    $('#reg-huancavelica').on('mouseout', function() {
        $('#mapa-huancavelica').removeClass('mapa-active');
    });

    $('#reg-huanuco').on('mouseover', function() {
        $('#mapa-huanuco').addClass('mapa-active');
    });
    $('#reg-huanuco').on('mouseout', function() {
        $('#mapa-huanuco').removeClass('mapa-active');
    });

    $('#reg-ica').on('mouseover', function() {
        $('#mapa-ica').addClass('mapa-active');
    });
    $('#reg-ica').on('mouseout', function() {
        $('#mapa-ica').removeClass('mapa-active');
    });

    $('#reg-junin').on('mouseover', function() {
        $('#mapa-junin').addClass('mapa-active');
    });
    $('#reg-junin').on('mouseout', function() {
        $('#mapa-junin').removeClass('mapa-active');
    });
    $('#reg-libertad').on('mouseover', function() {
        $('#mapa-libertad').addClass('mapa-active');
    });
    $('#reg-libertad').on('mouseout', function() {
        $('#mapa-libertad').removeClass('mapa-active');
    });
    $('#reg-lambayeque').on('mouseover', function() {
        $('#mapa-lambayeque').addClass('mapa-active');
    });
    $('#reg-lambayeque').on('mouseout', function() {
        $('#mapa-lambayeque').removeClass('mapa-active');
    });
    $('#reg-lima').on('mouseover', function() {
        $('#mapa-lima').addClass('mapa-active');
    });
    $('#reg-lima').on('mouseout', function() {
        $('#mapa-lima').removeClass('mapa-active');
    });
    $('#reg-loreto').on('mouseover', function() {
        $('#mapa-loreto').addClass('mapa-active');
    });
    $('#reg-loreto').on('mouseout', function() {
        $('#mapa-loreto').removeClass('mapa-active');
    });
    $('#reg-madre').on('mouseover', function() {
        $('#mapa-madre').addClass('mapa-active');
    });
    $('#reg-madre').on('mouseout', function() {
        $('#mapa-madre').removeClass('mapa-active');
    });
    $('#reg-moquegua').on('mouseover', function() {
        $('#mapa-moquegua').addClass('mapa-active');
    });
    $('#reg-moquegua').on('mouseout', function() {
        $('#mapa-moquegua').removeClass('mapa-active');
    });
    $('#reg-pasco').on('mouseover', function() {
        $('#mapa-pasco').addClass('mapa-active');
    });
    $('#reg-pasco').on('mouseout', function() {
        $('#mapa-pasco').removeClass('mapa-active');
    });
    $('#reg-piura').on('mouseover', function() {
        $('#mapa-piura').addClass('mapa-active');
    });
    $('#reg-piura').on('mouseout', function() {
        $('#mapa-piura').removeClass('mapa-active');
    });
    $('#reg-puno').on('mouseover', function() {
        $('#mapa-puno').addClass('mapa-active');
    });
    $('#reg-puno').on('mouseout', function() {
        $('#mapa-puno').removeClass('mapa-active');
    });
    $('#reg-sanmartin').on('mouseover', function() {
        $('#mapa-sanmartin').addClass('mapa-active');
    });
    $('#reg-sanmartin').on('mouseout', function() {
        $('#mapa-sanmartin').removeClass('mapa-active');
    });
    $('#reg-tacna').on('mouseover', function() {
        $('#mapa-tacna').addClass('mapa-active');
    });
    $('#reg-tacna').on('mouseout', function() {
        $('#mapa-tacna').removeClass('mapa-active');
    });
    $('#reg-tumbes').on('mouseover', function() {
        $('#mapa-tumbes').addClass('mapa-active');
    });
    $('#reg-tumbes').on('mouseout', function() {
        $('#mapa-tumbes').removeClass('mapa-active');
    });
    $('#reg-ucayali').on('mouseover', function() {
        $('#mapa-ucayali').addClass('mapa-active');
    });
    $('#reg-ucayali').on('mouseout', function() {
        $('#mapa-ucayali').removeClass('mapa-active');
    });


// Regiones destacadas

    $('#reg-lbyq').on('mouseover', function() {
        $('#mapa-lambayeque').addClass('mapa-active');
    });
    $('#reg-lbyq').on('mouseout', function() {
        $('#mapa-lambayeque').removeClass('mapa-active');
    });

    $('#reg-ancsh').on('mouseover', function() {
        $('#mapa-ancash').addClass('mapa-active');
    });
    $('#reg-ancsh').on('mouseout', function() {
        $('#mapa-ancash').removeClass('mapa-active');
    });

    $('#reg-mqgua').on('mouseover', function() {
        $('#mapa-moquegua').addClass('mapa-active');
    });
    $('#reg-mqgua').on('mouseout', function() {
        $('#mapa-moquegua').removeClass('mapa-active');
    });


    //Slider atractivos
    class sliderAtractivos {
            
        constructor($el) {
            this.$el = $el;
            this.$refs = {
                items: [... document.querySelectorAll('[data-slider]', this.$el)],
            };
        this.length = this.$refs.items.length-1;
    }

    next() {
        this.slide('next');
    }

    prev() { 
        this.slide('prev');
    }

    slide(direction){
        this.$refs.items.map(el => {
            const pos = Number(el.getAttribute('data-position'));
            const next = (pos+1) > this.length ? 0 : pos+1;
            const prev = (pos-1) < 0 ? this.length : pos-1;
            const go = direction == "next" ? next : prev;

        el.setAttribute('data-position', go);
    });
}

    jump(pos){
        for(let i = 0; i < pos; i++) {
            const timeout = setTimeout(()=> {
                this.slide('prev');
        }, 100)
}
}
            
};
});


$(document).ready(function() {

    $(".seccion-scroll li a").each(function() {

        var url = $(this).attr('href');

        if (url == "http://www.turismoruralcomunitario.com.pe/")
        {
            $(this).parent().css("display","none");
        }
        else if (url == "https://www.clima.com/peru")
        {
            $(this).attr('href', "https://www.senamhi.gob.pe/");
        }
        else if (url == "http://turismoeducativo.peru.travel/")
        {
            //$(this).attr('href', "https://ytuqueplanes.com/universitarios");
            $(this).parent().css("display", "none");
        }

    });
    
});

$(document).ready(function() {

   /* var url_full = location.href;

    //alert(url_full);

    url_full = url_full.split("/");
    arr_departamento = ["23_tacna", "04_arequipa", "21_puno", "18_moquegua"];*/

    //alert(arr_departamento.indexOf(url_full[4]));

    //alert(url_full[2]);

    /*if (url_full[3] == "ofertas" && arr_departamento.indexOf(url_full[4])>0)
    {
        $("#alert-float").css("display", "block");
    }
    else if (url_full[url_full.length - 1] == "ofertas" || url_full[2] == "www.ytuqueplanes.com" || url_full[2] == "ytuqueplanes.com" || url_full[2] == "ytqp-qa.promperu.gob.pe")
    {
        $("#alert-float").css("display", "block");
    }
    else
    {
        $("#alert-float").css("display", "none");
    }*/

    $("#submenu-alerta1 a").text('Comunicado: Erupci\u00F3n en el volc\u00E1n Ubinas en Moquegua');
    $("#submenu-alerta1 a").attr("href", "http://media.peru.info/promperu/Comunicado-volcan-ubinas-moquegua.png");
    $("#submenu-detalle-alerta1 a").attr("href", "http://media.peru.info/promperu/Comunicado-volcan-ubinas-moquegua.png");
    $("#submenu-detalle-alerta1 img").attr("src", "img/banner-alerta-volcan-ubinas.png");




});

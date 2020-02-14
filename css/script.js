window.addEventListener('DOMContentLoaded', function(){

//title color
let colorRandom = ['cyan', 'teal', 'pink', 'grey', 'red', 'green', 'blue', 'yellow', 'white', 'orange', 'black'],
    title = document.querySelector('.name_site');
$('.name_site').hover(function(){
    this.style.color = colorRandom[Math.floor(Math.random() * colorRandom.length)];
    },
    function(){
        this.style.color = 'lightgrey';
        //'#212529';
});


$('.icon-home').click(function(){
    $('html').animate({scrollTop: $('#contacts').offset().top}, 600);
});


//gif's
$('.polish').hover(function(){
    $('.fara').css("display", "none");
    $('.bin').css("display", "inline");
});
$('.polish').mouseleave(function(){
    $('.bin').css("display", "none");
    $('.fara').css("display", "inline");
});

$('.paint_text').hover(function(){
    $('.paint').css("display", "none");
    $('.winch').css("display", "inline");
});
$('.paint_text').mouseleave(function(){
    $('.winch').css("display", "none");
    $('.paint').css("display", "inline");
});

$('.blesk_text').hover(function(){
    $('.blesk').css("display", "none");
    $('.di').css("display", "inline");
});

$('.blesk_text').mouseleave(function(){
    $('.di').css("display", "none");
    $('.blesk').css("display", "inline");
});

$('.dry_text').hover(function(){
    $('.dry').css("display", "none");
    $('.god').css("display", "inline");
});

$('.dry_text').mouseleave(function(){
    $('.god').css("display", "none");
    $('.dry').css("display", "inline");
});


//slider
let numSlider = 1,
    slides = document.querySelectorAll('.foto'),
    arrowR = document.querySelector('.arrow-right'),
    arrowL = document.querySelector('.arrow-left'),
    dotblock = document.querySelector('.dot-block'),
    dot = document.querySelectorAll('.dot'),
    le = dot.length;

function showSlides(n){
    slides.forEach((item) => item.style.display = 'none');
    if(n > slides.length) { numSlider = 1; }
    if(n < 1) { numSlider = slides.length; }
    slides[numSlider-1].style.display = 'block';
    dot[numSlider-1].classList.add('d-active');
}

arrowR.addEventListener('click', function(){
    dot[numSlider-1].classList.remove('d-active');
    showSlides(numSlider+=1);
});

arrowL.addEventListener('click', function(){
    dot[numSlider-1].classList.remove('d-active');
    showSlides(numSlider-=1);
});

dotblock.addEventListener('click', function(event){

    for(let i=0;i<dot.length+1;i++){
        if (event.target.classList.contains('dot') && event.target == dot[i-1]){
            dot[numSlider-1].classList.remove('d-active');
            showSlides(numSlider=i);
        }
    }
});

showSlides(numSlider);

//back up
let y = document.documentElement.clientHeight,
    arrowUp = document.querySelector('.arrow-up'),
    modal = 0;

$(window).scroll(function(){
    if ($(window).scrollTop()>y)
       arrowUp.style.display = 'block';
       else arrowUp.style.display = 'none';
});

arrowUp.addEventListener('click', function(){
    $('html').animate({scrollTop: 0}, 600);
});


//form modal
Data = new Date();
year = Data.getFullYear();
month = "0" + (Data.getMonth() + 1);
day = Data.getDate();
fulldate = year + "-" + month + "-" + day;
document.getElementById('calendar').setAttribute('min', fulldate);

let modal_sos = 0;

$("#phone").mask("9 (999) 999-99-99",{autoclear: false, completed:function(){}});
$("#phone").css("color", "white");

$('.date').focus(function(){
    $('.date').attr('type','date');
});

$('.close').click(function(){
    if (modal_sos == 1) {
        $('.sucess-mail').hide();
        $('.error').hide();
        $('.obratka').show(); }
});

$('.error-button').click(function(){
        $('.error').hide();
        $('.obratka').show();
        modal_sos = 0;
});

$('#my_form').submit(function(event){
    event.preventDefault();
    $.post(
        '/send.php',
        $('#my_form').serialize(),

        function(data) {
            //$('.obratka').hide();
        }
    ).done(function() {
    		modal_sos = 2;
        	$('.obratka').fadeToggle('slow',
           function(){ $('.sucess-mail').show(); });
           }
    ).fail(function() {
    		modal_sos = 1;
    	    $('.obratka').fadeToggle('slow',
    	   function(){ $('.error').show(); });
    	   }
	);
});

let windowWidth = $('body').innerWidth();
if(windowWidth < 600){
    $('.slideInLeft').removeClass('slideInLeft');
    $('.slideInRight').removeClass('slideInRight');
     }


// modal image
$(".modal0").each( function(){
    $(this).wrap('<div class="overlay"></div>');
});
let path_img = '';
$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    $('body').css("overflow", "hidden");
    path_img = $(this).attr('href');
    $('.img_big').attr('src', path_img);
    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function(e){
       var target = $(e.target);
       if ($(target).hasClass("overlay")){
          $(target).find(".modal0").each( function(){
            $('body').css("overflow", "visible");
            $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }
    });
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    var $this = $(this),
            modal = $($this).data("modal");
            $('body').css("overflow", "visible");
    $(modal).removeClass("open");
    setTimeout( function(){
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});


$('.find-us-icon, .find-us-title').click(function(e) {
    e.preventDefault();    
   
    $('.div-us').toggleClass('hidden');
    if(windowWidth <= 574 && windowWidth >= 350){
        
        $('.fus').toggleClass('active');
        // animate({"height": "400px"}, 1000);
    }
    $('.find-us').toggleClass('active');
});


//расчет стоимости
$('.cast-p').click(function(){
    $('.window-cast').fadeIn(400);
    $('body').css("overflow", "hidden");
    $('.wrapp').css("display", "block");
});

let summa = 0,
    usluga = '',
    j = 0,
    l = 0,
    auto = '',
    blockSumma = document.querySelector('.moneyP'),
    span = document.createElement('span');
span.innerHTML = " " + summa;
blockSumma.appendChild(span);

//выбор услуги и выбор автомобиля
$('#p, #h').click(function(){
    if ($(this).attr('id') == 'p'){
        summa = 3000; 
        usluga = "p";
    }
    else {
        summa = 2500;
        usluga = "h";
    }
    $('#p').animate({"margin-left" : "1000px"}, 400);
    $('#h').animate({"margin-right" : "1000px"}, 400);
    $('.title-what').fadeOut(700);
    setTimeout(() => {  
        $('.auto-select').css("display","block");
        $('.jeep-select').animate({"margin-right" : "1000px"}, 400);
    }, 1000);   
});

//Выбор легкового
$('.light').click(function(){
    auto = 'l';
    jeeplight(auto);
});

//Выбор джипа
$('.jeep').click(function(){
    auto = 'j';
    jeeplight(auto);   
});

function jeeplight(auto){
    //если джип увеличиваем стоимость
    if(usluga == 'p' && auto == 'j') summa+=2000;
    else if(usluga == 'h' && auto == 'j') summa+=1000;
    $({numberValue: span}).animate( {numberValue: summa}, {duration: 300, step: function(val) {
		$(".moneyP").html(Math.ceil(val)); }
    });
    $('.jeep').animate({"margin-left" : "1000px"}, 400);
    $('.light').animate({"margin-right" : "1000px"}, 400);
    if (auto == 'l') {
        setTimeout(() => {  
            $('.light, .jeep').css("display", "none"); 
            $('.light-select').css("display","block");
            $('.light-select').animate({"margin-right" : "1000px"}, 400);
        }, 1000);   
    }
    else {
        setTimeout(() => {  
            $('.light, .jeep').css("display", "none"); 
            $('.jeep-select').css("display","block");
            $('.jeep-select').animate({"margin-right" : "1000px"}, 400);
        }, 1000);   
    }
}
$('#4dl').click(function(){
    jeepandlight();
});
//2д легковой
$('#2dl').click(function(){
    summa-=500;
    $({numberValue: span}).animate( {numberValue: summa}, {duration: 300, step: function(val) {
        $(".moneyP").html(Math.ceil(val)); }
    });
    jeepandlight();
});
//универсал
$('#univ').click(function(){
    $({numberValue: span}).animate( {numberValue: summa}, {duration: 300, step: function(val) {
        $(".moneyP").html(Math.ceil(val)); }
    });
    jeepandlight();
});

//пикап и 2д
$('#pikap, #2').click(function(){
    if (usluga == 'h') summa-=500;
    else summa-=1000;
    $({numberValue: span}).animate( {numberValue: summa}, {duration: 300, step: function(val) {
        $(".moneyP").html(Math.ceil(val)); }
    });
    jeepandlight();
});

$('#4').click(function(){
    jeepandlight();
});

//джипы исчезают и легковые
function jeepandlight(){
    if (auto == 'j') $('.jeep-select').animate({"margin-left" : "2500px"}, 400);
    else $('.light-select').animate({"margin-left" : "2500px"}, 400);
    $('.what-auto').fadeOut(700);
    if (usluga == 'h') {
        setTimeout(() => {  
            $('.what-dirt').css("display","block");
        }, 1000);  
    }
    else {
        setTimeout(() => {  
            $('.what-polish').css("display","block");
        }, 1000);  
    }
}

$('#p2').click(function(){
    summa+=1500;
    fade();
});
//глубокие царапины
$('#p3').click(function(){
    summa+=2500;
    fade();
});
//подтеки
$('#p4').click(function(){
    summa+=5000;
    fade();
});

$('#d, #p1').click(function(){
    fade();
});

$('#sd').click(function(){
    summa+=1000;
    fade();
});

function fade(){
    if (usluga == 'h') $('.what-dirt, .money-add').fadeOut(900);
    else $('.what-polish, .money-add').fadeOut(900);
    itog(summa);
}

function itog(summa){
    setTimeout(() => { $('.itog').css("display","block"); }, 1000); 
    $({numberValue: 0}).animate( {numberValue: summa}, {duration: 300, step: function(val) {
        $(".summa-itog").html(Math.ceil(val) + " руб."); }
    });
}

// $('.fa-times').click(function(event){
//     $('.window-cast').fadeOut(300);
//     $('body').css("overflow", "visible");
//     $('.wrapp').css("display", "none");  
// });

$('.signup_calc').click(function(event){
    $('.window-cast').fadeOut(300);
    $('body').css("overflow", "visible");
    $('.wrapp').css("display", "none");  
    $('.modal').modal('show');
});

$('#form').submit(function(event){
    event.preventDefault();
    $.post(
        '/sendcalc.php',
        $('#form').serialize());
});






});
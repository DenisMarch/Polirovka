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
$('.fara').hover(
    function(){
        this.style.display = "none";
        $('.bin').css("display", "inline");
    });

$('.bin').mouseleave(function(){
        this.style.display = "none";
        $('.fara').css("display", "inline");
    }
);

$('.paint').hover(
    function(){
        this.style.display = "none";
        $('.winch').css("display", "inline");
    });

$('.winch').mouseleave(function(){
        this.style.display = "none";
        $('.paint').css("display", "inline");
    }
);

$('.blesk').hover(
    function(){
        this.style.display = "none";
        $('.di').css("display", "inline");
    });

$('.di').mouseleave(function(){
        this.style.display = "none";
        $('.blesk').css("display", "inline");
    }
);

//gif's touch for mobile
let fara = document.querySelector('.fara'),
    bin = document.querySelector('.bin'),
    paint = document.querySelector('.paint'),
    winch = document.querySelector('.winch'),
    blesk = document.querySelector('.blesk'),
    di = document.querySelector('.di');

fara.addEventListener('touchstart', function(event){
    event.preventDefault();
    event.target.click();
    this.style.display = "none";
    bin.style.display =  "inline";
}, false);

bin.addEventListener('touchstart', function(event){ 
    event.preventDefault();
    event.target.click();
    this.style.display =  "none";
    fara.style.display = "inline";    
}, false);

paint.addEventListener('touchstart', function(event){
    event.preventDefault();
    event.target.click();
    this.style.display = "none";
    winch.style.display =  "inline";
}, false);

winch.addEventListener('touchstart', function(event){ 
    event.preventDefault();
    event.target.click();
    this.style.display =  "none";
    paint.style.display = "inline";    
}, false);

blesk.addEventListener('touchstart', function(event){
    event.preventDefault();
    event.target.click();
    this.style.display = "none";
    di.style.display =  "inline";
}, false);

di.addEventListener('touchstart', function(event){ 
    event.preventDefault();
    event.target.click();
    this.style.display =  "none";
    blesk.style.display = "inline";    
}, false);


/*
document.addEventListener('touchstart', function(event){
    event.preventDefault();
    event.target.click();
    if (event.target.classList.contains('fara') || event.target.classList.contains('paint') || event.target.classList.contains('blesk'))  { 
        event.target.style.display = "none"; 
        if (event.target.classList.contains('fara')) {bin.style.display = "inline";}
        else  if (event.target.classList.contains('paint')) {winch.style.display = "inline";}
        else  if (event.target.classList.contains('blesk')) {di.style.display = "inline";}
    }
    else  if (event.target.classList.contains('bin') || event.target.classList.contains('winch') || event.target.classList.contains('di'))  { 
        event.target.style.display = "none"; 
        if (event.target.classList.contains('bin')) {fara.style.display = "inline";}
        else  if (event.target.classList.contains('winch')) {paint.style.display = "inline";}
        else  if (event.target.classList.contains('di')) {blesk.style.display = "inline";}
    }
}, false);
*/

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
    arrowUp = document.querySelector('.arrow-up');

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


    $('.formButton').click(function(){
        var auto = $('#auto').val();
        var phone = $('#phone').val();
        var data = $('#calendar').val();
        $.ajax({
            url: "/send.php", 
            type: "post", 
            data: { 
                "auto":   auto,
                "phone":  phone,
                "data": data
            },
            success: function(data){
                $('.modal-body').html(data.result);
                
            }
        });
    });


});

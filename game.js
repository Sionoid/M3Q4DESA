// function
function reset(){
    daycount = 1;
    $('.count-now').text(daycount);
    hp = 100;
    $('.hp-now').text(hp);
    ep = 20;
    $('.ep-now').text(ep);
    sp = 0;
    $('.sp-now').text(sp);
    var item1num = 0;
    $('.item-1-num').text(item1num);
    var item2num = 0;
    $('.item-2-num').text(item2num);
    var item3num = 0;
    $('.item-3-num').text(item3num);
    $("#game").hide();
    $("#start").show();
}

function hp0(){
    $('.dialogue').html('<span>You have died(´・ω・｀)<br/>Going back to start page</span>');
    $('.dialogue').show();;
    setTimeout(function(){
        $('.dialogue').hide();
        reset();
   },1500);
}

function hunt(damageRate,minDamage,maxDamage,getRate,minGet,maxGet){
    if(ep >= 5){
        ep = ep - 5;
        $('.ep-now').text(ep);
        var damageRateNum = Math.round(Math.random() * 100) + 1;
        var damageNum = Math.round(Math.random() * (maxDamage - minDamage)) + minDamage;
        if (damageRateNum <= damageRate){
            console.log(damageNum);
            hp = hp - damageNum;
            if(hp <= 0){
                $('.hp-now').text('0');
                $('.dialogue').html('<span>You have taken ' + damageNum +' damage! <br/> You have died(´・ω・｀)<br/>Going back to start page</span>');
                $('.dialogue').show();
                setTimeout(function(){
                    $('.dialogue').hide();
                    reset();
               },1500);
            }else{
                $('.hp-now').text(hp);
                var getRateNum = Math.round(Math.random() * 100) + 1;
                if (getRateNum <= getRate){
                    meatGet = Math.round(Math.random() * (maxGet - minGet)) + minGet;
                    $('.dialogue').html('<span>You have taken ' + damageNum +' damage! <br/> You have gotten ' + meatGet + ' meat!(*・ω・*)</span>');
                    $('.dialogue').show();
                    setTimeout(function(){
                        $('.dialogue').hide();
                   },1500);
                }else{
                    $('.dialogue').html('<span>You have taken ' + damageNum +' damage! <br/> You have failed to get meat...(´・ω・｀)</span>');
                    $('.dialogue').show();
                    setTimeout(function(){
                        $('.dialogue').hide();
                   },1500);
                }
            }
        }else{
            hp = hp - damageNum;
            if(hp <= 0){
                console.log('<0');
                $('.hp-now').text('0');
                $('.dialogue').html('<span>You have taken ' + damageNum +' damage! <br/> You have died(´・ω・｀)<br/>Going back to start page</span>');
                $('.dialogue').show();
                setTimeout(function(){
                    $('.dialogue').hide();
                    reset();
               },1500);
            }else{
                $('.hp-now').text(hp);
                $('.dialogue').html('<span>You have taken ' + damageNum +' damage! <br/> You have failed to get hunt...(´・ω・｀)</span>');
                $('.dialogue').show();
                setTimeout(function(){
                    $('.dialogue').hide();
                },1500)}
        }
    }else{
        $('.dialogue').html('<span>You do not have enough EP...(´・ω・｀)</span>');
            $('.dialogue').show();
            setTimeout(function(){
            $('.dialogue').hide();
        },1500)
    }
}

//start to mode//
$(".btn-start").click(function(){
    $("#start").hide();
    $("#mode").show();
});
//mode to start//
$(".back-btn").click(function(){
    $("#mode").hide();
    $("#start").show();
});
//mode to game//
$(".mode-container-pred").click(function(){
    $("#mode").hide();
    $("#game").show();
    $("#action").show();
    $("#hunt").hide();
    $("#search").hide();
});
//game to home//
$(".action-quit").click(function(){
    reset();
});

//game action//
$(".action-hunt").click(function(){
    $("#action").hide();
    $("#hunt").show();
});
$(".action-search").click(function(){
    $("#action").hide();
    $("#search").show();
});
$(".hunt-back").click(function(){
    $("#hunt").hide();
    $("#action").show();
});
$(".search-back").click(function(){
    $("#search").hide();
    $("#action").show();
});
//game to skill page//
$(".action-skill").click(function(){
    $("#game").hide();
    $("#skill").show();
});
//skill page to game//
$(".return-btn").click(function(){
    $("#skill").hide();
    $("#game").show();
});

//define
//day count
var daycount = 1;
$('.count-now').text(daycount);
//HP
var hp = 100;
$('.hp-now').text(hp);
//EP
var ep = 20;
$('.ep-now').text(ep);
//SP
var sp = 15;
$('.sp-now').text(sp);
//meat num
var item1num = 0;
$('.item-1-num').text(item1num);
//mushroom num
var item2num = 0;
$('.item-2-num').text(item2num);
//water num
var item3num = 0;
$('.item-3-num').text(item3num);
//skill get
var skill1get = false;
var skill2get = false;
var skill3get = false;
var skill4get = false;
var skill5get = false;

//action-end

$('.action-end').click(function(){
    if(daycount >= 7){
        reset();
    }else{
        hp = hp - 25;
        if(hp <= 0){
            $('.hp-now').text('0');
            hp0();
        }else{
        $('.hp-now').text(hp);
        ep = 20;
        $('.ep-now').text(ep);
        daycount = daycount + 1;
        $('.count-now').text(daycount);}
    };
});

//skill
$('.skill-1-get').click(function(){
    if(sp >= 1){
        sp = sp - 1;
        $('.sp-now').text(sp);
        skill1get = true;
        $('.skill-1').addClass("skill-get")
        $('.skill-1-get').addClass("get-btn")
        $('.skill-1-get').removeClass("skill-get-btn")
        $('.skill-1-get').text('Researched');
    }
});
$('.skill-2-get').click(function(){
    if(sp >= 2 && skill1get === true){
        sp = sp - 2;
        $('.sp-now').text(sp);
        skill2get = true;
        $('.skill-2').addClass("skill-get")
        $('.skill-2-get').addClass("get-btn")
        $('.skill-2-get').removeClass("skill-get-btn")
        $('.skill-2-get').text('Researched');
    }
});
$('.skill-3-get').click(function(){
    if(sp >= 3 && skill1get === true && skill2get === true){
        sp = sp - 3;
        $('.sp-now').text(sp);
        skill3get = true;
        $('.skill-3').addClass("skill-get")
        $('.skill-3-get').addClass("get-btn")
        $('.skill-3-get').removeClass("skill-get-btn")
        $('.skill-3-get').text('Researched');
    }
});
$('.skill-4-get').click(function(){
    if(sp >= 4 && skill1get === true && skill2get === true && skill3get === true){
        sp = sp - 4;
        $('.sp-now').text(sp);
        skill4get = true;
        $('.skill-4').addClass("skill-get")
        $('.skill-4-get').addClass("get-btn")
        $('.skill-4-get').removeClass("skill-get-btn")
        $('.skill-4-get').text('Researched');
    }
});
$('.skill-5-get').click(function(){
    if(sp >= 5 && skill1get === true && skill2get === true && skill3get === true && skill4get === true){
        sp = sp - 5;
        $('.sp-now').text(sp);
        skill5get = true;
        $('.skill-5').addClass("skill-get")
        $('.skill-5-get').addClass("get-btn")
        $('.skill-5-get').removeClass("skill-get-btn")
        $('.skill-5-get').text('Researched');
    }
});

//hunt
$('.hunt-r').click(function(){
    hunt(50,10,30,70,2,4);
});
$('.hunt-d').click(function(){
    hunt(25,0,45,70,1,5);
});
$('.hunt-m').click(function(){
    hunt(65,5,40,55,3,6);
});
$('.hunt-f').click(function(){
    hunt(25,0,20,10,3,10);
});

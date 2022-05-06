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
//action-end//

$('.action-end').click(function(){
    if(daycount >= 7){
        reset();
    }else{
        hp = hp - 25;
        $('.hp-now').text(hp);
        if(hp <= 0){
            $('.dialogue').html('<span>You have died<br/>Going back to start page</span>');
            $('.dialogue').show();;
            setTimeout(function(){
                $('.dialogue').hide();
                reset();
           },1500);
        }else{
        ep = 20;
        $('.ep-now').text(ep);
        daycount = daycount + 1;
        $('.count-now').text(daycount);}
    };
});

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
    $("#game").hide();
    $("#start").show();
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
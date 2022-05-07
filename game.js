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
var sp = 0;
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
    item1num = 0;
    $('.item-1-num').text(item1num);
    item2num = 0;
    $('.item-2-num').text(item2num);
    item3num = 0;
    $('.item-3-num').text(item3num);
    $("#game").hide();
    $("#start").show();
    if(skill1get === true){
        $('.skill-1').removeClass("skill-get");
        $('.skill-1-get').removeClass("get-btn");
        $('.skill-1-get').addClass("skill-get-btn");
    }   
    if(skill2get === true){
        $('.skill-2').removeClass("skill-get");
        $('.skill-2-get').removeClass("get-btn");
        $('.skill-2-get').addClass("skill-get-btn");
    }   
    if(skill3get === true){
        $('.skill-3').removeClass("skill-get");
        $('.skill-3-get').removeClass("get-btn");
        $('.skill-3-get').addClass("skill-get-btn");
    }   
    if(skill4get === true){
        $('.skill-4').removeClass("skill-get");
        $('.skill-4-get').removeClass("get-btn");
        $('.skill-4-get').addClass("skill-get-btn");
    }   
    if(skill5get === true){
        $('.skill-5').removeClass("skill-get");
        $('.skill-5-get').removeClass("get-btn");
        $('.skill-5-get').addClass("skill-get-btn");
    skill1get = false;
    skill2get = false;
    skill3get = false;
    skill4get = false;
    skill5get = false;
    }   
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
        var getRateNum = Math.round(Math.random() * 100) + 1;
        if(skill2get === true){
            getRate = getRate + 3;
        }
        if(skill4get === true){
            damageRate = damageRate - 5;
        }
        if(skill5get === true){
            getRate = getRate + 2;
        }
        if (damageRateNum <= damageRate){
            //damage
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
                if (getRateNum <= getRate){
                    meatGet = Math.round(Math.random() * (maxGet - minGet)) + minGet;
                    if(skill3get === true){
                        meatGet = meatGet + 1;
                    }
                    item1num = item1num + meatGet;
                    $('.item-1-num').text(item1num);
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
            //no damage
            if (getRateNum <= getRate){
                meatGet = Math.round(Math.random() * (maxGet - minGet)) + minGet;
                item1num = item1num + meatGet;
                $('.item-1-num').text(item1num);
                $('.dialogue').html('<span>You have gotten ' + meatGet + ' meat!(*・ω・*)</span>');
                $('.dialogue').show();
                setTimeout(function(){
                    $('.dialogue').hide();
               },1500);
            }else{
                $('.dialogue').html('<span>You have failed to get meat...(´・ω・｀)</span>');
                $('.dialogue').show();
                setTimeout(function(){
                    $('.dialogue').hide();
               },1500);
            }
        }
    }else{
        $('.dialogue').html('<span>You do not have enough EP...(´・ω・｀)</span>');
            $('.dialogue').show();
            setTimeout(function(){
            $('.dialogue').hide();
        },1500)
    }
}

function search(epUse,meatProb,meatNum,mushNum,waterNum,spNum){
    if(ep >= epUse){
        ep = ep - epUse;
        $('.ep-now').text(ep);
        hp = hp - 20;
        $('.hp-now').text(hp);
        var meatProbNum = Math.round(Math.random() * 100) + 1;
        if(skill1get === true){
            meatProb = meatProb + 5;
        }
        if(skill3get === true){
            meatNum = meatNum + 1;
            mushNum = mushNum + 1;
            waterNum = waterNum + 1;
        }
        if(skill5get === true){
            meatProb = meatProb + 2;
        }
        if(meatProbNum <= meatProb){
            item1num = item1num + meatNum;
            $('.item-1-num').text(item1num);
            item2num = item2num + mushNum;
            $('.item-2-num').text(item2num);
            item3num = item3num + waterNum;
            $('.item-3-num').text(item3num);
            sp = sp + spNum;
            $('.sp-now').text(sp);
            $('.dialogue').html('<span>You have gotten ' +meatNum+ ' meat<br/>You have gotten ' +mushNum+ ' mushroom<br/>You have gotten ' +waterNum+ ' water <br/>You have gotten ' +spNum+ ' SP</span>');
            $('.dialogue').show();
            setTimeout(function(){
                $('.dialogue').hide();
            },1500)
        }else{
            item2num = item2num + mushNum;
            $('.item-2-num').text(item2num);
            item3num = item3num + waterNum;
            $('.item-3-num').text(item3num);
            sp = sp + spNum;
            $('.sp-now').text(sp);
            $('.dialogue').html('<span>You have gotten ' +mushNum+ ' mushroom<br/>You have gotten ' +waterNum+ ' water <br/>You have gotten ' +spNum+ ' SP</span>');
            $('.dialogue').show();
            setTimeout(function(){
                $('.dialogue').hide();
            },1500)
        }
    }else{
        $('.dialogue').html('<span>You do not have enough EP...(´・ω・｀)</span>');
        $('.dialogue').show();
        setTimeout(function(){
            $('.dialogue').hide();
        },1500)
    }
}

function itemUse(itemName,itemNum,hpUp,itemClass){
    if(itemNum === 0 || hp >= 100){
        $('.dialogue').html('<span>You cannot use this item now!</span>');
        $('.dialogue').show();
        setTimeout(function(){
            $('.dialogue').hide();
        },1500)
    }else{    
        itemNum = itemNum - 1;
        $(itemClass).text(itemNum);
        if(itemName === 'meat'){
            item1num = itemNum;
        }else if(itemName === 'mushroom'){
            item2num = itemNum;
        }else if(itemName === 'water'){
            item3num = itemNum;
        }
        hp = hp + hpUp;
        $('.hp-now').text(hp);
        if(hp > 100){
            hp = 100;
            $('.hp-now').text(hp);
        }
        $('.dialogue').html('<span>'+itemName+' used! +'+ hpUp +'HP</span>');
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



//action-end

$('.action-end').click(function(){
    if(daycount >= 7){
        $('.dialogue').html('<p class="dialogue-congrats">Congratulation!!</p><p class="dialogue-congrats-txt">You have survived(*・ω・)</p>');
        $('.dialogue').show();
        setTimeout(function(){
            $('.dialogue').hide();
            reset();
        },3000)
    }else{
        $('.dialogue').html('<span>Next day...</span>');
        $('.dialogue').show();
        setTimeout(function(){
            $('.dialogue').hide();
        },1500)
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
    hunt(80,10,30,60,2,4);
});
$('.hunt-d').click(function(){
    hunt(55,0,45,60,1,5);
});
$('.hunt-m').click(function(){
    hunt(95,5,40,45,3,6);
});
$('.hunt-f').click(function(){
    hunt(55,0,20,10,3,10);
});

//search
$('.search-s').click(function(){
    search(10,0,1,1,2,1);
});
$('.search-m').click(function(){
    search(15,1,1,2,3,2);
});
$('.search-l').click(function(){
    search(20,3,1,3,4,3);
});

//item use
$('.item-1').click(function(){
    console.log('use');
    itemUse('meat',item1num,10,'.item-1-num');
});
$('.item-2').click(function(){
    console.log('use');
    itemUse('mushroom',item2num,5,'.item-2-num');
});
$('.item-3').click(function(){
    console.log('use');
    itemUse('water',item3num,3,'.item-3-num');
});
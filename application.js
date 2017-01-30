$(document).on("ready", function(){
  console.log('ready');
  $ryu = $('.ryu');
  startMoveListener();

});

// var standAnimation = function(){
//   $ryu = $('#animated');
//   $ryu.addClass('idle')
// };
var moveRight = function(){
    $ryu.addClass('move').css({ marginLeft:'+=10px' });
    setTimeout(function(){ $ryu.removeClass('move');}, 1000);
};

var moveLeft = function(){
    $ryu.addClass('move').css({ marginLeft:'-=10px' });
    setTimeout(function(){ $ryu.removeClass('move');}, 1000);
};

var tatsu = function(){
    $ryu.addClass('tatsu');
    setTimeout(function(){ $ryu.removeClass('tatsu');}, 1000);
};

var startMoveListener =  function(){
  $(document).on('keydown', function(e){
    if(e.which == 39){
      e.preventDefault();
      moveRight();
    }
    if(e.which == 37){
      e.preventDefault();
      moveLeft();
    }
    if(e.which == 84){
      e.preventDefault();
      tatsu();
    }
  })
};

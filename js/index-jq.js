$( "#welcome" ).click(function() {
  $( "#welcome" ).animate({
    opacity: 0.25,
    up: "+=100",
    height: "toggle"
  }, 1000, function() {
    // Animation complete.
  }); 
  $('#hideThis').css({'display':'block'});
});

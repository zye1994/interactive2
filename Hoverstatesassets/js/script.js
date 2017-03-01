$('.go').click(function() {
    $('.announcement').toggle();
});

$('.red-circle').hover(function() {
     $('.blue-square').fadeOut();
  }, function() {
     $('.blue-square').fadeIn();
  });

  $('.toggle').click(function() {
  $('p').toggle();
});

  $('#on').click(function(e) {
    $('#square').addClass('rounded');
});

$('#off').click(function(e) {
    $('#square').removeClass('rounded');
});
/nav icon xmobile/
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function() {
  $('.iconx').click(function() {
    if ($('nav').css('visibility') === 'hidden') {
      $('nav').css('visibility', 'visible')
      $('nav').css('opacity', '1')
    } else {
      $('nav').css('visibility', 'hidden')
      $('nav').css('opacity', '0')
    }
  });
});

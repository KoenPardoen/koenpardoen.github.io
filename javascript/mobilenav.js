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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

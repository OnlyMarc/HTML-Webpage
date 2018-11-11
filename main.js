window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      // * Shrink
      $('.navbar ul').css('cssText', 'background-color: #2a2a2a;')
  } else {
      // * Normal
      $('.navbar ul').css('cssText', 'background-color: none;')
  }
}
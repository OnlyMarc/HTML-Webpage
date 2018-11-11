window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      // * Shrink
      $('.navbar').css('cssText', 'background-color: #2a2a2a; padding: 10px 50px;')
  } else {
      // * Normal
      $('.navbar').css('cssText', 'background-color: none; padding: 20px 50px;')
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      // * Shrink
      $('.topbar').css('cssText', 'background-color: #2a2a2a; padding: 10px 50px;')
      $('.topbar img').css('cssText', 'height: 50px;')
  } else {
      // * Normal
      $('.topbar').css('cssText', 'background-color: none; padding: 20px 50px;')
      $('.topbar img').css('cssText', 'height: 100px;')
  }
}
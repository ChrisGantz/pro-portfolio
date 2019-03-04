'use strict';

$(document).ready(function () {

  $('#fade-first').fadeIn(2000);
  $('#fade-second').fadeIn(3000);
  // copy email to clip-board
  $('.copy-email').on({
    click: e => document.execCommand('copy'),
    copy: e => {
      if (e.originalEvent.clipboardData) {
        e.originalEvent.clipboardData.setData('text/plain', '$(this)[0].title');
        alert('Email copied to clipboard!');
        e.preventDefault();
      } else {
        alert('Could not be copied');
      }
    }
  });

  

});
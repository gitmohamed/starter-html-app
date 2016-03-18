// DO NOT WRAP (function(){}); AROUND JAVASCRIPT CODE
$(document).ready(function(){
  // JQuery goodness
  $('input').on('click', function(){
    alert('connected!!');
  });
  window.onload = function() {
    setTimeout( function(){
      $('#loader').fadeOut();
    }, 300);
  };
});

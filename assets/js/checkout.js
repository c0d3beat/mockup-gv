$(function() {
  $('.ui.two.buttons > button').on('click', function() {
    $('.ui.modal').modal({
      blurring: true
    }).modal('show');
  });
});
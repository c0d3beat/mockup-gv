$(function() {
  $modal = $('.ui.modal');
  $('.ui.fluid.card').find('a').on('click', function() {
    $('.ui.modal > .header').text($(this).data('name'));
    $modal.modal({
      blurring: true
    }).modal('show');
  });
});
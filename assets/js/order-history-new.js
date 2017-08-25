$(function() {
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  toastr["success"]("Pembelian voucher berhasil!");

  var $modal = $(".ui.modal");
  $(".ui.bottom.attached.button").on("click", function() {
    var $label = $(this).prev(".content").find(".top.attached.label");
    var newOrder = $label.hasClass("new");
    if (newOrder) {
      $label.removeClass("new");
    }
    $modal.children(".header").text($(this).data('title'));
    $(".ui.message > .header").text($(this).data('code'));
    var note = $(this).data('notes');
    if (note) {
      $modal.find(".note").html("<ul class='ui list'></ul>");
      for (i=0; i < note.length; i ++) {
        $modal.find("ul").append("<li>" + note[i] + "</li>");
      }
    } else {
      $modal.find(".note").html("");
    }
    $modal.modal({
      blurring: true
    }).modal('show');
  });
});
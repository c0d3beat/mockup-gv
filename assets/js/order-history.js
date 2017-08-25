$(function() {
  var $modal = $(".ui.modal");
  $(".ui.bottom.attached.button").on("click", function() {
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
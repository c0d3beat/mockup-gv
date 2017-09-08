$(function() {
  var height = $(window).height() - 50;
  $(".ui.segment").css("min-height", height);

  var fee = parseInt($("#fee").val()),
    amount = 0,
    total = 0,
    $amount = $("#amount"),
    $total = $("#total");
  $amount.on("change", function () {
    amount = parseInt($amount.val());
    total = amount + fee;
    $total.val(total);
  });

  $(".ui.form").form({
    fields: {
      amount: "empty"
    }
  });
});
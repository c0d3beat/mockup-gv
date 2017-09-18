$(function() {
  var height = $(window).height() - 50;
  $(".ui.segment").css("min-height", height);

  var fee = parseInt($("#fee").val()),
    amount = 0,
    total = 0,
    $amount = $("#amount"),
    $total = $("#total");
  $amount.on("input", function () {
    amount = parseInt($amount.val());
    if (isNaN(amount)) {
      amount = 0;
    }
    total = amount + fee;
    $total.val(total);
  });

  $(".ui.form").form({
    fields: {
      amount: "empty",
      phone: "empty"
    }
  });
});
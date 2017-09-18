$(function() {
  var height = $(window).height() - 50;
  $(".ui.segment").css("min-height", height);

  var fee = parseInt($("#fee").val()),
    amount = 0,
    total = 0,
    $amount = $("#amount"),
    $total = $("#total"),
    $input1 = $("#input1"),
    $input2 = $("#input2"),
    $debit = $("#debitcard");
  $amount.on("input", function () {
    amount = parseInt($amount.val());
    if (isNaN(amount)) {
      amount = 0;
    }
    total = amount + fee;
    $total.val(total);
    $input1.val(total);
  });

  $debit.mask("9999-9999-9999-9999", {
    completed: function() {
      console.log($("#debitcard").val().replace(/\-/g, "").slice(-10));
      var number = $("#debitcard").val().replace(/\-/g, "").slice(-10);
      $input2.val(number);
    }
  });

  $(".ui.form").form({
    fields: {
      amount: "empty"
    }
  });
});
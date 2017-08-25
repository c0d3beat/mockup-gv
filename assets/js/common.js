$(function() {
  var menuHeight = $(".ui.top.menu").css("height");
  var $pushable = $("div.pushable");
  var $topbar = $(".ui.top.sidebar");
  $topbar.attr("style", "margin-top: " + menuHeight + " !important");
  $pushable.attr("style", "padding-top: " + menuHeight + " !important");

  $topbar.sidebar({
    context: $(".pushable"),
    dimPage: true,
    scrollLock: true
  }).sidebar("attach events", "#sidebar-toggle");
});
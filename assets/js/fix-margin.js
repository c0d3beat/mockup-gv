$(function() {
  var windowHeight = $(window).height();
  var contentHeight = $("div.pusher").find(".ui.grid").height();
  var topMenuHeight = $(".ui.top.fixed.menu").height();
  var bottomMenuHeight = $(".ui.bottom.fixed.menu").height();
  var availableHeight = windowHeight - (topMenuHeight + bottomMenuHeight);
  if (availableHeight > (contentHeight + 10)) {
    $("div.pusher").css("margin-bottom", 0);
  }
});
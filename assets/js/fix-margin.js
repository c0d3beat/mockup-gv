$(function() {
  var windowHeight = $(window).height();
  var contentHeight = $("div.pusher").find(".ui.grid").height();
  var topMenuHeight = $(".ui.top.fixed.menu").height();
  var bottomMenuHeight = $(".ui.bottom.fixed.menu").height();
  var availableHeight = windowHeight - (topMenuHeight + bottomMenuHeight);
  console.log("available: " + availableHeight + ", " + "content: " + contentHeight);
  if ((availableHeight-100) > (contentHeight)) {
    $("div.pusher").css("padding-bottom", 0);
  }
});
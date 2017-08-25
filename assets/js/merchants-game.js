$(function() {
  /* Handling other links for demo */
  $("div.extra > div.ui.yellow").each(function() {
    $(this).siblings("a").on("click", function(e) {
      if ($(this).attr("href") !== "purchase-8ternals.html") {
        e.preventDefault();
        alert("Untuk template pembelian melalui web, silahkan merujuk ke contoh 8ternals.");
      }
    });
  });
  $("div.extra > div.ui.teal").each(function() {
    $(this).siblings("a").on("click", function(e) {
      if ($(this).attr("href") !== "purchase-itunes.html") {
        e.preventDefault();
        alert("Untuk template pembelian langsung, silahkan merujuk ke contoh itunes.");
      }
    });
  });
});
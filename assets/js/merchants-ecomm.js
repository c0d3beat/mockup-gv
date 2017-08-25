$(function() {
  /* Handling other links for demo */
  $("div.extra > div.ui.yellow").each(function() {
    $(this).siblings("a").on("click", function(e) {
      e.preventDefault();
      alert("Untuk template pembelian melalui web, silahkan merujuk ke contoh game > 8ternals.");
    });
  });
  $("div.extra > div.ui.teal").each(function() {
    $(this).siblings("a").on("click", function(e) {
      e.preventDefault();
      alert("Untuk template pembelian langsung, silahkan merujuk ke contoh game > itunes.");
    });
  });
});
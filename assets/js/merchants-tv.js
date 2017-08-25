$(function() {
  /* Handling other links for demo */
  $("div.extra > div.ui.teal").each(function() {
    $(this).siblings("a").on("click", function(e) {
      e.preventDefault();
      alert("Untuk template pembelian langsung dengan no ID, silahkan merujuk ke contoh internet > bolt.");
    });
  });
});
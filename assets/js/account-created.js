$(function() {
  $(".ui.form").form({
    fields: {
      username: 'empty',
      password: 'empty'
    }
  });

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  toastr["success"]("Pembuatan akun baru berhasil! Silahkan login menggunakan akun yang baru Anda buat.");
});
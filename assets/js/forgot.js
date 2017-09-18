$(function() {
  $(".ui.form").form({
    fields: {
      username: 'empty',
      email: ['empty', 'email']
    }
  });
});
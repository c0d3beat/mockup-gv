$(function() {
  $(".ui.form").form({
    fields: {
      username: 'empty',
      password: 'empty',
      password_again: 'match[password]',
      name: 'empty',
      email: ['empty', 'email']
    }
  });
});
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function() {
  console.log('document is ready!', new Date());
  $('#task_name').focus();


$('.modal').modal();

$('.modal-footer .btn-primary').click(function() {
   console.log('save the changes!');

   $('.modal-footer .btn-primary').click(function() {
   console.log($('.edit_task').submit());
});
});
});

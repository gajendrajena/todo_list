$(document).on('click', 'a#new_todo', function(e){
  e.preventDefault();
 	$('div#todo_form').toggleClass('hide');
});
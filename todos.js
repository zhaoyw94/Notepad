
// check off specific tools by clicking

$("ul").on("click", "li", function(){
$(this).toggleClass('completed');

});

// click X to delect 
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
$(this).remove();

});
 event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
 if (event.which === 13) {

 	//make your new to do list from input text area
   var todoText = ($(this).val());
   $(this).val("");
   // add new todo in ul
   $("ul").append("<li><span>X</span>" + todoText + "</li>");
 }

});
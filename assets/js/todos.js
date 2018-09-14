//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

//type todo
$("input[type='text']").on("keypress", function(event){
    if(event.which == 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span>"+ todoText +"</li>");

    }
});

$(".fa-pencil-alt").on("click", function(){
    $("input").fadeToggle();
});
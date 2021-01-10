$("ul").on("click","li",function()
{
   
    $(this).toggleClass("activated")
});




$("ul").on("click","span",function(event)
{
   
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event)
{
   if(event.which === 13)
   {
       
       let toDo = $(this).val();
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDo + "</li>");
       $(this).val("");
      
   }
});


$(".fa-plus").on("click",function()
{
    $("input[type ='text']").fadeToggle();
  
});




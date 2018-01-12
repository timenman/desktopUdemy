$("li").click(function (){
  $(this).toggleClass("completed")
});

$("span").click(function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Check off Todos by clicking
// $("li").click(function(){
//   //If Item is grey
//   if($(this).css("color") === "rgb(128, 128, 128)"){
//       //turn it black
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
// }
//
//   else($(this).css({
//     color: "grey",
//     textDecoration: "line-through"
//     })
//   );
// });

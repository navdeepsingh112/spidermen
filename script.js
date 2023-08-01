console.log("Hi")

document.getElementById("spiderman").addEventListener('keyup', function(e)
{
   if(e.keyCode == 32)
   {
    console.log("jump");
    var abc=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`transform`);
    var value=abc.split(`(`)[1];
    value=value.split(`)`)[0];
    value=value.split(`,`);
    var r=Math.atan2(value[1], value[0]);

    var angle=Math.round(r*(180/Math.PI));
    

   }
   else{
    console.log("loss");
   }
})
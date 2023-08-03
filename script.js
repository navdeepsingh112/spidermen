console.log("Hi");
function jump()
{
 var top=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`top`);
 var left=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`left`);
var sp=document.getElementById(`spidermans`);
sp.style.top='calc('+top+' - 1px)';
sp.style.left='calc('+left+' - 1px)';
}
document.getElementById("spiderman").addEventListener('keyup', function(e)
{
   if(e.keyCode == 32)
   {
      var sp=document.getElementById(`spidermans`);
         console.log(sp.style.top);
    console.log("jump");
    var abc=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`transform`);
    var value=abc.split(`(`)[1];
    value=value.split(`)`)[0];
    value=value.split(`,`);
    var r=Math.atan2(value[1], value[0]);

    var angle=Math.round(r*(180/Math.PI));
   // jump();
     setInterval(jump,40);

   }
   else{
    console.log("loss");
   }
})
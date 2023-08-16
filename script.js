var aud=document.getElementById('audiobg');
aud.play();
var aud1 = document.getElementById('audiojump');
var aud2 = document.getElementById('audiocau');
var aud3 = document.getElementById('audiod');
var vel=0.59;
var g=0.009;
var score=0;
function jump(y,x,par)
{
   // console.log(x,y);
 var top=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`top`);
 var left=window.getComputedStyle(document.getElementById(`spidermans`),null).getPropertyValue(`left`);
var spid=document.getElementById(`spidermans`);
spid.style.top='calc('+top+' - '+(y-g)+'vw)';
spid.style.left = 'calc(' + left +' - ' + x + 'vw)';
g=g+0.009;
   var web = par.id == 'weblr' ? 'webrr' : 'weblr';
   web = document.getElementById(web);
// var web = document.getElementById(`weblr`);
var abc = window.getComputedStyle(web, null).getPropertyValue(`transform`);
 var value = abc.split(`(`)[1];
value = value.split(`)`)[0];
value = value.split(`,`);
var r = Math.atan2(value[1], value[0]);
   // console.log(window.getComputedStyle(document.getElementById(`spidermans`), null).getPropertyValue(`left`)
   // ,window.getComputedStyle(document.getElementById(`weblr`), null).getPropertyValue(`left`)
   // );
   console.log(par);
   // var web= par.id=='weblr'?'webrr':'weblr';
   // web=document.getElementById(web);
   var h = window.getComputedStyle(web, null).getPropertyValue(`height`);
   var wel = window.getComputedStyle(web.parentElement, null).getPropertyValue(`left`);
   console.log((parseFloat(h)) * Math.cos(r) + 100, parseFloat(top), (parseFloat(h)) * Math.cos(r) - 100, parseFloat(wel) - parseFloat(h) * Math.sin(r) + 100
      , parseFloat(left), parseFloat(wel) - parseFloat(h) * Math.sin(r) - 100);
   if (((parseFloat(h)) * Math.cos(r) + 20 >= parseFloat(top))    
   && (parseFloat(wel) - parseFloat(h) * Math.sin(r) + 20 >= parseFloat(left))
 &&((parseFloat(h)) * Math.cos(r) - 20 <= parseFloat(top)) 
   && (parseFloat(wel) - parseFloat(h) * Math.sin(r) - 20 <= parseFloat(left))){
      aud2.play();
      console.log(par.id);
      web.appendChild(spid);
      spid.style.top='19.5vw';
      spid.style.left ='-1.14319582741vh';
      // web1.style.animation ='webswings 3000ms infinite, translatel 3000ms 1 forwards;';
      // web.style.animation ='webswings 3000ms infinite,translater 5000ms 1 forwards; ';
      // web1.classList.add('webrra');
      web.classList.add('weblra');
      score=score+1;
      var scbox=document.getElementById('scorebox');
      scbox.innerHTML=score;
      // if(score){
      //    web.parentElement.classList.remove('webrpa');
      //    par.parentElement.classList.remove('weblpa');
      // }
      // web.parentElement.classList.add('weblpa');
      // par.parentElement.classList.add('webrpa');
      web.parentElement.style.animation='translatel 3000ms 1 forwards';
      par.parentElement.style.animation ='translater 3000ms 1 forwards';
      return true;
   } 
   else if(parseFloat(top)>window.innerHeight*0.75){
      aud3.play();
      par.appendChild(spid);
      spid.style.top = '19.5vw';
      spid.style.left = '-1.14319582741vh';
      return true;
   }
}

document.getElementById("spiderman").addEventListener('keyup', function(e)
{
   if(e.keyCode == 32)
   {
      aud1.play();
      g=0.1;
      var sp=document.getElementById(`spidermans`);
      var par=sp.parentElement;

      var web = par.id == 'weblr' ? 'webrr' : 'weblr';
      web = document.getElementById(web);
         console.log(sp.style.top);
      var gc = document.getElementById(`gamecontainer`);
      gc.appendChild(sp);
    console.log("jump");
      // var web = document.getElementById(`webrr`);
    var abc=window.getComputedStyle(par,null).getPropertyValue(`transform`);
    var value=abc.split(`(`)[1];
    value=value.split(`)`)[0];
    value=value.split(`,`);
    var r=Math.atan2(value[1], value[0]);
      
   //  sp.style.animationName='aaa';
   sp.style.top=(19.5*Math.cos(r))+'vw';
   sp.style.left=(75-19.5*Math.sin(r))+'vw';
      console.log(sp.style.top, sp.style.right);
    sp.style.transform = 'rotateZ('+(r*180/Math.PI)+'deg)'

    var angle=r;
    par.parentElement.style.left='75%';
    web.parentElement.style.left='25%';
    // jump();
   //   setInterval(jump(vel*Math.cos(angle),vel*Math.sin(angle)),40);
    var inter= setInterval(() => {
        var as=jump(vel * Math.cos(angle), vel * Math.sin(angle),par);
        if(as){
         clearInterval(inter);
        }
     }, 20);
   }
   else{
    console.log("loss");
   }
})
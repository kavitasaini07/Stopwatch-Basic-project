var btn=document.getElementById("btn1");
var gk;
btn.onclick=function test()
{
   var p=document.getElementById("res");
   var x=1;
   function start()
   {
      
     
      p.innerHTML=x++;
     
    
   }
   gk=setInterval(start,100);
   
}
function stop()
{
   clearInterval(gk);
}



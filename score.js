var p1but =document.querySelector("#p1");
var p2but =document.querySelector("#p2");
var p1dis =document.querySelector("#one");
var p2dis =document.querySelector("#two");
var reset =document.querySelector("#res");
var numinput =document.querySelector("input");
var gameval =document.querySelector("#game_val");
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;

p1but.addEventListener("click",function(){
    if(!gameover)
    {p1score++;
    p1dis.textContent=p1score;
    if(p1score == winningscore)
    {  p1dis.classList.add("winner");
        gameover=true;
    }

    } 
});

p2but.addEventListener("click",function(){
    if(!gameover)
    {p2score++;
    p2dis.textContent=p2score;
    if(p2score == winningscore)
    {gameover=true;
        p2dis.classList.add("winner");
    }
    }
    
});
function rest(){
    p1score=0;
    p2score=0;
    p1dis.textContent=0;
    p2dis.textContent=0;
    gameover=false;
    p1dis.classList.remove("winner");
    p2dis.classList.remove("winner");
   // gameval.textContent=5;
   // winningscore =5;

};
reset.addEventListener("click",rest()); 
numinput.addEventListener("change",function(){
gameval.textContent=numinput.value;
winningscore = numinput.value;
rest();
})
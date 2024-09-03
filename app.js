let gameseq=[],userseq=[];;
let level=0;
let started=false;
let hs=0;
let btns=["one","two","three","four"];
document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started=true;
        levelUp();
    }
});
let heading=document.querySelector("h3");
function levelUp(){
    userseq=[];
    heading.innerText=`LEVEL ${++level}`;
    let random=Math.floor(Math.random()*3);
    let rcolor=btns[random];
    btnflash(document.querySelector(`.${rcolor}`));
    gameseq.push(rcolor);
}
function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },100);
}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
       // heading.innerText=`LEVEL ${++level}`;
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        hs=Math.max(hs,level-1);
        heading.innerHTML=`<b>GAME OVER!! Your score was ${level-1}<b> <br> Current Highscore = ${hs} <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor='"red"';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        restart();
    }
}
function btnClick(){
    btnflash(this);
    userseq.push(this.id);
    check(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for (const b of allbtn) {
    b.addEventListener("click",btnClick);
}
function restart(){
    level=0;
    userseq=[];
    gameseq=[];
    started=false;
}
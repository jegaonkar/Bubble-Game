let bubble = '';
let timer = 60;
let click;
let score = 0;
function scoreAddition(){
  score += 10;
  document.querySelector("#scorebox").textContent = score;
}
function clickvalue(){
 click = Math.floor(Math.random()*10);
 document.querySelector("#clickval").textContent = click;
}
function bubbleMaker(){
  for( let i=0; i<=167; i++){
    let bubbleNumber = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${bubbleNumber}</div>`;
  }
  document.querySelector("#box2").innerHTML =  bubble;
}
function runtimer(){
  let timerend = setInterval(() => {
    if(timer > 0){
    timer--;
    document.querySelector('#timer').textContent = timer;
    }
    else{
      clearInterval(timerend);
      document.querySelector("#box2").innerHTML = ` <h1> Game Over </h1></br><h1> Score is : ${score} </h1>`
    }
  }, 1000);
}
document.querySelector('#box2').addEventListener("click" ,function(insideInfo){
 let clickNum = Number(insideInfo.target.textContent);
 if(clickNum == click){
   scoreAddition()
   clickvalue();
   bubbleMaker();
}
})

clickvalue();
bubbleMaker();
runtimer();

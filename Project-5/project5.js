const circles= document.querySelectorAll('.circle');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const progress=document.getElementById('progress');
let activeCircles=1;
next.addEventListener('click', ()=>{
    activeCircles++;
    if(activeCircles>circles.length){
        activeCircles=circles.length;
    }
    console.log(activeCircles);
    update();
})
prev.addEventListener('click', ()=>{
    activeCircles--;
    if(activeCircles<1){
        activeCircles=1;
    }
    update();
})
function update(){
    circles.forEach((circle, index) => {
        if(activeCircles>index){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });
    const active=document.querySelectorAll('.active');
    console.log(((active.length-1)/(circles.length-1))*100);
    progress.style.width= (((active.length-1)/(circles.length-1))*100)+'%';
    if(activeCircles===circles.length){
        next.disabled= true;
    }else if(activeCircles===1){
        prev.disabled=true;
    }
    else{
        next.disabled= false;
        prev.disabled=false;
    }
}
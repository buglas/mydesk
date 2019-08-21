import './css/index.less';


let bac=document.getElementById('bac');
let world=document.getElementById('world');
initDomSize();
window.addEventListener( 'resize',function(event){
    initDomSize();
});

const imgSrc='./images/lotus.jpg';
const img=new Image();
img.src = imgSrc;
img.onload=function(){
    bac.style.opacity=1;
}


// world.style.backgroundImage=img;
console.log();

function initDomSize(){
    let winH=window.innerHeight;
    world.style.height=winH+'px';
}





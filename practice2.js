const button1=document.querySelector("button");
const bodies=document.querySelector("body");
const color=['red','yellow','brown','green','pink','purple','grey','black'];
bodies.style.backgroundColor="orange";

button1.addEventListener("click",colorChange);
function colorChange(){
    const colorIndex=parseInt(Math.random()*color.length);
    bodies.style.backgroundColor=color[colorIndex];
}

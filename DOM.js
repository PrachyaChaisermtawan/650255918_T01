let menu = document.getElementById('menu');
let item = document.getElementById('I3');
let count =1;

function Add(){
    let item = document.createElement('li');
    item.innerText="Item"+count;

    item.setAttribute('id',"I"+count);

    count=count+1;
    menu.appendChild(item);
    console.log(menu)
    
}
function Del(){
    
    let DelItem = document.getElementById('I'+(count-1));
    if(count > 1){
        count--
    }else(count=1);
    menu.removeChild(DelItem);
}
function Req(){
    let newChild = document.getElementById('I'+(count-1));
    newChild.innerText = "OwO"; 
    menu.replaceChild(newChild); 
}
function sly(){
    menu.classList.add("colorChange");
}
function Delsly(){
    menu.classList.remove("colorChange");
}
var x=0;
var arrayHead = ['Vacanza', 'Roll-da-dice', 'To-do App', 'Portfolio', 'OAK'];
var arrayDes =['A basic HTML and CSS Webpage', 'A game based on Javascript', 'ReactJS based TO-DO App', 'Resume Page', 'HTML, CSS and Javascript based Webpage'];
var slide_left_fwd = function(){
    if(x>=4){
        x=0;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
        document.getElementById('change-text-1').innerHTML=arrayHead[x];
        document.getElementById('change-text-2').innerHTML=arrayDes[x];
    }
    else{
        x++;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
        document.getElementById('change-text-1').innerHTML=arrayHead[x];
        document.getElementById('change-text-2').innerHTML=arrayDes[x];
    }
};
var slide_right_bck = function(){
    if(x<=0){
        x=4;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
        document.getElementById('change-text-1').innerHTML=arrayHead[x];
        document.getElementById('change-text-2').innerHTML=arrayDes[x];
    }
    else{
        x--;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
        document.getElementById('change-text-1').innerHTML=arrayHead[x];
        document.getElementById('change-text-2').innerHTML=arrayDes[x];
    }
};
setInterval(slide_left_fwd, 3000);


var close = function (){
    document.getElementById('toggle-bar').style.width="0";
    document.getElementById('toggle-bar').style.left=-500;
}
var open = function (){
    document.getElementById('toggle-bar').style.width="100%";
    document.getElementById('toggle-bar').style.left=0;
}
document.getElementById('fwd').addEventListener("click", slide_left_fwd);
document.getElementById('bck').addEventListener("click", slide_right_bck);
document.getElementById('hamburgerIcon').addEventListener("click", open);
document.getElementById('cross').addEventListener("click", close);


function toggle(){
    document.getElementById('toggle-bar').style.width="0";
    document.getElementById('toggle-bar').style.left=-500;
}
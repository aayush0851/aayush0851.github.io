var x=1;

var slide_left_fwd = function(){
    if(x>=3){
        x=1;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
    }
    else{
        x++;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
    }
};
var slide_right_bck = function(){
    if(x>=3){
        x=1;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
    }
    else{
        x++;
        document.getElementById('slide-image').src="/assets/slider/img"+x+".jpg";
    }
};
setInterval(slide_left_fwd, 3000);
document.getElementById('fwd').addEventListener("click", slide_left_fwd);
document.getElementById('bck').addEventListener("click", slide_right_bck);
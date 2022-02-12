for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        animation(buttonhtml);
        document.querySelector("span").innerHTML= document.querySelector("span").innerHTML + buttonhtml;
        
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
    document.querySelector("span").innerHTML= document.querySelector("span").innerHTML + event.key;
})
function makesound(buttonhtml){
    switch (buttonhtml) {
        case "w":
            var w= new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a= new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s= new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d= new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case "j":
            var j= new Audio("sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k= new Audio("sounds/crash.mp3");
            k.play();
            break;
        case "l":
            var l= new Audio("sounds/kick-bass.mp3");
            l.play();
            break;
    
        default:
            console.log();
            break;
    }


}
function animation(keyy){
    document.querySelector("."+keyy).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keyy).classList.remove("pressed");},100);


}

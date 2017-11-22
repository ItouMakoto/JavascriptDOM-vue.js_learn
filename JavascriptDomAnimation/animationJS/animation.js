/**
 * Created by Eruda on 2017/11/22.
 */
function positionMove(){
    var moveMassage=document.getElementById("moveMassage");
    var xpos=parseInt(moveMassage.style.left);
    var ypos=parseInt(moveMassage.style.top);
    if(xpos!=1000||ypos!=400){
        if(xpos<1000){
            xpos++;
        }
        if(xpos>1000){
            xpos--;
        }
        if(ypos<400){
            ypos++;
        }
        if(ypos>400){
            ypos--;
        }
    }else {
        return true;
    }
    moveMassage.style.left=xpos+"px";
    moveMassage.style.top=ypos+"px";
    setTimeout("positionMove()",10);
}

function chengePosition() {
    var moveMassage=document.getElementById("moveMassage");
    moveMassage.style.position="absolute";
    moveMassage.style.left="50px";
    moveMassage.style.top="100px";;
}
addLoadEvent(chengePosition);
addLoadEvent(positionMove);
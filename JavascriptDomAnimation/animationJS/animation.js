/**
 * Created by Eruda on 2017/11/22.
 */
function positionMove(){
    var moveMassage=document.getElementById("moveMassage");
    moveMassage.style.position="absolute";
    moveMassage.style.left="50px";
    moveMassage.style.top="100px";
    setTimeout("chengePosition()",5000);
}

function chengePosition() {
    var moveMassage=document.getElementById("moveMassage");
    moveMassage.style.left="1000px";
}
addLoadEvent(positionMove);
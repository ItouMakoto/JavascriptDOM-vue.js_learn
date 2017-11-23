/**
 * Created by Eruda on 2017/11/22.
 */

function chengePosition() {//设定初始的元素位置
    var element=document.getElementById("moveMassage");
    element.style.position="absolute";
    element.style.left="50px";
    element.style.top="100px";
    positionMove("moveMassage",400,1000,100);

}
addLoadEvent(chengePosition);

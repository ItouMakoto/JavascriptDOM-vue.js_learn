/**
 * Created by Eruda on 2017/11/23.
 * animation to case
 */

addLoadEvent(preView);
function preView() {
    var element=document.getElementById("preView");
    element.style.left=0+"px";
    element.style.top=0+"px";//优先加载css，之后才加载js，所以要先设定样式，否则为undefine.
    var lists=document.getElementsByTagName("ol");
    var links=lists[0].getElementsByTagName("a");
    links[0].onmouseover=function () {//添加动画.
        positionMoveSmoothly("preView",-100,0,1);
    };
    links[1].onmouseover=function () {
        positionMoveSmoothly("preView",-200,0,1);
    };
    links[2].onmouseover=function () {
        positionMoveSmoothly("preView",-300,0,1);
    };


}

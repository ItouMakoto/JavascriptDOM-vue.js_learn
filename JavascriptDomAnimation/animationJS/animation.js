/**
 * Created by Eruda on 2017/11/22.
 */
function positionMove(elementID,finalX,finalY,interval){//对函数进行抽象  移动对象/最终x位置/最终y位置/以及每次移动的距离

    var element=document.getElementById(elementID);
    var xpos=parseInt(element.style.left);
    var ypos=parseInt(element.style.top);
    if(xpos!=finalX||ypos!=finalY){
        if(xpos<finalX){
            xpos++;
        }
        if(xpos>finalX){
            xpos--;
        }
        if(ypos<finalY){
            ypos++;
        }
        if(ypos>finalY){
            ypos--;
        }
    }else {
        return true;
    }
    element.style.left=xpos+"px";
    element.style.top=ypos+"px";
    setTimeout("positionMove('"+elementID+"','"+finalX+"','"+finalY+"','"+interval+"')",interval);//记得写注释 这里的函数传递应为需要拼接字符串，函数名称中带参数引号，需要用单引号嵌套 用加号表示参数
}

function chengePosition() {//设定初始的元素位置
    var element=document.getElementById("moveMassage");
    element.style.position="absolute";
    element.style.left="50px";
    element.style.top="100px";
    positionMove("moveMassage",400,1000,100);

}
addLoadEvent(chengePosition);

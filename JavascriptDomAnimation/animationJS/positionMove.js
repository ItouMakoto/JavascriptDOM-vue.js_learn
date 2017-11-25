/**
 * Created by Eruda on 2017/11/23.
 */
function positionMove(elementID,finalX,finalY,interval){//对函数进行抽象  移动对象/最终x位置/最终y位置/以及每次移动的距离
    if(!document.getElementById)//测试浏览器兼容性
    {
        console.log("getElementbyid is not siutble");
        return false;
    }
    if(!document.getElementById(elementID)){//测试是否有当前元素
        console.log("can't catch the element");
        return false;
    }
    var element=document.getElementById(elementID);

    if(!element.style.left||!element.style.top) return false;
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
    //这里的函数传递应为需要拼接字符串，函数名称中带参数引号，需要用单引号嵌套 用加号表示参数
    setTimeout("positionMove('"+elementID+"','"+finalX+"','"+finalY+"','"+interval+"')",interval);

}
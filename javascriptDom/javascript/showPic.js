/**
 * Created by Eruda on 2017/9/26.
 */

function addOnLoadEvent(func) {
    var onLoad=window.onload;
    if(typeof(window.onload)!='function')
    {
        window.onload=func;
    }else {
        window.onload=function () {
            onLoad();
            func();

        }
    }
}



function setEvent()
{   if(!document.getElementById)return false;
if(!document.getElementsByTagName)return false;
    var li=document.getElementsByTagName("a");
    for(var time=0;time<li.length;time++)
    {
        li[time].onclick=function()
        {
            showPic(this);
            return false;
        }
    }


}
function showPic(obj)
{
var src=obj.getAttribute("href");
var picHolder=document.getElementById("picHolder");
picHolder.setAttribute("src",src);
var textValue=obj.getAttribute("title");
var descriptio= document.getElementById("description");
    descriptio.firstChild.nodeValue=textValue;
}

function creatDynamicPart(){

    var description=document.createElement("p");
    description.appendChild(document.createTextNode("Choose a picture!"));
    description.id="description";

    var  picHolder=document.createElement("img");
    picHolder.id="picHolder";
    alert(document.getElementsByTagName("body").length);
    document.getElementsByTagName("body")[0].appendChild(picHolder);
    document.getElementsByTagName("body")[0].appendChild(description);



}

addOnLoadEvent(creatDynamicPart);
addOnLoadEvent(setEvent);

/**
 * Created by Eruda on 2017/12/7.
 */
function addClassName(element,className){
    if(typeof(className)!='string')
    {
        console("className must be string")
        return false;
    }
    if(!element.className)
    {
        element.className=className;
    }
    else
    {
        var newClassName=element.className;
        element.className=newClassName+' '+className;
    }
}
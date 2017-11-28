/**
 * Created by Eruda on 2017/11/28.
 */
/******insert element after a target element********/
function insertAfter(newElement,targetElement){
    var parentElement=targetElement.parentNode;
    if(parentElement.lastChild==targetElement){
        parentElement.appendChild(newElement);
    }else{
        parentElement.insertBefore(newElement,targetElement.nextElementSibling);
    }
}
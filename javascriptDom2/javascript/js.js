 /**
 * Created by Eruda on 2017/10/18.
 */
/*function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}*/
function displayAbbreviations() {
    var abbreviations=document.getElementsByTagName("abbr");
    var def=new Array();
    for (var i=0;i<abbreviations.length;i++){
        var abbr_current=abbreviations;
        var detail=abbr_current[i].getAttribute("title");
        var key=abbr_current[i].lastChild.nodeValue;

        def[key]=detail;

    }
    var dl=document.createElement("dl");
    for(element in def){
    var dt=document.createElement("dt");
    var dd=document.createElement("dd");
    var dt_text=document.createTextNode(element);
    var dd_text=document.createTextNode(def[element]);
    dt.appendChild(dt_text);
    dd.appendChild(dd_text);
    dl.appendChild(dt);
    dl.appendChild(dd);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("缩略词");
    header.appendChild(header_text);
    alert(document.getElementsByTagName("body").length);
    document.getElementsByTagName("body")[0].appendChild(dl);
    document.body.insertBefore(header,document.getElementsByTagName("dl")[0]);
}
addLoadEvent(displayAbbreviations);

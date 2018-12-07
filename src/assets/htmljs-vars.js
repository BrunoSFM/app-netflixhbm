/* HTMLJS VARS - DEVELOPED BY BRUNO MIGUEL */

$(document).ready(function() {
    $('var[active]').each(function() {
        var InitWidth = $(this).data("init-width");
        var InitHeight = $(this).data("init-height");
        $(this).attr("style", "width: "+InitWidth+" !important; height: "+InitHeight+" !important;");
        // ADJUST WIDTH/HEIGHT
        var CurrentWidth = $(this).width() - 4;
        var CurrentHeight = $(this).height() - 4;
        $(this).attr("style", "width: "+CurrentWidth+"px !important; height: "+CurrentHeight+"px !important;");
    });
    
    // TEST VAR
    setTimeout(function() {
        HtmlJsVars_SetVar("testing.var","This is a test var...");
        HtmlJsVars_SetVar("userdata.name","Bruno Miguel");
        HtmlJsVars_SetVar("userdata.group","Grupo 100",2000);
    }, 5000);
});

function HtmlJsVars_SetVar(varName, varValue, setDelay=0) {
    setTimeout(function() {
        var VarsElem = $('var[active][data-var="'+varName+'"]');
        if(VarsElem.length > 0) {
            VarsElem.each(function() {
                $(this).replaceWith(varValue);
            });
        }
    }, setDelay);
    
}
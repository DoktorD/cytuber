// ==UserScript==
// @name         Cytube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cytu.be/r/offline69
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cytu.be
// @grant        none
// ==/UserScript==

(function() {
    function eventTamper(el){
        var dtMeta = $._data( el, "events" )
        if(dtMeta.click){
            var $el = $(el)
            var handle = dtMeta.click.handler
            $el.off("click")
            $el.on("click",function(){ if (confirm("Are u sure about that?")) handle() })
            console.log("event tamper", el, dtMeta)
        }
    }
    function mod(mutationsList){
        for (var mutation of mutationsList) {
            for(var added of mutation.addedNodes){
                for (var el of $(added).find("button")){
                    setTimeout(eventTamper,15, el)
                }
            }
        }
    }
    $('<style>').load("https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css").appendTo("head")


    var targetNode = document.getElementById('queue');
    var config = {
        attributes: false,
        childList: true,
        subtree: false
    };

    for (var el of $(targetNode).find("button")){
        eventTamper(el)
    }
    var observer = new MutationObserver(mod);
    observer.observe(targetNode, config);

    console.log('Maurice ready!');

})();

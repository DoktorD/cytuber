// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cytu.be/r/offline69
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cytu.be
// @grant        none
// ==/UserScript==

(function() {
    function mod(mutationsList){
        for (var mutation of mutationsList) {
            for(var el of mutation.addedNodes){
                var dtMeta = $._data( el, "events" )
                console.log(el, dtMeta)
                if(dtMeta.click){
                    var handle = dtMeta.click.handler
                    function newHandle(){
                    }

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

    var observer = new MutationObserver(mod);
    observer.observe(targetNode, config);
    
    console.log('Maurice ready!');

})();

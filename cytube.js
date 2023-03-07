// ==UserScript==
// @name         MauriceCytube
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Maurice
// @match        https://cytu.be/r/offline69
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cytu.be
// @grant        none
// ==/UserScript==

(function() {
    $('<style>').load("https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css").appendTo("head")

    window.onload = function(){
        function eventTamper(el){
            var dtMeta = $._data( el, "events" )
            if(dtMeta.click[0]){
                var $el = $(el)
                if($el.hasClass("qbtn-play")||$el.hasClass("qbtn-delete")){
                    var handle = dtMeta.click[0].handler
                    console.log("event tamper", el, dtMeta.click, handle)
                    $el.addClass("btn-danger")
                    $el.off("click")
                    $el.on("click",function(){
                        if (confirm("Are u sure about that?")) {
                            handle()
                        }
                    })
                }
            }
        }
        function mod(mutationsList){
            console.log("dynamic tamper ", mutationsList)
            for (var mutation of mutationsList) {
                for(var added of mutation.addedNodes){
                    setTimeout(function(){
                        for (var el of $(added).find("button")){
                            setTimeout(eventTamper,150, el)
                        }
                    },150)
                }
            }
        }
        var targetNode = document.getElementById('queue');
        var config = {
            attributes: false,
            childList: true,
            subtree: false
        };
        console.log("init tamper")
        setTimeout( function() {
            for (var el of $(targetNode).find("button")){
                eventTamper(el)
            }
        },2000)
        var observer = new MutationObserver(mod);
        observer.observe(targetNode, config);
        console.log('Maurice ready!');
    }


})();

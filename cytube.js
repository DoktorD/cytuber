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

$('<style>').load("https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css").appendTo("head")

$('document').ready(()=>{
    console.log('Custom cytube.js ready!');
})

})();

var LOADED = (typeof LOADED==="undefined") ? false : true;

$('<style>').load("https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css").appendTo("head")

$('document').ready(()=>{
    console.log('Custom cytube.js ready!');
})

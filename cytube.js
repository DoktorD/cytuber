var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';

$.ajax({
    url: "https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css",
    success: function(data) {
        $("<style>").appendTo("head").html(data);
    }
})

$('document').ready(()=>{
    console.log('Custom cytube.js ready!');
})

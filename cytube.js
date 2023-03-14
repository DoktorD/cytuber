'use strict';

// Define emotes
const emotes = {
	quinPsycho : "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_8ddaac2eaff94f219a6719a45b214126/default/dark/3.0",
	batDisco : "https://cdn.7tv.app/emote/61143ae59bf574f1fded6724/4x.webp",
	AlienGathering : "https://cdn.7tv.app/emote/60ae6b4486fc40d488d0b324/4x.webp",
	alizeePls : "https://cdn.7tv.app/emote/60af035e12d77014914b6d40/4x.webp",
	gachiHOP : "https://cdn.7tv.app/emote/61577531b785e05aa26c1005/4x.webp",
	GIGACHAT : "https://cdn.7tv.app/emote/616c2b9fd89696663cf352a2/4x.webp",
	goosePls : "https://cdn.7tv.app/emote/60b1dbb1fdd2d7d7bdf6e0c3/4x.webp",
	BBoomer : "https://cdn.betterttv.net/emote/5fcbde889d35484633452abe/3x.webp",
	quinJAM : "https://cdn.betterttv.net/emote/5eb81632813f9216935560a3/3x.webp",
	quinPls : "https://cdn.betterttv.net/emote/5e7281e96d485d372b29586a/3x.webp",
	docPls : "https://cdn.betterttv.net/emote/5e2eaabeb1d0ac51e8ece290/3x.webp",
	newMeta : "https://cdn.betterttv.net/emote/57192ed41b0211ae580c7a2a/3x.webp",
	pepeD : "https://cdn.betterttv.net/emote/618a6b801f8ff7628e6d1a4a/3x.webp",
	quinRoll : "https://cdn.betterttv.net/emote/5fb29cd042cf82644d87cc4c/3x.webp",
	RainbowPls : "https://cdn.betterttv.net/emote/5b35cae2f3a33e2b6f0058ef/3x.webp",
	POGGERS : "https://cdn.betterttv.net/emote/602bbdcfd049042e32dc47f1/3x.webp",
	TriDance : "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/3x.webp",
	ratJam : "https://cdn.betterttv.net/emote/5fc5ab31e22688461fed5ba6/3x.webp",
	docJAM : "https://cdn.7tv.app/emote/604217e977137b000de9e680/4x.webp",
}

$(document).ready( ()=>{
	//insert emotes
    const root = document.getElementsByTagName("body")[0];
    for (let emoteN in emotes) {
		let img = document.createElement("img");
		img.id = emoteN
		img.src = emotes[emoteN]
        root.appendChild(img);
    }


	
});

// block delete and play now
(() => {

	function eventTamper(el){
		var dtMeta = $._data( el, "events" )
		if(dtMeta.click[0]){
			var $el = $(el)
			if($el.hasClass("qbtn-play")||$el.hasClass("qbtn-delete")){

				var handle = dtMeta.click[0].handler
				console.log("event tamper", el, dtMeta.click, handle)
				$el.addClass("btn-danger")
				$el.off("click")
				$el.on("click",() => {
					if (confirm("Are u sure about that?")) {
						handle()
					}
				})

			}
		}
	}

	function obsF(mutationsList){
		console.log("mutations ", mutationsList)
		for (var mutation of mutationsList) {
			for(var added of mutation.addedNodes){
				setTimeout(() => {
					for (var el of $(added).find("button")){
						setTimeout(eventTamper,150, el)
					}
				},150)
			}
		}
	}

	
	console.log("init tamper")
	setTimeout( () => {

		var targetNode = document.getElementById('queue');
		var config = {
			attributes: false,
			childList: true,
			subtree: false
		};

		for (var el of $(targetNode).find("button")){
			eventTamper(el)
		}

		var observer = new MutationObserver(obsF);
		observer.observe(targetNode, config);
		console.log('Maurice ready!');

	},3500)



})()

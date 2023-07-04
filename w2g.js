// ==UserScript==
// @name         Watch2Gether
// @namespace    https://w2g.tv/
// @version      0.12
// @description  u better watch yo self
// @author       MauriceMann
// @updateURL    https://raw.githubusercontent.com/DoktorD/cytuber/master/w2g.js
// @match        https://w2g.tv/en/room/?access_key=cfd5n1dr6mg1cgrttahi6r
// @icon         https://www.google.com/s2/favicons?sz=64&domain=w2g.tv
// @require      https://code.jquery.com/jquery-3.7.0.slim.min.js
// @require      https://raw.githubusercontent.com/DoktorD/cytuber/master/emoteList.js
// @grant        GFY
// ==/UserScript==

(function() {
	'use strict';
	//$('<style>').load("https://raw.githubusercontent.com/DoktorD/cytuber/master/cytube.css").appendTo("head")

	
	let lwR = new RegExp(/(?:^|\s)(\w)*$/);
	let wR = new RegExp(/(?:^)?(\w+)(?:\s|$)/g);
	for (let e of Emotes) {
		e.reg = new RegExp(e.source);
		e.regg = new RegExp(e.source, "g");
		console.log(e);
	}
	//observation
	function replaceChatEmotes(s){
		let _s = s;
		for (let e of Emotes) {
			_s =_s.replaceAll(e.regg, `&nbsp<img src="${e.image}" style="display: inline-block">`);
		}
		return _s;
	}
	function obsF(mList){
		for (let mut of mList) {
			if (typeof(mut.addedNodes)!='undefined') {
				for (let aNode of mut.addedNodes) {
					for (let nCont of $(aNode).find(".w2g-chat-bubble-content .w2g-chat-message-text")){
						$(nCont).html(replaceChatEmotes($(nCont).html()));
					}
				}
			}
		}
	}
	let targetNode = $('.w2g-chat-messages')[0];
	let observer = new MutationObserver(obsF);
	let config = {
		attributes: false,
		childList: true,
		subtree: false
	};
	observer.observe(targetNode, config);

	//chat tab completion
	function matchChatEmote(s,i=0){

	}

	let inp = $(".w2g-chat-input textarea");
	inp.prop("autocomplete", false);

	let tabCompl = false;

	inp.on('keydown', (e)=> {
		//console.log("keydown", e)
		if (e.key == 'Tab') {
			let s = inp.val();
			console.log(s);
			matchChatEmote(s);
			e.preventDefault();
		} else {
			tabCompl = false;
		}
	});

	//appearance thingies
	$("#w2g-editorial").hide();
	$(".w2g-main-right").css({
		"width": "600px",
		"max-width": "600px",
	});
	console.log("Maurice here");
})();
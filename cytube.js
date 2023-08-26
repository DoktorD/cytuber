'use strict';

// Background emotes
const bgEmotes = {
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
//Chat emotes
const cemotes = [
	{
		image:"https://cdn.7tv.app/emote/6373c12922efe4715fbc7e7c/3x.webp",
		name:"notListening",
		source:"(^|\\s)notListening(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/60e36764d8080c59922eda92/2x.webp",
		name:"djShaq",
		source:"(^|\\s)djShaq(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/61812a68c632476d20d0d58e/1x.webp",
		name:"docShuffle",
		source:"(^|\\s)docShuffle(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/61376929c35b1e798a8e9647/2x.webp",
		name:"AND",
		source:"(^|\\s)AND(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/603cd0152c7b4500143b46db/1x.webp",
		name:"DOCING",
		source:"(^|\\s)DOCING(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/60b91e2b1b94ba73130927aa/1x.webp",
		name:"docJam",
		source:"(^|\\s)docJam(?!\\S)",
	},
	{
		image:"https://cdn.7tv.app/emote/62c02c2cc2b63d1e2f3d8782/1x.webp",
		name:"hmmMeeting",
		source:"(^|\\s)hmmMeeting(?!\\S)",
	},
]


custom_emote_tab = function(){
	let UI_ChannelCache = 0;
    let UI_GroupEmotes = 1;
    let GroupEmotes_Number = 25;
    let EMOTES = false;
    function toggleDiv(div) {
        $(div).css('display')=="none" ? $(div).show() : $(div).hide();
    }
	function showEmotes() {
		if (typeof GroupEmotes_Number!=="number" || GroupEmotes_Number<1) {
			GroupEmotes_Number=100;
		}
		let len=CHANNEL.emotes.length;
		if (len<1) {
			emotespanel.addClass('row');
			makeAlert("No emotes available", "Ask channel administrator.").appendTo(emotespanel);
		} else if (UI_GroupEmotes!="1" || len<=GroupEmotes_Number) {
			for (let i in CHANNEL.emotes) {
				$('<img onclick="insertText(\''+CHANNEL.emotes[i].name+' \')" />')
				.attr({'src':CHANNEL.emotes[i].image, 'title':CHANNEL.emotes[i].name})
				.appendTo(emotespanel);
			}
		} else {
			var arr = new Array();
			let stop=GroupEmotes_Number-1;
			let gr=Math.ceil(CHANNEL.emotes.length/GroupEmotes_Number);
			let html='';

			for (let i=0; i<len; i++) {
				html += '<img src="'+CHANNEL.emotes[i].image+'" '
				+ 'onclick="insertText(\''+CHANNEL.emotes[i].name+' \')" />';
				if (i%GroupEmotes_Number==stop) {
					arr.push(html);
					html='';
				}
			}
			console.log(arr);
			len%GroupEmotes_Number!=0 ? arr.push(html) : '';

			for (let i=0; i<gr; i++) {
				let div = $('<div id="emotes-'+i+'" class="groupemotes" style="display:none" />')
				.html(arr[i])
				.appendTo(emotespanel);
			}
			arr='';

			let emotesbtnwrap = $('<div id="emotesbtnwrap" />').appendTo(emotespanel);
			let emotesbtngroup = $('<div id="emotescontrols" class="btn-group">').appendTo(emotesbtnwrap);

			for (let i=0; i<gr; i++) {
				let btn = $('<button class="btn btn-sm btn-default emotesbtn" group="'+i+'">'+(i+1)+'</button>')
				.appendTo(emotesbtngroup)
				.on("click", function() {
					$(".emotesbtn").removeClass('active');
					$(this).addClass('active');
					$(".groupemotes").hide();
					let nr=$(this).attr('group');
					$("#emotes-"+nr).show();
				});
			}
			$("#emotes-0").show();
			$("#emotescontrols button:nth-child(1)").addClass('active');
		}
		EMOTES=true;
	}
	let chatpanel = $('<div id="chatpanel" class="row" />').insertBefore("#playlistrow");
	let emotespanel = $('<div id="emotespanel" style="display:none" />').appendTo(chatpanel);
	let chatcontrols = $('<div id="chatcontrols" class="btn-group" />').appendTo("#chatwrap");
	let emotesbtn = $('<button id="emotes-btn" class="btn btn-sm btn-default" title="Display emotes panel" />')
		.html('<i class="glyphicon glyphicon-picture"></i>')
		.appendTo(chatcontrols)
		.on("click", function() {
			toggleDiv(emotespanel);
			(UI_ChannelCache!="1" && !EMOTES) ? showEmotes() : '';
		});
}
$(document).ready( ()=>{
	//insert emotes
    const root = document.getElementsByTagName("body")[0];
    for (let emoteN in bgEmotes) {
		let img = document.createElement("img");
		img.id = emoteN
		img.src = bgEmotes[emoteN]
        root.appendChild(img);
    }


	// techincally no longer needed
	// dynamic block delete and play now
	// function eventTamper(el){
	// 	var dtMeta = $._data( el, "events" )
	// 	if(dtMeta.click[0]){
	// 		var $el = $(el)
	// 		if($el.hasClass("qbtn-play")||$el.hasClass("qbtn-delete")){
	
	// 			// var handle = dtMeta.click[0].handler
	// 			// console.log("event tamper", el, dtMeta.click, handle)
	// 			$el.addClass("btn-danger");
	// 			$el.off("click");
	// 			$el.on("click",() => {
	// 				if (confirm("Are u sure about that?")) {
	// 					socket.emit("delete", $el.parents("li.queue_entry").data("uid"));
	// 				}
	// 			})
	
	// 		}
	// 	}
	// }
	// let tamperDelay = 50
	// function obsF(mutationsList){
	// 	console.log("mutations ", mutationsList)
	// 	for (var mutation of mutationsList) {
	// 		if(mutation.addedNodes.length){
	// 			for(var added of mutation.addedNodes){
	// 				// the button was just added to the dom. no guarantee events are bound yet so we delay for each of the buttons
	// 				setTimeout(() => {
	// 					for (var el of $(added).find("button")){
	// 						setTimeout(eventTamper,tamperDelay, el)
	// 					}
	// 				},tamperDelay)
	// 			}
	// 		}
	// 	}
	// }
	// function bindObs(){
	// 	//holy race condition site. god knows when the queue is added to the dom 
	// 	setTimeout( () => {
	// 		console.log('bindObs')
	// 		let targetNode = document.getElementById('queue')

	// 		let tq = $(targetNode).find('.queue_entry')
	// 		let tbtn = tq.find('button')
	// 		//so we wait until we find all the btns, there are 4 per
	// 		if(targetNode && tq && tbtn && tq.length*4 == tbtn.length){
	// 			console.log('init tamper')
	// 			let config = {
	// 				attributes: false,
	// 				childList: true,
	// 				subtree: false
	// 			}
	// 			for (let el of $(targetNode).find('button')){
	// 				eventTamper(el)
	// 			}
	// 			//more timeception
	// 			setTimeout(()=>{
	// 				let observer = new MutationObserver(obsF);
	// 				observer.observe(targetNode, config);
	// 			},100)
	// 		} else {
	// 			bindObs()
	// 		}
	// 	},250)
	// }
	// //more timeception
	// setTimeout(bindObs,500)
	

	// function emoteHack(){
	// 	let _e = CHANNEL.emotes.concat(cemotes);
	// 	loadEmotes(_e);
	// 	EMOTELIST.handleChange();
	// 	CSEMOTELIST.handleChange();
	// }

	//Custom Emotes Hack
	// setTimeout(emoteHack,1000)

	Callbacks.reconnect = ()=>{
		console.log("success hacked reconnect")
		socket.emit("reportReconnect");
		// emoteHack();
	};

	

	//override addqueuebuttons
	var addQueueButtonsO = addQueueButtons;
	addQueueButtons = function(li){
		console.log('qfnoverride')
		addQueueButtonsO(li);
		li.find('.qbtn-play')
			.addClass("btn-danger")
			.off('click')
			.on('click',()=>{
					if (confirm("Are u sure about playing that?")) {
						socket.emit("jumpTo", li.data("uid"));
					}
				})
			;
		li.find('.qbtn-delete')
			.addClass("btn-danger")
			.off('click')
			.on('click',()=>{
					if (confirm("Are u sure about deleting that?")) {
						socket.emit("delete", li.data("uid"));
					}
				})
			;

		}
	setTimeout(rebuildPlaylist,100);



	console.log('Maurice ready!');	

});
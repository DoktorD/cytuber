// ==UserScript==
// @name         Watch2Gether
// @namespace    https://w2g.tv/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://w2g.tv/en/room/?access_key=cfd5n1dr6mg1cgrttahi6r
// @icon         https://www.google.com/s2/favicons?sz=64&domain=w2g.tv
// @require      https://code.jquery.com/jquery-3.7.0.slim.min.js
// @grant        GFY
// ==/UserScript==

(function() {
    'use strict';
    let Emotes = [
        {
            image:"https://cdn.7tv.app/emote/60b1dbb1fdd2d7d7bdf6e0c3/1x.webp",
            name:"goosePls",
            source:"(^|\\s)goosePls(?!\\S)",
        },
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
    ];
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
            _s =_s.replaceAll(e.regg, `<img src="${e.image}" style="display: inline-block">`);
        }
        return _s;
    }
    function obsF(mList){
        console.log(mList);
        for (let mut of mList) {
            if (typeof(mut.addedNodes)!='undefined') {
                for (let aNode of mut.addedNodes) {
                    console.log(aNode, $(aNode).find(".w2g-chat-bubble-content .w2g-chat-message-text"));
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

    console.log("Maurice here");
})();
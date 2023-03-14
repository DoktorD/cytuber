// Define emotes as <img> tags
const quinPsycho = document.createElement("img");
quinPsycho.src = "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_8ddaac2eaff94f219a6719a45b214126/default/dark/3.0";
quinPsycho.id = "quinPsycho";

const batDisco = document.createElement("img");
batDisco.src = "https://cdn.7tv.app/emote/61143ae59bf574f1fded6724/4x";
batDisco.id = "batDisco";

const AlienGathering = document.createElement("img");
AlienGathering.src = "https://cdn.7tv.app/emote/60ae6b4486fc40d488d0b324/4x";
AlienGathering.id = "AlienGathering";

const alizeePls = document.createElement("img");
alizeePls.src = "https://cdn.7tv.app/emote/60af035e12d77014914b6d40/4x";
alizeePls.id = "alizeePls";

const gachiHOP = document.createElement("img");
gachiHOP.src = "https://cdn.7tv.app/emote/61577531b785e05aa26c1005/4x";
gachiHOP.id = "gachiHOP";

const GIGACHAT = document.createElement("img");
GIGACHAT.src = "https://cdn.7tv.app/emote/616c2b9fd89696663cf352a2/4x";
GIGACHAT.id = "GIGACHAT";

const goosePls = document.createElement("img");
goosePls.src = "https://cdn.7tv.app/emote/60b1dbb1fdd2d7d7bdf6e0c3/4x";
goosePls.id = "goosePls";

const BBoomer = document.createElement("img");
BBoomer.src = "https://cdn.betterttv.net/emote/5fcbde889d35484633452abe/3x";
BBoomer.id = "BBoomer";

const quinJAM = document.createElement("img");
quinJAM.src = "https://cdn.betterttv.net/emote/5eb81632813f9216935560a3/3x";
quinJAM.id = "quinJAM";

const quinPls = document.createElement("img");
quinPls.src = "https://cdn.betterttv.net/emote/5e7281e96d485d372b29586a/3x";
quinPls.id = "quinPls";

const docPls = document.createElement("img");
docPls.src = "https://cdn.betterttv.net/emote/5e2eaabeb1d0ac51e8ece290/3x";
docPls.id = "docPls";

const newMeta = document.createElement("img");
newMeta.src = "https://cdn.betterttv.net/emote/57192ed41b0211ae580c7a2a/3x";
newMeta.id = "newMeta";

const pepeD = document.createElement("img");
pepeD.src = "https://cdn.betterttv.net/emote/618a6b801f8ff7628e6d1a4a/3x";
pepeD.id = "pepeD";

const quinRoll = document.createElement("img");
quinRoll.src = "https://cdn.betterttv.net/emote/5fb29cd042cf82644d87cc4c/3x";
quinRoll.id = "quinRoll";

const RainbowPls = document.createElement("img");
RainbowPls.src = "https://cdn.betterttv.net/emote/5b35cae2f3a33e2b6f0058ef/3x";
RainbowPls.id = "RainbowPls";

const POGGERS = document.createElement("img");
POGGERS.src = "https://cdn.betterttv.net/emote/602bbdcfd049042e32dc47f1/3x";
POGGERS.id = "POGGERS";

const TriDance = document.createElement("img");
TriDance.src = "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/3x";
TriDance.id = "TriDance";

const ratJam = document.createElement("img");
ratJam.src = "https://cdn.betterttv.net/emote/5fc5ab31e22688461fed5ba6/3x";
ratJam.id = "ratJam";

const docJAM = document.createElement("img");
docJAM.src = "https://cdn.7tv.app/emote/604217e977137b000de9e680/4x";
docJAM.id = "docJAM";

// Collect emotes
const emotes = [
    quinPsycho,
    batDisco,
    AlienGathering,
    alizeePls,
    gachiHOP,
    GIGACHAT,
    goosePls,
    BBoomer,
    quinJAM,
    quinPls,
    docPls,
    newMeta,
    pepeD,
    RainbowPls,
    POGGERS,
    TriDance,
    ratJam,
    docJAM,
];

(function() {
    'use strict';

    const root = document.getElementsByTagName("body")[0];

    for (let emote of emotes) {
        root.appendChild(emote);
    }
})();

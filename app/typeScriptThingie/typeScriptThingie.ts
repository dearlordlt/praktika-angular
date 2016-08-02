class TwitchEmote {
    twitchChatLevel: number;

    constructor(public memeLevel, public usage, public sarcasmLevel) {
        this.twitchChatLevel = memeLevel + usage + sarcasmLevel;
    }
}

interface Kappa {
    memeLevel: number;
    sarcasmLevel: number;
}
interface Keepo {
    memeLevel: number;
    sarcasmLevel: number;
}

function kappaCounter(kappa : Kappa) {
    return "Your Kappa level is, " + kappa.memeLevel + kappa.sarcasmLevel;
}

var kappa = new TwitchEmote(125, 25, 5);
kappaCounter(kappa);

var TwitchEmote = (function () {
    function TwitchEmote(memeLevel, usage, sarcasmLevel) {
        this.memeLevel = memeLevel;
        this.usage = usage;
        this.sarcasmLevel = sarcasmLevel;
        this.twitchChatLevel = memeLevel + usage + sarcasmLevel;
    }
    return TwitchEmote;
}());
function kappaCounter(kappa) {
    return "Your Kappa level is, " + kappa.memeLevel + kappa.sarcasmLevel;
}
var keepo = new TwitchEmote(125, 25, 5);
kappaCounter(keepo);

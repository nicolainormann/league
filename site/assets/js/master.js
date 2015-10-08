var leagueModel = function(data) {
    this.summonerName = ko.observable(data.néronia.name);
    this.summonerLevel = ko.observable(data.néronia.summonerLevel);
};

var league = (function () {
    var obj = {};
    // var apiKey = "?api_key=0a8d68f4-5e00-4345-9f35-c098a7ebe45b";
    // var apiHost = "https://euw.api.pvp.net/api/lol/euw/";

    var version = function (service){
        // champion-v1.2 
        // current-game-v1.0 
        // featured-games-v1.0 
        // game-v1.3 
        // league-v2.5  
        // lol-static-data-v1.2 
        // lol-status-v1.0  
        // match-v2.2  
        // matchlist-v2.2  
        // stats-v1.3  
        // summoner-v1.4 
        // team-v2.4 
    };

    var getJson = function (url) {
        $.getJSON(url, function(data) {
            $.extend(obj, data);
        });
    };

    return {
        getJson: getJson,
        obj: obj
    };
})();

league.getJson("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/N%C3%A9ronia?api_key=0a8d68f4-5e00-4345-9f35-c098a7ebe45b");
ko.applyBindings(new leagueModel(league.obj));
// var leagueModel = function(data) {
//     var summoner = data[Object.keys(data)[0]];
//     this.summonerName = ko.observable(summoner.name);
//     this.summonerLevel = ko.observable(summoner.summonerLevel);
// };

var league = (function () {
    //"https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/N%C3%A9ronia?api_key=0a8d68f4-5e00-4345-9f35-c098a7ebe45b"
    var apiKey = "?api_key=0a8d68f4-5e00-4345-9f35-c098a7ebe45b";
    var apiHost = "https://euw.api.pvp.net/api/lol/";

    var getData = function (){
        var name = 'Néronia'//$("#summonername").val();
        var region = 'euw'//$("select option").val();
        var summonerUrl = apiHost + region + "/v1.4/summoner/by-name/" + name + apiKey;
        getJson(summonerUrl);
    };

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
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                handleData(data);
            },
            error: function (request, status, error) {
                console.log(error);
            },
            complete: function(){
                console.log("finished ajax");
            }
        });
    };

    var handleData = function (data){
        
    };

    return {
        getData: getData
    };
})();

league.getData();  
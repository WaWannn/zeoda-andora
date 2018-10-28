const Discord = require("discord.js");
var bot = new Discord.Client();


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

bot.on('ready', function(){

});


bot.on('message', function (message) {
    if ( message.content === "!ping") {
        message.channel.send("pong");
    }
});

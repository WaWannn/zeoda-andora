const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("en Construction!!!");
    console.log("Le bot a bien été connecte");
});


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

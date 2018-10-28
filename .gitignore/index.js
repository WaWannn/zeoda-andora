const Discord = require("discord.js");
var bot = new Discord.Client();


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");


bot.on("message", message => {
    id ( message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }
    if ( message.content === "salut"){
        message.reply("Bien le bonjour!!!!");
        console.log("ok");
    }
});

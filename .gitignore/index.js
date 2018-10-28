const Discord = require("discord.js");
var bot = new Discord.Client();


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");


// Liste des quêtes
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        message.reply( message.author.username + " Voici votre liste de quêtes 3:");
    }
});

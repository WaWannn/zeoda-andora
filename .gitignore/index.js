const Discord = require("discord.js");
var bot = new Discord.Client();


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

bot.on('ready', function(){

});


bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenue dans le culte de Zeoda ' + member.displayName );
        channel.send('Andora vous envoie une première quête');
        channel.send('Pour la consulter faites !quete');
    }
});

// Liste des quêtes en privées
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        message.send("ok");
        message.send(message.author);
        message.send( message.author.displayName + " Voici votre liste de quêtes 2:");
        message.send( message.author.username + " Voici votre liste de quêtes 3:");
    }
});



const Discord = require("discord.js");
var bot = new Discord.Client();

bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

bot.on('ready' , function() {
    bot.user.setGame('En ligne!');
});

// Message de bienvenu
bot.on( 'guildMemberAdd' , function( member) {
    member.guild.channels.find('name', 'accueil').send('Bienvenue dans le culte de Zeoda ' + member.user + '. Andora vous a envoyé votre première quete. Pour consulter les quêtes, utilisez la commande !quete')


});

// Info utilisateur
bot.on('message', function(message) {
    if ( message.content === "!info"){
        message.reply();
    }
    if ( message.content === "!café){
        message.reply("je t'offre un petit café :coffee:");
    }
});



// Liste des quêtes
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        message.reply('Aucune quête n`est disponnible pour le moment. Revenez plus tard');
    }
});

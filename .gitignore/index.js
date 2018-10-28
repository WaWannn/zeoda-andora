const Discord = require("discord.js");
var bot = new Discord.Client();


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

bot.on('ready' , function() {
    bot.user.setGame('15:18');
});

// Message de bienvenu
bot.on( 'guildMemberAdd' , function( member) {
    member.guild.channels.find('name', 'accueil').send('Bienvenue dans le culte de Zeoda + ' + member.user.username + ' . Andora vous a envoyé votre première quete. Pour consulter les quêtes, utilisez la commande !quete')
});



// Liste des quêtes
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        message.reply( message.author.username + ' Voici votre liste de quêtes 3:');
    }
});



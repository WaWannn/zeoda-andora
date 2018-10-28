const Discord = require("discord.js");
var bot = new Discord.Client();

// Level and xD
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapters = new FileSync('database.json');
const db = low(adapters);
db.defaults({ histoires : [], xp: []}).write()


bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DrcnZg.LI-WiAaI8A7-gZrcFNWFSLGGELI");

bot.on('ready' , function() {
    bot.user.setGame('16:07');
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
});

// Liste des quêtes
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        message.reply('Voici votre liste de quêtes :');
    }
});


 
bot.on('message', message => {
   
    var msgauthor = message.author.id
 
    if(message.author.bot)return;
 
    if(!db.get("xp").find({user : msgauthor}).value()){
        db.get("xp").push({user : msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user : msgauthor}).find("xp").value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)
 
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
 
        if(message.content === prefix + "xp"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
                .setTitle(`Stat des XP de : ${message.author.username}`)
                .setColor('#F4D03F')
                .addField("XP", `${xpfinal[1]} xp`)
                .setFooter("Enjoy :p")
            message.channel.send({embed : xp_embed})
        }
    }
})

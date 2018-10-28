// INITIALISATION
// Discord
const Discord = require("discord.js");
var bot = new Discord.Client();

// Base de données 
// Utilisateur
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('user.json');
const dbuser = low(adapters);


// Connexion
bot.login("NTA2MDQ5NzE4MDk1MzE0OTQ0.DreglQ.kLDIGt2N_WIpT-XBWufNt2PuWkE");


// Etat du bot
bot.on('ready' , function() {
    bot.user.setGame('En contruction');
});


// Initialiser les bases de données
dbuser.defaults({ stats: [] }).write()


// Message de bienvenue
bot.on( 'guildMemberAdd' , function( member) {
    if ( !isExisted(member.user.id) ){
        adduser(member.user.id)
    }
    member.guild.channels.find('name', 'bot-test').send('Bienvenue dans le culte de Zeoda ' + member.user + '. Andora vous a envoyé votre première quete. Pour consulter les quêtes, utilisez la commande !quete')
});


// Liste des quêtes
bot.on('message', function (message) {
    if ( message.content === "!quete") {
        // message.channel.send(message.author + ' Aucune quête n`est disponnible pour le moment. Revenez plus tard');
    }
});


// S' Enregistrer quelqu'un dans la base de données
bot.on('message', function(message) {
    if ( message.content === "!entrer" ){
        if ( !isExisted(message.author.id) ){
            adduser(message.author.id)
            message.channel.send('Bienvenue dans le culte de Zeoda ' + message.author + '. Andora vous a envoyé votre première quete. Pour consulter les quêtes, utilisez la commande !quete')
        }
    }
})


// Creer un nouvel utilisateur dans la base utilisateur
function adduser(id){
    if ( !isExisted(id) ){
        dbuser.get('stats')
        .push({ user: id, level: 1, xp: 0, nbr_currentQuest: 0, nbre_doneQuest: 0, currentQuest: [0], doneQuest: [0] })
        .write()
    }
}


// Vérifier si l'utilisateur existe dans la base
function isExisted(id){
    var search = dbuser.get('stats').find('user').value()
    if ( search ){
        return true
    }else{
        return false
    }
}


// Afficher les infos de l'utilisateur
bot.on('message', function(message) {
    if ( message.content === "!info" ){

        var id = message.author.id
        
        if ( isExisted( id) ){
            var lvl = Object.values( dbuser.get('stats').find('level').value() )[1]
            var xp = Object.values( dbuser.get('stats').find('xp').value() )[2]
            var crrtqst = Object.values( dbuser.get('stats').find('nbr_currentQuest').value() )[3]
            var dnqst = Object.values( dbuser.get('stats').find('nbre_doneQuest').value() )[4]

            var info_embed = new Discord.RichEmbed()
                .setTitle('Informations de ' + message.author.username )
                .setColor('#F4D03F')
                .addField("Niveau : ", lvl)
                .addField("XP : ", xp)
                .addField("Nombre de quêtes en cours : ", crrtqst )
                .addField("Nombre de quêtes terminées : ", dnqst)
                
            message.channel.send({embed : info_embed})
        }else{
            adduser(id)
        }
    }
})


bot.on('message', function(message) {
    if ( message.content === "!chocolat"){
        message.reply("je vous offre un chocolat bien chaud ^^ : :coffee:");
    }
});

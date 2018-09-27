const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription('Bot information')
    .setColor('#15f153')
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name: 'botinfo'
}
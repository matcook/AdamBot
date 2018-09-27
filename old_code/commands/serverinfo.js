const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let servericon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription('Server Information')
  .setColor('#15f153')
  .setThumbnail(servericon)
  .addField('Server Name', message.guild.name)
  .addField('Created On', message.guild.createdAt)
  .addField('You Joined On', message.member.joinedAt)
  .addField('Total Members', message.guild.memberCount);
    
  message.channel.send(serverembed);
}

module.exports.help = {
  name: 'serverinfo'
}
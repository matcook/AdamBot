const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let reportUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reportUser) return message.channel.send(`Couldn't find user.`);
    let reportReason = args.join(' ').slice(22);
    if(!reportReason) reportReason = 'No reason specified';

    let reportEmbed = new Discord.RichEmbed()
    .setDescription('~Report~')
    .setColor('#15f153')
    .addField('Reported User', `${reportUser} with ID: ${reportUser.id}`)
    .addField('Reported By', `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField('Channel', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', reportReason);
    
    let reportsChannel = message.guild.channels.find(`name`, 'incidents');
    if(!reportsChannel) return message.channel.send(`Couldn't find incidents channel.`)

    message.delete().catch(O_o=> {});
    reportsChannel.send(reportEmbed);
}

module.exports.help = {
  name: 'report'
}
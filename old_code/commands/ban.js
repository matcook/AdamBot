const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) return message.channel.send(`Couldn't find user.`);
    let banReason = args.join(' ').slice(22);
    if(!banReason) banReason = 'No reason specified';
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send(`You don't have the required permissions to use this command.`);
    if(banUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`That person can't be banned.`);

    let banEmbed = new Discord.RichEmbed()
    .setDescription('~Ban~')
    .setColor('#bc0000')
    .addField('Banned User', `${banUser} with ID ${banUser.id}`)
    .addField('Banned By', `<@${message.author.id}> with ID ${message.author.id}`)
    .addField('Banned In', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', banReason);

    let banChannel = message.guild.channels.find(`name`, 'incidents');
    if(!banChannel) return message.channel.send(`Can't find incidents channel`);

    message.guild.member(banUser).ban(banReason);
    banChannel.send(banEmbed);
}

module.exports.help = {
  name: 'ban'
}
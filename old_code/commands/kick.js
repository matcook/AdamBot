const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickUser) return message.channel.send(`Couldn't find user.`);
    let kickReason = args.join(' ').slice(22);
    if(!kickReason) kickReason = 'No reason specified';
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have the required permissions to use this command.`);
    if(kickUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`That person can't be kicked.`);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription('~Kick~')
    .setColor('#e56b00')
    .addField('Kicked User', `${kickUser} with ID ${kickUser.id}`)
    .addField('Kicked By', `<@${message.author.id}> with ID ${message.author.id}`)
    .addField('Kicked In', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', kickReason);

    let kickChannel = message.guild.channels.find(`name`, 'incidents');
    if(!kickChannel) return message.channel.send(`Can't find incidents channel`);

    message.guild.member(kickUser).kick(kickReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: 'kick'
}
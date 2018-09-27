const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  if(!message.member.has('MANAGE_MEMBERS', [checkAdmin])) return message.channel.send(`You don't have the required permissions to use this command.`);

  let roleMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!roleMember) return message.channel.send(`That user doesn't exist.`);

  let role = args.join(' ').slice(22);
  if(!role) return message.channel.send(`You didn't specify a role.`);

  let guildRole = message.guild.roles.find(`name`, role);
  if(!guildRole) return message.channel.send(`That role doesn't exist.`);

  if(roleMember.roles.has(guildRole.id));
  await(roleMember.addRole(guildRole.id));

  try {
    await roleMember.send(`You have been given the role ${guildRole.name}`)
  }catch(e){
    message.channel.send(`<@${roleMember.id}> has been given the role ${guildRole.name}`)
  }
}

module.exports.help = {
  name: 'addrole'
}

// !addrole @RugChef#5825 Pitbullshit
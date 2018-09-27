const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let muteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!muteUser) return message.channel.send(`Couldn't find user.`);
  if(muteUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`That user can't be muted`);
  let muteRole = message.guild.roles.find(`name`, 'Muted');

  if(!muteRole){
    try{
      muteRole = await message.guild.createRole({
        name: 'Muted',
        color: '#000000',
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let muteTime = args[1];
  if(!muteTime) return message.channel.send(`You didn't specify a time!`);

  await(muteUser.addRole(muteRole.id));
  message.channel.send(`<@${muteUser.id}> has been muted for ${ms(ms(muteTime))} `);

  setTimeout(function(){
    muteUser.removeRole(muteRole.id);
    message.channel.send(`<@${muteUser.id}> has been unmuted.`)
  }, ms(muteTime));

}

module.exports.help = {
  name: 'tempmute'
}
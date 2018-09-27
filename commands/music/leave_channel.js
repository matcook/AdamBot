const Commando = require ('discord.js-commando');

class LeaveChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      group: 'music',
      memberName: 'leave',
      description: 'Leaves the voice channel of the command user.'
    });
  }

  async run(message, args) {
    if(message.guild.voiceConnection) {
      message.guild.voiceConnection.disconnect();
    } else {
      message.channel.send(`I must be in a voice channel for you to use this command.`);
    }

  }
}

module.exports = LeaveChannelCommand;
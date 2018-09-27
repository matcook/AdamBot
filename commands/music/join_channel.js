const Commando = require ('discord.js-commando');

class JoinChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'join',
      group: 'music',
      memberName: 'join',
      description: 'Joins the voice channel of the command user.'
    });
  }

  async run(message, args) {
    const channel = message.member.voiceChannel;

    if(channel) {
      channel.join()
      .then(connection => console.log('Connected!'))
      .catch(console.error);
    } else {
      message.channel.send(`You must be in a voice channel to use this command.`);
    }

  }
}

module.exports = JoinChannelCommand;
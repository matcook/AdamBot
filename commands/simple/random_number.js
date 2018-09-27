const Commando = require ('discord.js-commando');

class RandomNumberCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'simple',
      memberName: 'roll',
      description: 'Returns a random number between 1 and the number specified (defaults to 6)'
    });
  }

  async run(message, args) {
    if(!args) {
      let chance = Math.floor(Math.random() * 6) + 1;
      message.channel.send(chance);
    } else {
      let chance = Math.floor(Math.random() * args) + 1;
      message.channel.send(chance);
    }
  }
}


module.exports = RandomNumberCommand;
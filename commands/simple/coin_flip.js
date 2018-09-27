const Commando = require ('discord.js-commando');

class CoinFlipCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'flip',
      group: 'simple',
      memberName: 'flip',
      description: 'Flips a coin, returning either heads or tails'
    });
  }

  async run(message, args) {
    let chance = Math.floor(Math.random() * 2);
    if(chance == 0) {
      message.channel.send('The coin landed on heads.');
      console.log(chance);
    } else {
      message.channel.send('The coin landed on tails');
      console.log(chance);
    }
  }
}

module.exports = CoinFlipCommand;
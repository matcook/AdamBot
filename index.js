const Commando = require ('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDg2ODc1Mjc0OTQ4OTAyOTEy.DnFd4g.UByYQRWDHnSrQOQNsLHmjOEq6oo';

bot.registry.registerGroup(`simple`, `Simple`);
bot.registry.registerGroup(`music`, `Music`);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + `/commands`);

bot.on('message', (message) => {
  if(message.content == `Hello`){
    message.reply(`Hi!`);
  }
});

bot.on('ready', () => {
  console.log('AdamBot is online!');
})

bot.login(TOKEN);